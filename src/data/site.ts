/**
 * Site-wide settings and copy.
 * The values live in site.json, so they can be edited at /admin/ ("Site settings")
 * or by hand. Everything with { en, he } is shown in the matching language.
 */
import type { Localized } from '../i18n/ui';
import data from './site.json';

export type VideoRef = { provider: 'vimeo' | 'youtube' | ''; id: string };

export interface SiteData {
  name: Localized;
  /** Short list of what you do — shown above your name on the home page. */
  roles: { en: string[]; he: string[] };
  /** One line used in search results and link previews. */
  tagline: Localized;
  /** Short paragraph shown on the home page. */
  intro: Localized;
  /** Full bio on the About page. Separate paragraphs with a blank line. */
  bio: Localized;
  /** Path under /public. Leave empty for a placeholder. */
  portrait: string;
  contact: {
    /**
     * Contact form → your inbox, without showing your address on the site.
     * Uses Web3Forms (free): get an access key at https://web3forms.com by entering the
     * address that should receive messages, then paste the key here.
     */
    formAccessKey: string;
    /** Shown publicly on the site — leave '' to keep it private. */
    email: string;
    /** e.g. '+972-50-000-0000' */
    phone: string;
    /** Digits only, e.g. '972500000000' */
    whatsapp: string;
    location: Localized;
  };
  /** Leave a url empty to hide that link. */
  social: { label: string; url: string }[];
  /**
   * Optional showreel.
   * - loop: a short, silent, compressed mp4 (e.g. /video/reel-loop.mp4) that plays in the home page hero instead of the portrait.
   * - full: the full reel with sound, opened from the "Watch showreel" button.
   */
  showreel: { loop: string; poster: string; full: VideoRef };
  /** Outlets and clients — shown on the About page. */
  clients: { en: string[]; he: string[] };
  /** Courses and workshops — listed on the Teaching page. Newest first. */
  courses: { years: string; title: Localized; where: Localized }[];
}

/** The editor leaves empty fields out of site.json, so fill them back in here. */
const json = data as Partial<SiteData>;
const empty = { en: '', he: '' };
const emptyList = { en: [], he: [] };

export const site: SiteData = {
  ...json,
  name: { ...empty, ...json.name },
  roles: { ...emptyList, ...json.roles },
  tagline: { ...empty, ...json.tagline },
  intro: { ...empty, ...json.intro },
  bio: { ...empty, ...json.bio },
  portrait: json.portrait ?? '',
  contact: {
    formAccessKey: '',
    email: '',
    phone: '',
    whatsapp: '',
    ...json.contact,
    location: { ...empty, ...json.contact?.location },
  },
  social: json.social ?? [],
  showreel: {
    loop: '',
    poster: '',
    ...json.showreel,
    full: { provider: '', id: '', ...json.showreel?.full },
  },
  clients: { ...emptyList, ...json.clients },
  courses: json.courses ?? [],
};
