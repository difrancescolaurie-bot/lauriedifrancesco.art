// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://lauriedifrancesco.art',
  integrations: [sitemap()],
  server: { port: 4321, host: true },
  adapter: cloudflare(),
});