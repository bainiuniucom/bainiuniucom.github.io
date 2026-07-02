import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: z.enum(['portfolio', 'company', 'industry', 'method', 'reading']),
    pinned: z.boolean().default(false),
    cover: z.string().optional(),
    readTime: z.number().default(6),
  }),
});

export const collections = { posts };
