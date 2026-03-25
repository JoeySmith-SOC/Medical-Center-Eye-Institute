import { defineConfig } from 'astro/config'

// GitHub Pages project-site config for:
// https://joeysmith-soc.github.io/Medical-Center-Eye-Institute/
//
// If the repository name changes later, update both `site` and `base`.
// If you add a custom domain later, set `site` to that domain and usually
// change `base` to '/'.

export default defineConfig({
  site: 'https://joeysmith-soc.github.io/Medical-Center-Eye-Institute/',
  output: 'static',
  base: '/Medical-Center-Eye-Institute/',
  markdown: {
    draft: false,
  },
})
