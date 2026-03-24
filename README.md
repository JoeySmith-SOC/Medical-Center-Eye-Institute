# Medical Center Eye Institute — Astro static site (placeholder)

This repository is a static-first, demo-ready Astro site scaffold for a medical ophthalmology practice.

Overview
- Framework: Astro
- Styling: Plain CSS (src/styles/global.css)
- Output: Static site suitable for GitHub Pages

Quick start

1. Install dependencies

```bash
npm install
```

2. Run local dev server

```bash
npm run dev
# Open http://localhost:3000
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Deploy to GitHub Pages

- The workflow `.github/workflows/deploy.yml` builds and publishes `./dist` to the `gh-pages` branch on push to `main`.
- Before initial publish, update `astro.config.mjs`:
  - `site`: set to `https://USERNAME.github.io/REPO_NAME/` (replace USERNAME and REPO_NAME)
  - `base`: set to `'/REPO_NAME/'` if you will serve under `username.github.io/REPO_NAME`

After updating `astro.config.mjs`, commit and push to `main`. The workflow will run and publish to `gh-pages`.

Notes & Next Steps
- Replace all placeholder copy, images, phone numbers, and addresses with real client content prior to publishing.
- Do not add any PHI or patient-identifying data to this static site; plan secure backend integrations if patient data collection is needed later.
- Consider adding content management (headless CMS) or secure appointment integrations later.
# Medical-Center-Eye-Institute
