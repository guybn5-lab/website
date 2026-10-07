# Guy Szafman — website

A fast portfolio site in Hebrew and English, built with [Astro](https://astro.build).
There's no Wix, no database and no monthly CMS fee: the site is just files in this repo that build into a static website.

## Structure

| URL | Page |
| --- | --- |
| `/` | Detects the visitor's language and redirects to `/he/` or `/en/` |
| `/he/`, `/en/` | Home: showreel hero, selected work (filterable), the three practices and a short about section |
| `/{lang}/documentary/` | Documentary & Journalism |
| `/{lang}/commercial/` | Commercial |
| `/{lang}/teaching/` | Teaching: a list of courses plus classroom projects |
| `/{lang}/work/{project}/` | A single project: video, details, credits, stills and a link to the next project |
| `/{lang}/about/` | Bio, portrait, outlets and clients |

Every page has a language switch that keeps you on the same page in the other language.
Hebrew pages are fully right-to-left.

## Editing content

**Your details, bio, showreel, courses and clients** → `src/data/site.ts`

**Projects** → one file per project in `src/content/projects/`.
Copy `_template.md.txt` to a new file such as `my-film.md`. The file name becomes the URL. Then fill in the fields.
Everything is optional except `category`, `title` and `year`.

- `category`: `documentary`, `commercial` or `teaching`
- `featured: true` puts the project on the home page. `order` sets the order (lower numbers come first).
- `video`: `provider: vimeo` or `youtube`, plus the `id` from the video's URL
  (`vimeo.com/123456789` → `"123456789"`, `youtube.com/watch?v=AbC123` → `AbC123`)
- `cover`: a 16:9 image in `public/images/projects/`. If a YouTube video has no cover, its thumbnail is used automatically.
- `preview`: an optional 3–6 second silent `.mp4` in `public/video/` that plays when someone hovers over the project
- `stills`: a list of images shown below the text

The sample projects in the folder are placeholders. Delete them once your real work is in.

**Interface text** (menu labels, buttons, category descriptions) → `src/i18n/ui.ts`

### Image and video tips

- Covers: JPG, 1920×1080, under about 400 KB (export at around 75% quality).
- Hero loop (`showreel.loop`): 10–20 seconds, no audio, 1920 px wide, H.264, ideally under 6 MB.
- Full-length films stay on Vimeo or YouTube. The site only embeds them, and loads the player only when someone presses play.

## Running locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs the static site to dist/
```

## Deploying (free)

Any static host works. The easiest options are:

**Cloudflare Pages** or **Netlify** → "Import from GitHub" → pick this repo →
set the build command to `npm run build` and the output directory to `dist`.
Then add your domain (for example `guyszafman.com`) in the host's domain settings and point your DNS to it.
Every push to the main branch redeploys the site automatically.

Set the environment variable `SITE_URL` (for example `https://guyszafman.com`) so that canonical links and social-media previews use the right address.
If you host the site under a sub-path (for example GitHub Pages without a custom domain), also set `BASE_PATH=/website/`.
