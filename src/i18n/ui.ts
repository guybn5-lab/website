export const languages = ['he', 'en'] as const;
export type Lang = (typeof languages)[number];
export type Localized = Record<Lang, string>;

export const dir = (lang: Lang) => (lang === 'he' ? 'rtl' : 'ltr');

export const categories = ['documentary', 'commercial', 'teaching'] as const;
export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, Localized> = {
  documentary: { en: 'Documentary & Journalism', he: 'תיעודי ועיתונות' },
  commercial: { en: 'Commercial', he: 'מסחרי' },
  teaching: { en: 'Teaching', he: 'הוראה' },
};

export const categoryIntros: Record<Category, Localized> = {
  documentary: {
    en: 'Documentaries, investigations and news features — stories that start with a question and stay with people long enough to find an answer.',
    he: 'סרטים תיעודיים, תחקירים וכתבות — סיפורים שמתחילים בשאלה ונשארים עם האנשים מספיק זמן כדי למצוא תשובה.',
  },
  commercial: {
    en: 'Brand films, campaigns and content for organisations — made with a documentary eye: real people, real places, nothing staged that doesn’t need to be.',
    he: 'סרטי מותג, קמפיינים ותוכן לארגונים — בעין תיעודית: אנשים אמיתיים, מקומות אמיתיים, בלי לביים את מה שלא צריך.',
  },
  teaching: {
    en: 'Courses and workshops in documentary filmmaking, cinematography and mobile storytelling — for students, journalists and communities.',
    he: 'קורסים וסדנאות בקולנוע תיעודי, צילום וסיפור בסמארטפון — לסטודנטים, לעיתונאים ולקהילות.',
  },
};

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'lang.switch': 'עברית',
    'lang.switchLabel': 'עברית — Hebrew version',
    'home.selected': 'Selected work',
    'home.all': 'All',
    'home.practices': 'Three ways of working',
    'home.viewAll': 'View all',
    'home.reel': 'Watch showreel',
    'home.aboutMore': 'More about me',
    'project.year': 'Year',
    'project.role': 'Role',
    'project.client': 'For',
    'project.duration': 'Duration',
    'project.credits': 'Credits',
    'project.festivals': 'Screenings & awards',
    'project.stills': 'Stills',
    'project.next': 'Next project',
    'project.back': 'Back to',
    'project.play': 'Play',
    'project.noVideo': 'Video coming soon',
    'teaching.courses': 'Courses & workshops',
    'teaching.work': 'From the classroom',
    'about.title': 'About',
    'about.clients': 'Selected outlets & clients',
    'contact.title': 'Let’s work together',
    'contact.text': 'For commissions, collaborations, workshops and teaching — write to me.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.elsewhere': 'Elsewhere',
    'footer.rights': 'All rights reserved.',
    'notfound.title': 'Page not found',
    'notfound.back': 'Back to the home page',
    'a11y.skip': 'Skip to content',
  },
  he: {
    'nav.about': 'אודות',
    'nav.contact': 'צור קשר',
    'nav.menu': 'תפריט',
    'nav.close': 'סגירה',
    'lang.switch': 'English',
    'lang.switchLabel': 'English version',
    'home.selected': 'עבודות נבחרות',
    'home.all': 'הכל',
    'home.practices': 'שלושה תחומים',
    'home.viewAll': 'לכל העבודות',
    'home.reel': 'צפייה בשואוריל',
    'home.aboutMore': 'עוד עליי',
    'project.year': 'שנה',
    'project.role': 'תפקיד',
    'project.client': 'עבור',
    'project.duration': 'אורך',
    'project.credits': 'קרדיטים',
    'project.festivals': 'הקרנות ופרסים',
    'project.stills': 'סטילס',
    'project.next': 'לפרויקט הבא',
    'project.back': 'חזרה אל',
    'project.play': 'ניגון',
    'project.noVideo': 'הווידאו יעלה בקרוב',
    'teaching.courses': 'קורסים וסדנאות',
    'teaching.work': 'מהכיתה',
    'about.title': 'אודות',
    'about.clients': 'כלי תקשורת ולקוחות',
    'contact.title': 'בואו נעבוד יחד',
    'contact.text': 'להזמנות עבודה, שיתופי פעולה, סדנאות והוראה — כתבו לי.',
    'contact.email': 'אימייל',
    'contact.phone': 'טלפון',
    'contact.whatsapp': 'וואטסאפ',
    'contact.elsewhere': 'ברשת',
    'footer.rights': 'כל הזכויות שמורות.',
    'notfound.title': 'העמוד לא נמצא',
    'notfound.back': 'חזרה לעמוד הבית',
    'a11y.skip': 'דילוג לתוכן',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export const t = (lang: Lang, key: UIKey) => ui[lang][key];

/** Prefix a site-relative path with the configured base path. */
export const href = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

/** Link to a page in a given language, e.g. localHref('he', '/about/') → /he/about/ */
export const localHref = (lang: Lang, path = '/') => href(`/${lang}${path}`);

export const otherLang = (lang: Lang): Lang => (lang === 'he' ? 'en' : 'he');

export const langPaths = () => languages.map((lang) => ({ params: { lang } }));
