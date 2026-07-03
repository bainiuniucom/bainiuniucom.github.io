import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: z.string(),
    pinned: z.boolean().default(false),
    cover: z.string().optional(),
    readTime: z.number().default(6),
  }),
});

const topics = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/topics' }),
  schema: z.object({
    name: z.string(),
    order: z.number().default(100),
  }),
});

export const collections = { posts, topics };
