import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    topic: z.preprocess(
      (value) => {
        const values = Array.isArray(value) ? value : typeof value === 'string' ? [value] : value;
        return Array.isArray(values) ? values.map((item) => String(item).replace(/\.json$/, '')) : values;
      },
      z.array(z.string()).min(1).max(5),
    ),
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

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts, topics, pages };
