import type { Category, Lang, Localized } from '../i18n/ui';
import type { VideoRef } from '../data/site';

export interface Credit {
  role: Localized;
  name: Localized | string;
}

export interface Project {
  slug: string;
  category: Category;
  title: Localized;
  /** podcast | podcast-series | daily-podcast | videocast | video | podcast-video | reporting | workshop */
  format?: string;
  year?: number | string;
  /** Outlet, channel, client or institution. */
  client?: Localized;
  role?: Localized;
  duration?: string;
  /** Short line under the title, e.g. "#1 on Apple Podcasts in Israel". */
  highlight?: Localized;
  award?: boolean;
  summary?: Localized;
  description?: Localized;
  video?: VideoRef;
  /** Spotify show or episode, e.g. { type: show, id: 00XeZtXvboICEFbEOBOgO0 } */
  spotify?: { type: 'show' | 'episode'; id: string };
  /** Extra videos shown as a list of episodes. */
  videos?: { provider: 'youtube' | 'vimeo'; id: string; title: Localized | string; duration?: string }[];
  /**
   * Extra content embedded on the project page — paste normal share links:
   * episodes (Spotify / Apple Podcasts), Instagram posts & reels, TikToks, YouTube videos…
   */
  embeds?: (string | { url: string; title?: Localized | string })[];
  /** Links to listen or watch elsewhere. */
  links?: { label: Localized | string; url: string }[];
  /** Image path under /public. Falls back to the YouTube thumbnail, then a placeholder. */
  cover?: string;
  /** Short silent mp4 under /public that plays when hovering the card. */
  preview?: string;
  stills?: string[];
  credits?: Credit[];
  festivals?: { en: string[]; he: string[] };
  featured?: boolean;
  /** Lower numbers come first. Ties are broken by year, newest first. */
  order?: number;
}

/** First four-digit year in `year` (handles ranges like "2021–2023"). */
function startYear(p: { year?: number | string }) {
  return Number(String(p.year ?? '').match(/\d{4}/)?.[0] ?? 0);
}

const modules = import.meta.glob<{ frontmatter: Omit<Project, 'slug'> }>('../content/projects/*.md', {
  eager: true,
});

export const projects: Project[] = Object.entries(modules)
  .map(([file, mod]) => ({
    ...mod.frontmatter,
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
  }))
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || startYear(b) - startYear(a));

export const byCategory = (category: Category) => projects.filter((p) => p.category === category);

export const featured = () => {
  const list = projects.filter((p) => p.featured);
  return list.length ? list : projects.slice(0, 6);
};

export const localize = (value: Localized | string | undefined, lang: Lang) =>
  value == null ? '' : typeof value === 'string' ? value : value[lang] || value.en || value.he;

export const youtubeThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const coverFor = (p: Project) => {
  if (p.cover) return p.cover;
  if (p.video?.provider === 'youtube' && p.video.id) return youtubeThumb(p.video.id);
  return '';
};

export const embedUrl = (video: VideoRef | undefined) => {
  if (!video?.id) return '';
  if (video.provider === 'youtube')
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
  if (video.provider === 'vimeo') return `https://player.vimeo.com/video/${video.id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;
  return '';
};

/** The main audio player for a project: its Spotify show/episode, else its Apple Podcasts page. */
export const mainPlayerUrl = (p: Project) => {
  if (p.spotify?.id) return `https://open.spotify.com/${p.spotify.type}/${p.spotify.id}`;
  return p.links?.find((l) => /podcasts\.apple\.com\/.*\/id\d+/.test(l.url))?.url ?? '';
};

/** Split text into paragraphs on blank lines. */
export const paragraphs = (text: string) =>
  text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

/** Stable 0–359 hue from a string — used to tint placeholders so they don't all look identical. */
export const hueFor = (s: string) => {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
};
