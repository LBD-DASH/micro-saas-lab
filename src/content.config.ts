import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
  // One Markdown file per page: src/content/pages/<slug>.md  (URL: /<slug>/)
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string().min(10).max(70),
    description: z.string().min(70).max(160),
    lastUpdated: z.coerce.date(),
    lastChecked: z.string(), // e.g. "20 Nov 2026"
    nav: z.boolean().default(false),
    order: z.number().default(50),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});
export const collections = { pages };
