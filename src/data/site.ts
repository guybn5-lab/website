/**
 * Site-wide settings and copy.
 * Everything with { en, he } is shown in the matching language.
 * Edit this file to change your name, bio, contact details and showreel.
 */
import type { Localized } from '../i18n/ui';

export const site = {
  name: { en: 'Guy Szafman', he: 'גיא שפמן' } as Localized,

  /** One line under the name in the hero and in search results. */
  tagline: {
    en: 'Director & cinematographer — documentary, journalism and commercial film.',
    he: 'במאי וצלם — קולנוע תיעודי, עיתונות ותוכן מסחרי.',
  } as Localized,

  /** Short paragraph shown on the home page. */
  intro: {
    en: 'I make films about people and the places they live in — for television news and current affairs, for independent documentaries, and for brands that want to tell a true story. I also teach documentary filmmaking and visual storytelling.',
    he: 'אני עושה סרטים על אנשים ועל המקומות שבהם הם חיים — לחדשות ולתחקירים בטלוויזיה, לסרטים תיעודיים עצמאיים, ולמותגים שרוצים לספר סיפור אמיתי. אני גם מלמד קולנוע תיעודי וסיפור חזותי.',
  } as Localized,

  /** Full bio on the About page. Separate paragraphs with a blank line. */
  bio: {
    en: `Guy Szafman is a director and cinematographer based in Tel Aviv. His work moves between journalism, documentary and commercial production — always starting from the same place: real people, real situations, and the patience to wait for the moment that tells the story.

He has filmed and directed for television news and current-affairs programmes, independent documentaries and international outlets, and works with agencies and brands on documentary-style campaigns.

Alongside his own work, Guy teaches documentary filmmaking, cinematography and mobile storytelling in academic programmes, newsrooms and community workshops.`,
    he: `גיא שפמן הוא במאי וצלם שחי ועובד בתל אביב. העבודה שלו נעה בין עיתונות, קולנוע תיעודי והפקות מסחריות — ותמיד מתחילה מאותה נקודה: אנשים אמיתיים, מצבים אמיתיים, והסבלנות לחכות לרגע שמספר את הסיפור.

הוא צילם וביים עבור חדשות ותוכניות תחקיר בטלוויזיה, סרטים תיעודיים עצמאיים וכלי תקשורת בינלאומיים, ועובד עם משרדי פרסום ומותגים על קמפיינים בסגנון תיעודי.

לצד העבודה האישית, גיא מלמד קולנוע תיעודי, צילום וסיפור בסמארטפון בתוכניות אקדמיות, במערכות חדשות ובסדנאות קהילתיות.`,
  } as Localized,

  /** Path under /public, e.g. '/images/portrait.jpg'. Leave empty for a placeholder. */
  portrait: '',

  contact: {
    // TODO: replace with your real details
    email: 'hello@example.com',
    phone: '+972-50-000-0000',
    whatsapp: '972500000000', // digits only, used for the wa.me link; '' to hide
    location: { en: 'Tel Aviv, Israel', he: 'תל אביב' } as Localized,
  },

  /** Leave a url empty to hide that link. */
  social: [
    { label: 'Instagram', url: '' },
    { label: 'Vimeo', url: '' },
    { label: 'YouTube', url: '' },
    { label: 'LinkedIn', url: '' },
    { label: 'IMDb', url: '' },
  ],

  /**
   * Showreel.
   * - loop: a short, silent, compressed mp4 (/public/video/reel-loop.mp4) that plays behind the hero.
   * - poster: still image shown before the loop loads.
   * - full: the full reel with sound, opened from the "Watch showreel" button.
   */
  showreel: {
    loop: '',
    poster: '',
    full: { provider: '', id: '' } as VideoRef,
  },

  /** Outlets and clients — shown as a simple list on the About page. */
  clients: {
    en: ['Outlet / channel', 'Production company', 'Agency', 'Brand', 'NGO', 'University'],
    he: ['ערוץ / כלי תקשורת', 'חברת הפקה', 'משרד פרסום', 'מותג', 'עמותה', 'אוניברסיטה'],
  },

  /** Courses and workshops — listed on the Teaching page. Newest first. */
  courses: [
    {
      years: '2023 —',
      title: { en: 'Documentary Filmmaking Workshop', he: 'סדנת קולנוע תיעודי' },
      where: { en: 'Institution name', he: 'שם המוסד' },
    },
    {
      years: '2022 —',
      title: { en: 'Mobile Journalism (MoJo) for Newsrooms', he: 'עיתונות בסמארטפון למערכות חדשות' },
      where: { en: 'Newsroom training programme', he: 'תוכנית הכשרה למערכות חדשות' },
    },
    {
      years: '2020 — 2022',
      title: { en: 'Cinematography for Documentary', he: 'צילום לקולנוע תיעודי' },
      where: { en: 'Film school', he: 'בית ספר לקולנוע' },
    },
  ] as { years: string; title: Localized; where: Localized }[],
};

export type VideoRef = { provider: 'vimeo' | 'youtube' | ''; id: string };
