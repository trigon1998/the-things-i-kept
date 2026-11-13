import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://trigon1998.github.io',
  base: '/the-things-i-kept',
  trailingSlash: 'always',
  output: 'static',
  integrations: [mdx()],
});
