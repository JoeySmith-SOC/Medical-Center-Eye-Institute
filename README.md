# Medical Center Eye Institute — Astro static site (scaffold)

This repository contains the initial scaffold for a static Astro site for a medical ophthalmology practice. It is intentionally minimal so the homepage and content can be developed next.

Overview

- Framework: Astro
- Styling: Plain CSS (src/styles/global.css)
- Output: Static site (prepared for future GitHub Pages deployment)

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

Repository layout

- `src/` — site source
  - `layouts/MainLayout.astro` — main layout with head tags and global stylesheet
  - `components/` — reusable components (`Header`, `Footer`, `Hero`, `SectionHeader`, `CTA`)
  - `pages/` — top-level pages (index + placeholder pages)
  - `styles/global.css` — global variables and base styles
- `public/` — static assets (favicon, images)
- `.github/workflows/` — CI workflow folder (placeholder for GitHub Pages workflow)

GitHub Pages deployment

This project is configured for GitHub Pages using the official Astro-recommended GitHub Actions workflow.

Current placeholder deployment values

- Repository name placeholder: `medical-center-eye-institute-site`
- Expected GitHub Pages URL pattern: `https://USERNAME.github.io/medical-center-eye-institute-site/`
- Config file: `astro.config.mjs`

What to update in `astro.config.mjs`

- `site`
  - Current placeholder: `https://USERNAME.github.io/medical-center-eye-institute-site/`
  - Update `USERNAME` to the GitHub account or organization that owns the repository.
  - If the repository name changes later, update that part of the URL too.
- `base`
  - Current placeholder: `/medical-center-eye-institute-site/`
  - For a GitHub Pages project site, this must match the repository name with leading and trailing slashes.
  - If the repository name changes later, update `base` to match.

Examples

- If the repo becomes `vision-demo`, use:
  - `site: 'https://USERNAME.github.io/vision-demo/'`
  - `base: '/vision-demo/'`
- If you later add a custom domain, you will usually change to:
  - `site: 'https://www.yourdomain.com'`
  - `base: '/'`

Workflow

- The GitHub Actions workflow is in `.github/workflows/deploy.yml`
- It builds and deploys automatically on pushes to the `main` branch
- It uses the GitHub Pages artifact-based deployment flow recommended for Astro

How to enable GitHub Pages in repository settings

1. Push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to `main`, or run the workflow manually from the `Actions` tab.

Default GitHub Pages URL

- Project sites normally publish to:
  - `https://USERNAME.github.io/REPOSITORY_NAME/`
- With the current placeholder setup, that would be:
  - `https://USERNAME.github.io/medical-center-eye-institute-site/`

Important content and compliance notes

- Replace all placeholder content (phone numbers, addresses, provider info) with real client-provided content before publishing.
- Do not collect, transmit, or store PHI in this static site. If you later add patient-facing forms or portals, implement a secure, compliant backend and consult legal/privacy teams.
