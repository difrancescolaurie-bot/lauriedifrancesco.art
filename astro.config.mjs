// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lauriedifrancesco.art',
  // Toutes les URL finissent par une barre oblique, forme servie par Cloudflare.
  // En local, un lien sans barre finale renvoie une 404 : l'oubli se voit tout de suite.
  trailingSlash: 'always',
  integrations: [sitemap({
    filter: (page) => !page.includes('/private') && !page.includes('/legal'),
  })],
  server: { port: 4321, host: true },
});
