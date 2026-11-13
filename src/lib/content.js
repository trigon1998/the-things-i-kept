import { getCollection } from 'astro:content';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

/** Only published entries are rendered. Draft files remain in the repository. */
export async function getPublishedStories() {
  const entries = await getCollection('stories', ({ data }) => !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order || b.data.date.getTime() - a.data.date.getTime());
}

export async function getPublishedJournal() {
  const entries = await getCollection('journal', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function storyPhotoIds(story) {
  return [
    story.data.cover,
    ...story.data.sequence.flatMap((block) => block.type === 'photo' ? [block.id] : block.type === 'pair' ? block.ids : []),
  ];
}

/** The archive shows only photographs referenced by published content. */
export function visiblePhotoIds(stories, journal) {
  const ids = new Set();
  for (const story of stories) storyPhotoIds(story).forEach((id) => ids.add(id));
  for (const entry of journal) entry.data.photos.forEach((id) => ids.add(id));
  return [...ids];
}

export async function getPhotoCatalog() {
  const entries = await getCollection('photos');
  const photos = new Map();
  for (const entry of entries) {
    if (photos.has(entry.id)) throw new Error('Duplicate photo ID: ' + entry.id);
    const photo = { ...entry.data, id: entry.id };
    if (photo.src) {
      if (!/^\/photos\/[a-zA-Z0-9_./-]+\.(jpe?g|png|webp|avif)$/i.test(photo.src) || photo.src.includes('..')) {
        throw new Error('Invalid image path for ' + photo.id + ': ' + photo.src + '. Use /photos/filename.webp.');
      }
      if (!existsSync(resolve(process.cwd(), 'public' + photo.src))) {
        throw new Error('Missing image for ' + photo.id + ': public' + photo.src + '. Upload the file or remove src.');
      }
      if (!photo.alt.trim()) throw new Error('Missing alt text for real photo ' + photo.id + ' in src/data/photos.json.');
    }
    photos.set(entry.id, photo);
  }
  return photos;
}

export function photoFrom(catalog, id, context = 'content') {
  const photo = catalog.get(id);
  if (!photo) throw new Error('Unknown photo ID "' + id + '" in ' + context + '. Add it to src/data/photos.json first.');
  return photo;
}

export function validateContent(stories, journal, catalog) {
  for (const story of stories) {
    storyPhotoIds(story).forEach((id) => photoFrom(catalog, id, 'story ' + story.id));
  }
  for (const entry of journal) {
    entry.data.photos.forEach((id) => photoFrom(catalog, id, 'journal ' + entry.id));
  }
}

export function dateLabel(date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
