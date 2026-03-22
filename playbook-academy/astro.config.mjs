// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://gamblingpolicy.com',
  base: '/tools/playbook/academy',
  integrations: [react(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  }
});