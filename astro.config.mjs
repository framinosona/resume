// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://francois.raminosona.com",
  integrations: [tailwind(), mdx(), sitemap()],
  trailingSlash: "never",
});
