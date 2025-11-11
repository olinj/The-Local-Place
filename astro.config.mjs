import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable SSG (Static Site Generation)
  output: 'static',

  // Site URL for SEO
  site: 'https://www.thelocalplace.com',

  // Trailing slashes configuration
  trailingSlash: 'ignore',

  // Build configuration
  build: {
    format: 'directory',
  },

  // Vite configuration for dev server
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
