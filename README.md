# The Things I Kept.

A personal photographic archive, built with Astro 7, content collections and GitHub Pages.

**Status:** A complete static publishing foundation, currently using **visual photo placeholders** until the author's own exports are uploaded.

**Live site:** https://trigon1998.github.io/the-things-i-kept/

## Publish without editing layouts

Read the step-by-step **[Content Guide](docs/CONTENT_GUIDE.md)**. You can manage your content with GitHub's website:

| Task | Edit |
| --- | --- |
| Upload photo | `public/photos/` |
| Register photo and metadata | `src/data/photos.json` |
| Add/edit a Story | `src/content/stories/*.md` or `*.mdx` |
| Add/edit a Journal | `src/content/journal/*.md` or `*.mdx` |
| Homepage hero text and photo | `src/data/site-content.json` |
| About page | `src/content/pages/about.md` |

The homepage and Archive automatically reflect published content. Story sequencing supports single images, pairs, and text pauses. `draft: true` excludes an entry from public pages, but does not make committed files private.

## Developer setup

- Node.js 24
- `npm install`
- `npm run dev`
- `npm run build`

This is a fully static build: no database, no server process, no CMS login. Deploy runs from `.github/workflows/deploy.yml` when the `main` branch changes. In GitHub repository Settings → Pages, choose **GitHub Actions**.

**Be careful:** The earlier 48-file local ZIP and the GitHub repository have different Git histories. The GitHub repository is the canonical live source. Do not force-push the older ZIP over it.

No other repositories have been modified.
