// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lauriedifrancesco.art',
  integrations: [sitemap({
    filter: (page) => !page.includes('/private'),
  })],
  server: { port: 4321, host: true },
});
