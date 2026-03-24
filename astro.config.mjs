import { defineConfig } from 'astro/config'

// GitHub Pages project-site config:
// Default placeholder repo name: `medical-center-eye-institute-site`
// Expected URL pattern: https://USERNAME.github.io/medical-center-eye-institute-site/
//
// Update both values below if:
// 1. The repository name changes, or
// 2. You later move to a custom domain.
//
// For a custom domain later:
// - set `site` to your final production URL, for example https://www.example.com
// - set `base` to '/' unless your site is intentionally served from a subpath

export default defineConfig({
  site: 'https://USERNAME.github.io/medical-center-eye-institute-site/',
  output: 'static',
  base: '/medical-center-eye-institute-site/',
  markdown: {
    draft: false,
  },
})
