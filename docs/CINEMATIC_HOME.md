# Cinematic Home V2.0 — editing and behavior

The homepage uses **the same published photo catalog and Stories** as the rest of this Astro website. It does not require a backend, animation library or separate CMS.

## Edit the three cinematic chapters

Open [`src/data/site-content.json`](../src/data/site-content.json).

- `hero.eyebrow`, `hero.titleLine1`, `hero.titleLine2`, `hero.description`: the introductory screen.
- `cinema.chapters`: the cinematic gallery sequence; currently three chapters. Add, remove, or reorder chapters here.
- Each chapter:
  - `photoId` — an **existing ID** from [`src/data/photos.json`](../src/data/photos.json).
  - `eyebrow`, `title`, `description` — text shown over the photograph.
  - `link` — a local page path such as `/stories/mists-and-water/`.
  - `linkLabel` — text on the chapter's link.
- `interlude.eyebrow`, `interlude.line1`, `interlude.line2`: the dark interlude after the journey.
- `labels`: editorial section headings near the bottom.

For example:

```json
{
  "photoId": "water-01",
  "eyebrow": "01 / DISTANCE",
  "title": "Where everything slows.",
  "description": "Weather, water, and distance.",
  "link": "/stories/mists-and-water/",
  "linkLabel": "Mists & Water"
}
```

**The three photo IDs currently point to labeled placeholders.** To use real images, export them as web-ready JPEG/WebP, upload to `public/photos/`, and add the `src` and `alt` fields to their entries in `src/data/photos.json`. Read [Content Guide](CONTENT_GUIDE.md) first. All photo panels retain the full frame using `object-fit: contain`. If you prefer a cropped art-directed cover later, implement it as an explicit editorial setting, not an automatic crop.

## What changes on desktop?

- The introductory screen leads into a **native-scroll, sticky cinematic stage**.
- The photograph frame expands subtly as you scroll; three chapters crossfade based on scroll position, with animated scale, image layers, and small progress count.
- There is **no scroll hijacking** and no forced timed slideshow.
- Each chapter has a link to its existing Story.
- Below the journey are an interlude, selected Stories, a featured Journal entry, and the Archive.

## Mobile, reduced motion, and no-JavaScript

On mobile, when the operating system has **Reduce Motion** enabled, or when JavaScript is unavailable, the chapters become a regular vertical sequence. There is no pinned stage. Each chapter's link remains usable.

Photo colors are placeholders only. The layout will feel more personal once the author's photographs replace them.

## What to test after editing

1. Visit https://trigon1998.github.io/the-things-i-kept/ on desktop; scroll slowly through all three chapters.
2. Open each chapter link and verify it goes to the intended Story.
3. On a phone, confirm the chapters stack vertically and don't lock scrolling.
4. Enable Reduce Motion and confirm the stacked view.
5. Check **GitHub Actions**: the build should fail clearly if an invalid photo ID is used.

All changes are deployed automatically after committing to `main`.
