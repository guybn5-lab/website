# Guy Szafman — website

A fast portfolio site in Hebrew and English, built with [Astro](https://astro.build).
There's no Wix, no database and no monthly CMS fee: the site is just files in this repo that build into a static website.

## Structure

| URL | Page |
| --- | --- |
| `/` | Detects the visitor's language and redirects to `/he/` or `/en/` |
| `/he/`, `/en/` | Home: intro and portrait, selected work (filterable), an index of all projects, and the three areas |
| `/{lang}/journalism/` | Journalism & Documentary |
| `/{lang}/commercial/` | Commercial |
| `/{lang}/teaching/` | Teaching: a list of courses plus classroom projects |
| `/{lang}/work/{project}/` | A single project: cover art or video, Spotify player, description, details, episodes, stills and a link to the next project |
| `/{lang}/about/` | Bio, portrait, outlets and clients |

Every page has a language switch that keeps you on the same page in the other language.
Hebrew pages are fully right-to-left.

## Editing content

**Your details, bio, showreel, courses and clients** → `src/data/site.ts`

**Projects** → one file per project in `src/content/projects/`.
Copy `_template.md.txt` to a new file such as `my-film.md`. The file name becomes the URL. Then fill in the fields.
Everything is optional except `category` and `title`.

- `category`: `journalism`, `commercial` or `teaching`
- `format`: `podcast`, `podcast-series`, `daily-podcast`, `videocast`, `video`, `podcast-video`, `reporting` or `workshop`
- `award: true` adds the red "Award-winning" badge; `highlight` is a short line such as a chart position
- `featured: true` puts the project on the home page. `order` sets the order (lower numbers come first).
- `video`: `provider: vimeo` or `youtube`, plus the `id` from the video's URL
  (`vimeo.com/123456789` → `"123456789"`, `youtube.com/watch?v=AbC123` → `AbC123`)
- `spotify`: `type: show` (or `episode`) plus the `id` from the Spotify link, to show a Spotify player
- `links`: buttons to listen or watch elsewhere (Apple Podcasts, the outlet's website and so on)
- `videos`: a list of extra YouTube/Vimeo videos shown as episodes
- `cover`: a square image (1200×1200) in `public/images/projects/`. If a YouTube video has no cover, its thumbnail is used automatically.
- `preview`: an optional 3–6 second silent `.mp4` in `public/video/` that plays when someone hovers over the project
- `stills`: a list of images shown below the text

The projects were copied from the old Wix site. Several are missing years, roles and listening links, which you can add any time.

**Contact form** → messages are delivered by [Web3Forms](https://web3forms.com) (free), so your email address never appears on the site.
Go to web3forms.com, enter the address that should receive messages, and paste the access key you get by email into `formAccessKey` in `src/data/site.ts`.

**Interface text** (menu labels, buttons, category descriptions) → `src/i18n/ui.ts`

### Image and video tips

- Covers: square JPG or WebP, 1200×1200, under about 300 KB.
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
