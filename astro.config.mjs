import { defineConfig } from 'astro/config'

// Note: When deploying to GitHub Pages, set `base` to the repository name path
// e.g. base: '/REPO_NAME/' if you host at https://username.github.io/REPO_NAME
// Keep `base` = '/' for local dev; update before final deploy if needed.

export default defineConfig({
  site: "https://USERNAME.github.io/REPO_NAME/", // update later
  output: 'static',
  base: '/',
  markdown: {
    draft: false
  }
})
