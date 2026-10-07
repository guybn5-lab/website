export const languages = ['he', 'en'] as const;
export type Lang = (typeof languages)[number];
export type Localized = Record<Lang, string>;

export const dir = (lang: Lang) => (lang === 'he' ? 'rtl' : 'ltr');

export const categories = ['journalism', 'commercial', 'teaching'] as const;
export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, Localized> = {
  journalism: { en: 'Journalism & Documentary', he: 'עיתונות ותיעוד' },
  commercial: { en: 'Commercial', he: 'מסחרי' },
  teaching: { en: 'Teaching', he: 'הוראה' },
};

export const categoryIntros: Record<Category, Localized> = {
  journalism: {
    en: 'Documentary podcasts, daily news shows, video reports and investigations — from The Guardian and ynet to independent youth media.',
    he: 'פודקאסטים תיעודיים, תוכניות חדשות יומיות, כתבות וידאו ותחקירים — מהגרדיאן ו־ynet ועד מדיה עצמאית לצעירים.',
  },
  commercial: {
    en: 'Podcasts and video for companies and organisations — interview series, studio and on-location productions, built with a journalist’s ear for a good story.',
    he: 'פודקאסטים ווידאו לחברות ולארגונים — סדרות ראיונות, הפקות באולפן ובלוקיישן, עם אוזן של עיתונאי לסיפור טוב.',
  },
  teaching: {
    en: 'Workshops and courses in podcast production, audio storytelling and video journalism.',
    he: 'סדנאות וקורסים בהפקת פודקאסטים, סיפור באודיו ועיתונות וידאו.',
  },
};

export const formatLabels: Record<string, Localized> = {
  podcast: { en: 'Podcast', he: 'פודקאסט' },
  'podcast-series': { en: 'Documentary podcast', he: 'פודקאסט תיעודי' },
  'daily-podcast': { en: 'Daily podcast', he: 'פודקאסט יומי' },
  videocast: { en: 'Videocast', he: 'וידאוקאסט' },
  video: { en: 'Video', he: 'וידאו' },
  'podcast-video': { en: 'Podcast & video', he: 'פודקאסט ווידאו' },
  reporting: { en: 'Video reporting', he: 'כתבות וידאו' },
  workshop: { en: 'Workshop', he: 'סדנה' },
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
    'home.index': 'Index',
    'home.indexAll': 'All projects',
    'home.hello': 'Hello, I’m Guy.',
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
    'project.award': 'Award-winning',
    'project.listen': 'Listen & watch',
    'project.videos': 'Episodes',
    'project.format': 'Format',
    'teaching.courses': 'Courses & workshops',
    'teaching.work': 'From the classroom',
    'teaching.empty': 'I teach workshops in podcast production, audio storytelling and video journalism — for newsrooms, organisations and students. Get in touch to plan one.',
    'about.title': 'About',
    'about.clients': 'Selected outlets & clients',
    'contact.title': 'Let’s work together',
    'contact.text': 'Have a story, a show or a workshop in mind? I’d love to hear about it.',
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
    'home.index': 'אינדקס',
    'home.indexAll': 'כל הפרויקטים',
    'home.hello': 'היי, אני גיא.',
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
    'project.award': 'זוכה פרסים',
    'project.listen': 'להאזנה ולצפייה',
    'project.videos': 'פרקים',
    'project.format': 'פורמט',
    'teaching.courses': 'קורסים וסדנאות',
    'teaching.work': 'מהכיתה',
    'teaching.empty': 'אני מעביר סדנאות בהפקת פודקאסטים, סיפור באודיו ועיתונות וידאו — למערכות חדשות, לארגונים ולסטודנטים. דברו איתי כדי לתכנן סדנה.',
    'about.title': 'אודות',
    'about.clients': 'כלי תקשורת ולקוחות',
    'contact.title': 'בואו נעבוד יחד',
    'contact.text': 'יש לכם סיפור, תוכנית או סדנה בראש? אשמח לשמוע.',
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
