export const languages = ['he', 'en'] as const;
export type Lang = (typeof languages)[number];
export type Localized = Record<Lang, string>;

export const dir = (lang: Lang) => (lang === 'he' ? 'rtl' : 'ltr');

export const categories = ['journalism', 'commercial', 'knowledge-sharing'] as const;
export type Category = (typeof categories)[number];

export const categoryLabels: Record<Category, Localized> = {
  journalism: { en: 'Journalism & Documentary', he: 'עיתונות ותיעוד' },
  commercial: { en: 'Commercial', he: 'מסחרי' },
  'knowledge-sharing': { en: 'Knowledge Sharing', he: 'שיתוף ידע' },
};

export const categoryIntros: Record<Category, Localized> = {
  journalism: {
    en: 'Documentary podcasts, daily news shows, video reports and investigations — from The Guardian and ynet to independent youth media.',
    he: 'פודקאסטים תיעודיים, תוכניות חדשות יומיות, כתבות וידאו ותחקירים — מהגרדיאן ו־ynet ועד מדיה עצמאית לצעירים.',
  },
  commercial: {
    en: 'Branded podcasts and video for companies and organisations — from monday.com, Wix and Check Point to Shufersal, Yad Vashem and Hillel — made with a journalist’s ear for a good story.',
    he: 'פודקאסטים ווידאו ממותגים לחברות ולארגונים — מ־monday.com, וויקס וצ׳ק פוינט ועד שופרסל, יד ושם ועמותת הלל — עם אוזן של עיתונאי לסיפור טוב.',
  },
  'knowledge-sharing': {
    en: 'Sharing the craft of podcast-making — with students across Israel through Tech School, and with teachers in professional training courses.',
    he: 'שיתוף הידע ביצירת פודקאסטים — עם תלמידים ברחבי הארץ דרך Tech School, ועם מורים בהשתלמויות מקצועיות.',
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
  program: { en: 'Education programme', he: 'תוכנית חינוכית' },
  training: { en: 'Teacher training', he: 'השתלמות מורים' },
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
    'home.hello': 'Guy Szafman',
    'home.aboutMore': 'More about Guy',
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
    'project.more': 'More from this project',
    'project.episodes': 'Selected episodes',
    'project.social': 'On social',
    'project.showAll': 'Show all',
    'project.format': 'Format',
    'teaching.courses': 'Courses & workshops',
    'teaching.work': 'From the classroom',
    'teaching.empty': 'Workshops in podcast production, audio storytelling and video journalism — for newsrooms, organisations and students. Get in touch to plan one.',
    'about.title': 'About',
    'about.clients': 'Selected outlets & clients',
    'contact.title': 'Let’s work together',
    'contact.text': 'Have a story, a show or a workshop in mind? Get in touch.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.elsewhere': 'Elsewhere',
    'form.name': 'Name',
    'form.email': 'Email',
    'form.subject': 'What’s it about?',
    'form.subject.podcast': 'A podcast',
    'form.subject.video': 'Video',
    'form.subject.teaching': 'A workshop or talk',
    'form.subject.other': 'Something else',
    'form.message': 'Message',
    'form.send': 'Send message',
    'form.sending': 'Sending…',
    'form.success': 'Thanks — your message has been sent.',
    'form.error': 'Something went wrong and the message wasn’t sent. Please try again, or get in touch on LinkedIn.',
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
    'home.hello': 'גיא בן נון',
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
    'project.more': 'עוד מהפרויקט',
    'project.episodes': 'פרקים נבחרים',
    'project.social': 'ברשתות',
    'project.showAll': 'להציג הכל',
    'project.format': 'פורמט',
    'teaching.courses': 'קורסים וסדנאות',
    'teaching.work': 'מהכיתה',
    'teaching.empty': 'סדנאות בהפקת פודקאסטים, סיפור באודיו ועיתונות וידאו — למערכות חדשות, לארגונים ולסטודנטים. צרו קשר כדי לתכנן סדנה.',
    'about.title': 'אודות',
    'about.clients': 'כלי תקשורת ולקוחות',
    'contact.title': 'בואו נעבוד יחד',
    'contact.text': 'יש לכם סיפור, תוכנית או סדנה בראש? צרו קשר.',
    'contact.email': 'אימייל',
    'contact.phone': 'טלפון',
    'contact.whatsapp': 'וואטסאפ',
    'contact.elsewhere': 'ברשת',
    'form.name': 'שם',
    'form.email': 'אימייל',
    'form.subject': 'על מה מדובר?',
    'form.subject.podcast': 'פודקאסט',
    'form.subject.video': 'וידאו',
    'form.subject.teaching': 'סדנה או הרצאה',
    'form.subject.other': 'משהו אחר',
    'form.message': 'הודעה',
    'form.send': 'שליחה',
    'form.sending': 'שולח…',
    'form.success': 'תודה — ההודעה נשלחה.',
    'form.error': 'משהו השתבש וההודעה לא נשלחה. אפשר לנסות שוב, או ליצור קשר בלינקדאין.',
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
