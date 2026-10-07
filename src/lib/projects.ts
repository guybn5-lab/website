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
  year: number | string;
  /** Outlet, channel, client or institution. */
  client?: Localized;
  role?: Localized;
  duration?: string;
  summary?: Localized;
  description?: Localized;
  video?: VideoRef;
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

const modules = import.meta.glob<{ frontmatter: Omit<Project, 'slug'> }>('../content/projects/*.md', {
  eager: true,
});

export const projects: Project[] = Object.entries(modules)
  .map(([file, mod]) => ({
    ...mod.frontmatter,
    slug: file.split('/').pop()!.replace(/\.md$/, ''),
  }))
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999) || Number(b.year) - Number(a.year));

export const byCategory = (category: Category) => projects.filter((p) => p.category === category);

export const featured = () => {
  const list = projects.filter((p) => p.featured);
  return list.length ? list : projects.slice(0, 8);
};

export const localize = (value: Localized | string | undefined, lang: Lang) =>
  value == null ? '' : typeof value === 'string' ? value : value[lang] || value.en || value.he;

export const coverFor = (p: Project) => {
  if (p.cover) return p.cover;
  if (p.video?.provider === 'youtube' && p.video.id) return `https://i.ytimg.com/vi/${p.video.id}/maxresdefault.jpg`;
  return '';
};

export const embedUrl = (video: VideoRef | undefined) => {
  if (!video?.id) return '';
  if (video.provider === 'youtube')
    return `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
  if (video.provider === 'vimeo') return `https://player.vimeo.com/video/${video.id}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;
  return '';
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
