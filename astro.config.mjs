import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import preserveTildeRanges from './src/remark/preserve-tilde-ranges.mjs';

export default defineConfig({
  site: 'https://bainiuniu.com',
  integrations: [sitemap()],
  markdown: { remarkPlugins: [preserveTildeRanges] },
  trailingSlash: 'always',
});
