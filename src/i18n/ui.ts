import text from '../data/text.json';

export const languages = ['he', 'en'] as const;
export type Lang = (typeof languages)[number];
export type Localized = Record<Lang, string>;

export const dir = (lang: Lang) => (lang === 'he' ? 'rtl' : 'ltr');

export const categories = ['journalism', 'commercial', 'knowledge-sharing'] as const;
export type Category = (typeof categories)[number];

/*
 * All interface text (menus, headings, buttons, form labels…) lives in src/data/text.json,
 * which is editable in the site editor (/admin/ → Site settings → Page text).
 * JSON keys use "_" where the code uses "-" or "." (e.g. knowledge_sharing, subject_podcast).
 */
type Text = typeof text;
type Group = Exclude<keyof Text, 'categories' | 'formats'>;
type Dotted<S extends string> = S extends `${infer A}_${infer B}` ? `${A}.${Dotted<B>}` : S;
export type UIKey = { [G in Group]: `${G}.${Dotted<keyof Text[G] & string>}` }[Group];

/** The editor drops fields that are left empty, so fall back to the other language, then to ''. */
const pick = (v: Partial<Localized> | undefined, lang: Lang) =>
  v?.[lang] || v?.[lang === 'he' ? 'en' : 'he'] || '';
const full = (v: Partial<Localized> | undefined): Localized => ({ en: pick(v, 'en'), he: pick(v, 'he') });
const jsonKey = (key: string) => key.replace(/-/g, '_');

const cats = text.categories as Partial<Record<string, { label?: Partial<Localized>; intro?: Partial<Localized> }>>;
export const categoryLabels = Object.fromEntries(
  categories.map((c) => [c, full(cats[jsonKey(c)]?.label)]),
) as Record<Category, Localized>;
export const categoryIntros = Object.fromEntries(
  categories.map((c) => [c, full(cats[jsonKey(c)]?.intro)]),
) as Record<Category, Localized>;

const formats = text.formats as Partial<Record<string, Partial<Localized>>>;
export const formatLabels: Record<string, Localized> = Object.fromEntries(
  Object.entries(formats).map(([k, v]) => [k.replace(/_/g, '-'), full(v)]),
);

export const t = (lang: Lang, key: UIKey): string => {
  const [group, ...rest] = key.split('.');
  const groupText = (text as unknown as Record<string, Record<string, Partial<Localized>> | undefined>)[group];
  return pick(groupText?.[rest.join('_')], lang);
};

/** Prefix a site-relative path with the configured base path. */
export const href = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
};

/** Link to a page in a given language, e.g. localHref('he', '/about/') → /he/about/ */
export const localHref = (lang: Lang, path = '/') => href(`/${lang}${path}`);

export const otherLang = (lang: Lang): Lang => (lang === 'he' ? 'en' : 'he');

export const langPaths = () => languages.map((lang) => ({ params: { lang } }));
