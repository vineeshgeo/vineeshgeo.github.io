# Vineesh V. — Geography & Geospatial Research

A maintainable React + Vite academic portfolio intended for `https://vineeshgeo.github.io/` (the special GitHub Pages repository `vineeshgeo.github.io`).

## Requirements
- Node.js 20.19+ or 22.12+
- Git

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Deploy to GitHub Pages (recommended: GitHub Actions)
1. Download and unzip this project.
2. Open your existing repository `https://github.com/vineeshgeo/vineeshgeo.github.io` (or create it if needed).
3. Copy the **contents** of this project into the repository root. Keep `.github/workflows/deploy.yml`; ensure GitHub does not hide the `.github` folder.
4. Commit and push to the `main` branch.
5. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
6. Open the **Actions** tab and wait for “Deploy React site to GitHub Pages” to complete.
7. Visit `https://vineeshgeo.github.io/`. Future pushes to `main` trigger deployment automatically.

This is a user/organization site whose repository name is `vineeshgeo.github.io`, so `vite.config.js` intentionally uses `base: '/'`. If you instead deploy to a project repository such as `username/project`, change the base to `'/project/'`.

## Where to edit content
- `src/data.js`: academic/social profile links, project gallery descriptions, publication metadata, and location.
- `src/App.jsx`: page sections, career timeline, expertise, contact information.
- `src/components/ResearchDashboard.jsx`: project search/filter and publication search.
- `src/components/Charts.jsx`: chart data and chart labels.
- `src/styles.css`: theme, layout, responsive styling, dark mode.

## Publications
The searchable publications array is deliberately empty because verified citation records were not supplied in the source files. Add records to `publications` in `src/data.js`, for example:
```js
{ title: 'Article title', authors: 'Author list', year: 2025, journal: 'Journal name', doi: '10.xxxx/example' }
```
Use verified publication metadata and DOI URLs. Google Scholar is linked in the profiles section.

## Research dashboard data note
The research gallery contains clearly labelled research themes/workflow descriptions based on the site context. The charts use explicitly illustrative demo data and must not be cited as observed results. Replace demo chart values with validated data before using the visualizations for research reporting.

## Notes
- Map embeds need an internet connection.
- Google Fonts, Lucide icons (bundled), and Recharts are used. Charts render locally in the browser after build.
- Both previous HTML files are consolidated into this single React project; keep a backup of the old files until the deployed site is checked.
