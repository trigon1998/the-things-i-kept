import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const tone = z.enum(['water', 'mist', 'dusk', 'door', 'shadow', 'room', 'light', 'garden', 'shade']);
const category = z.enum(['Portrait', 'Landscape', 'Everyday', 'Abstract']);

const photos = defineCollection({
  loader: file('./src/data/photos.json'),
  schema: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    alt: z.string().default(''),
    // Leave src absent while using a visual placeholder; add a real /photos/... path later.
    src: z.string().optional(),
    tone: tone.default('mist'),
    year: z.number().int().min(1900).max(2100),
    category,
    location: z.string().optional(),
    camera: z.string().optional(),
    caption: z.string().optional(),
  }),
});

const storyBlock = z.discriminatedUnion('type', [
  z.object({ type: z.literal('photo'), id: z.string().min(1), size: z.enum(['wide', 'medium', 'small', 'portrait']).default('wide') }),
  z.object({ type: z.literal('pair'), ids: z.tuple([z.string().min(1), z.string().min(1)]) }),
  z.object({ type: z.literal('note'), text: z.string().min(1) }),
]);

const stories = defineCollection({
  loader: glob({ base: './src/content/stories', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    period: z.string(),
    category,
    description: z.string().min(1),
    cover: z.string().min(1),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    draft: z.boolean().default(false),
    sequence: z.array(storyBlock).min(1),
  }),
});

const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    description: z.string().min(1),
    photos: z.array(z.string().min(1)).min(1),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string().min(1),
    eyebrow: z.string().min(1),
    description: z.string().min(1),
  }),
});

export const collections = { photos, stories, journal, pages };
