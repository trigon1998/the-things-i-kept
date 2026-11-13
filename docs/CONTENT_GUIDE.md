# Publishing photographs, Stories and Journal entries

This is a **static Astro website**. You don't need a database or a CMS login. You edit a few small files in GitHub and click **Commit changes**. The GitHub Actions workflow rebuilds the site.

> The 10 initial photo entries and 6 sample publications are **placeholders**, not real photographs or first-person memories. Replace them as you curate your collection.

## 1. Prepare an image

Export a web-ready JPEG or WebP (for example 2400 px on the long edge). Strip GPS/location EXIF if you do not intend to disclose it, and keep original RAW/full-resolution files separately. GitHub Pages is not your private original-image archive.

Make the filename simple: `lake-at-dawn.webp`, not `IMG (1) final!!.jpg`.

## 2. Upload your image to GitHub

- Go to `public/photos/` in your repository.
- Choose **Add file → Upload files**; upload `lake-at-dawn.webp`.
- Click **Commit changes**. The image is now available at `/photos/lake-at-dawn.webp` **inside content data**, and Astro will add the site's GitHub Pages subpath when rendering.
- For subfolders such as `public/photos/2026/`, use GitHub's create-file path flow or a Git client.

**Important:** files in `public/photos/` are copied as-is and are **not** resized or optimized by Astro. Export reasonably sized images before uploading; never publish private photos or RAWs to a public repo.

## 3. Register each photo once

Edit [`src/data/photos.json`](../src/data/photos.json). It is one JSON array; add an object before the closing `]`:

```json
{
  "id": "lake-at-dawn",
  "title": "Lake at dawn",
  "src": "/photos/lake-at-dawn.webp",
  "alt": "Mist drifting over a calm lake in the early morning",
  "year": 2026,
  "category": "Landscape",
  "tone": "water",
  "caption": "Early morning, by the lake",
  "location": "Optional public location",
  "camera": "Optional camera"
}
```

Use an ID that stays stable (e.g. `lake-at-dawn`). **Every real image requires an `alt` description.**

Supported categories: `Portrait`, `Landscape`, `Everyday`, `Abstract`. Supported placeholder tones: `water`, `mist`, `dusk`, `door`, `shadow`, `room`, `light`, `garden`, `shade`.

If `src` is omitted, a **labeled visual placeholder** is displayed. This keeps the demo working before real photos are added.

If a Story references an unknown ID, a photo source does not exist in `public/photos/`, or a real image is missing alt text, **the build will fail with an explanatory error**. Correct the field and commit again.

## 4. Publish a Story

- Open `src/content/stories/`, choose **Add file → Create new file**.
- Name it `my-new-story.md` or `my-new-story.mdx`.
- Start from [the Story template](./templates/story.md.example); copy and paste it.
- Edit `title`, `date`, `period`, `category`, `description`, `cover`, and `sequence`.
- The file name is the URL slug: `my-new-story.md` → `/stories/my-new-story/`.
- Set `featured: true` if you want it eligible for the homepage; `order: 1` displays it early in the Stories list.
- Write the introduction below the second `---`, in Markdown or MDX.
- Set `draft: false` when ready to make it publicly visible.

### Story sequence blocks

You **control the order**. Each item under `sequence:` may be:

```yaml
sequence:
  - type: photo
    id: lake-at-dawn
    size: wide
  - type: note
    text: "An hour I wanted to keep."
  - type: pair
    ids: [window-01, shadow-01]
  - type: photo
    id: window-01
    size: portrait
```

Photo sizes: `wide`, `medium`, `small`, `portrait`. Paired images are shown next to each other on desktop and stacked on mobile.

One photo ID may be used in many Stories, Journal entries, and the Archive without creating duplicate image files.

## 5. Publish a Journal entry

- Create `src/content/journal/an-ordinary-afternoon.md` or `.mdx`.
- Use [the Journal template](./templates/journal.md.example).
- Enter `title`, `date`, `description`, and photo IDs in `photos: [...] `.
- The **first photo** is the lead photo. The rest appear below the written entry.
- Write your journal text after the frontmatter; set `draft: false` to publish.
- Journal is automatically sorted by date, newest first.

## 6. Change the homepage and About

- [`src/data/site-content.json`](../src/data/site-content.json): homepage introduction, headings and selected hero `photoId`.
- [`src/content/pages/about.md`](../src/content/pages/about.md): About text, fully editable in Markdown.
- [`src/data/site.js`](../src/data/site.js): website title/technical base path (do **not** change `base` unless the site URL changes).

The homepage Stories section picks the first 2 published Stories with `featured: true` (or the first 2 by `order` if none are featured). The Journal section picks a featured, published Journal entry or the most recent one.

## 7. Archive, privacy and drafts

The Archive is **automatic**: it lists unique photographs referenced by **published** Stories and Journal entries. Filters are generated from real data (year and category). An uploaded image that is not referenced by published content does not appear in the Archive.

`draft: true` hides an entry from rendered pages, but it does **not** make a file private if committed to a public repository. Keep truly private writing and images **outside** the public GitHub repository.

## 8. Publish and verify

- Click **Commit changes** on GitHub.
- Open **Actions → Deploy Astro to GitHub Pages** and confirm both Build and Deploy pass.
- Refresh https://trigon1998.github.io/the-things-i-kept/

When you create a new file, make sure its Markdown frontmatter is between two `---` lines and YAML indentation is correct.

If you prefer a local workflow, use **Node.js 24**, `npm install`, `npm run dev`, then commit/push normally. The GitHub repository is the canonical source; do not force-push an unrelated older ZIP.
