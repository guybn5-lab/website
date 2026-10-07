// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH can be overridden at build time (see README → Deploying).
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
});
