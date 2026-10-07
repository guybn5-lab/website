/**
 * Site-wide settings and copy.
 * Everything with { en, he } is shown in the matching language.
 * Edit this file to change your name, bio, contact details and showreel.
 */
import type { Localized } from '../i18n/ui';

export const site = {
  name: { en: 'Guy Szafman', he: 'גיא בן נון' } as Localized,

  /** Short list of what you do — shown above your name on the home page. */
  roles: {
    en: ['Video & podcast producer', 'Journalist', 'Documentarian'],
    he: ['מפיק וידאו ופודקאסטים', 'עיתונאי', 'יוצר תיעודי'],
  },

  /** One line used in search results and link previews. */
  tagline: {
    en: 'Video & podcast producer, journalist and documentarian.',
    he: 'מפיק וידאו ופודקאסטים, עיתונאי ויוצר תיעודי.',
  } as Localized,

  /** Short paragraph shown on the home page. */
  intro: {
    en: 'I make podcasts and videos that tell true stories — from daily news at The Guardian to award-winning documentary series and viral reporting for young audiences in Israel.',
    he: 'אני עושה פודקאסטים וסרטונים שמספרים סיפורים אמיתיים — מחדשות יומיות בגרדיאן ועד סדרות תיעודיות זוכות פרסים וכתבות ויראליות לקהל צעיר בישראל.',
  } as Localized,

  /** Full bio on the About page. Separate paragraphs with a blank line. */
  bio: {
    en: `I'm Guy, a podcast and video producer, documentarian and investigative journalist. I started my journey as an editor and producer of some of Israel's most popular podcasts, and went on to create two award-winning documentary podcasts.

Later, I joined an independent media organisation that targets youth exclusively and created viral news reports. Recently, I joined the team behind The Guardian's podcast Today in Focus, producing daily episodes for the outlet's flagship show.

In between, I published articles in Ynet, Israel's leading news website; reported from a war zone; produced a series of testimonial videos for monday.com; and edited the Israeli version of the American All-In podcast.`,
    he: `אני גיא — מפיק פודקאסטים ווידאו, יוצר תיעודי ועיתונאי תחקירים. התחלתי את הדרך כעורך ומפיק של כמה מהפודקאסטים הפופולריים בישראל, ובהמשך יצרתי שני פודקאסטים תיעודיים זוכי פרסים.

אחר כך הצטרפתי לארגון מדיה עצמאי שפונה לצעירים בלבד, ויצרתי כתבות חדשותיות ויראליות. לאחרונה הצטרפתי לצוות של Today in Focus, הפודקאסט היומי של הגרדיאן, ואני מפיק פרקים יומיים לתוכנית הדגל של העיתון.

בין לבין פרסמתי כתבות ב־ynet, דיווחתי מאזור מלחמה, הפקתי סדרת סרטוני עדות עבור monday.com וערכתי את הגרסה הישראלית של הפודקאסט האמריקאי All-In.`,
  } as Localized,

  /** Path under /public. Leave empty for a placeholder. */
  portrait: '/images/portrait.webp',

  contact: {
    /**
     * Contact form → your inbox, without showing your address on the site.
     * Uses Web3Forms (free): get an access key at https://web3forms.com by entering the
     * address that should receive messages, then paste the key here.
     */
    formAccessKey: 'd78c560e-0423-465a-87a0-975c5a66e702',
    email: '', // shown publicly on the site — leave '' to keep it private
    phone: '', // e.g. '+972-50-000-0000'
    whatsapp: '', // digits only, e.g. '972500000000'
    location: { en: '', he: '' } as Localized,
  },

  /** Leave a url empty to hide that link. */
  social: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/guy-bin-nun-szafman-1b440b195' },
    { label: 'Instagram', url: 'https://www.instagram.com/guybn5/' },
    { label: 'Facebook', url: 'https://www.facebook.com/guy.binnoun' },
  ],

  /**
   * Optional showreel.
   * - loop: a short, silent, compressed mp4 (e.g. /video/reel-loop.mp4) that plays in the home page hero instead of the portrait.
   * - full: the full reel with sound, opened from the "Watch showreel" button.
   */
  showreel: {
    loop: '',
    poster: '',
    full: { provider: '', id: '' } as VideoRef,
  },

  /** Outlets and clients — shown on the About page. */
  clients: {
    en: ['The Guardian', 'ynet', 'PI Media', 'monday.com', 'monday.com Foundation', 'Wix', 'Check Point', 'Shufersal', 'Yad Vashem', 'Hillel', 'Under the Radar', 'Radical'],
    he: ['הגרדיאן', 'ynet', 'PI Media', 'monday.com', 'קרן monday.com', 'וויקס', 'צ׳ק פוינט', 'שופרסל', 'יד ושם', 'עמותת הלל', 'מתחת לרדאר', 'רדיקל'],
  },

  /**
   * Courses and workshops — listed on the Teaching page. Newest first. Example:
   * { years: '2024 —', title: { en: 'Podcast Production Workshop', he: 'סדנת הפקת פודקאסטים' }, where: { en: 'Institution', he: 'מוסד' } },
   */
  courses: [] as { years: string; title: Localized; where: Localized }[],
};

export type VideoRef = { provider: 'vimeo' | 'youtube' | ''; id: string };
