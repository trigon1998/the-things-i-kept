# The Things I Kept.

A quiet, photographer-first website for stories, journal entries and an evolving archive.

**Stack:** Astro 7 · Static HTML · GitHub Pages · Node 24 · no backend/database.

## Current GitHub version

This repository contains a **deployable, compact V1 scaffold** generated directly in ChatGPT with the refreshed GitHub connection. It is **not byte-for-byte identical** to the earlier 48-file `the-things-i-kept-astro-v1.zip` shared in the conversation and committed locally on the Mac. The GitHub copy contains the key pages and interactions in a simpler file structure.

The site currently uses **illustrative CSS color fields as photo placeholders**. No photograph is presented as the author's actual image. Replace these before public launch.

## GitHub Pages

1. Go to **Settings → Pages** on this repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Go to **Actions → Deploy Astro to GitHub Pages** and select **Run workflow** (or rerun the previously failed deployment).
4. After the deploy job succeeds, open: https://trigon1998.github.io/the-things-i-kept/

The Astro build was verified as successful through GitHub Actions on November 11, 2026. The initial deployment could not complete because GitHub Pages was not yet enabled.

## Develop locally

Requires **Node.js 24**.

```bash
git clone https://github.com/trigon1998/the-things-i-kept.git
cd the-things-i-kept
npm install
npm run dev
```

Open http://localhost:4321/the-things-i-kept/

To check production output: `npm run build`.

## Where to edit content

- `src/data/site.js` — Story names, Journal entries, and navigation links.
- `src/pages/index.astro` — Homepage layout.
- `src/pages/[...slug].astro` — Stories, Journal, Archive, and About layouts.
- `src/styles/global.css` — Quiet Editorial styling.
- `src/layouts/BaseLayout.astro` — Shared navigation, footer, and photo viewer.
- `.github/workflows/deploy.yml` — GitHub Pages deployment.

## If you already committed the earlier ZIP on your Mac

**Do not run `git push --force` or `git pull --rebase` blindly.** The local first commit and the GitHub-generated first commit have unrelated histories and different file structures.

Use a separate folder to clone the GitHub repository and inspect it. If you want to switch back to the larger original source, compare the two versions and migrate the desired files into a new branch or a pull request. Do not overwrite the website without reviewing the diff.

All other repositories under `trigon1998` were left untouched.
