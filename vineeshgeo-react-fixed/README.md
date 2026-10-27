# Vineesh V. — Geography & Geospatial Research

React + Vite source project for `https://vineeshgeo.github.io/`.

## Important: avoid a blank page on GitHub Pages

This is the special user-site repository named `vineeshgeo.github.io`, so `vite.config.js` uses `base: '/'`.

The repository must contain these at its **root** after extracting the ZIP (do not upload the ZIP itself, and do not put everything inside an extra nested folder):

- `index.html`
- `package.json`
- `vite.config.js`
- `src/`
- `.github/workflows/deploy.yml`
- `public/.nojekyll`

**Do not make GitHub Pages publish the repository root as a branch/folder site.** This is a Vite app: the root `index.html` references `/src/main.jsx`, which is development source. The deploy workflow must build the app and publish the generated `dist/` folder.

## GitHub Pages settings

1. Open the repository `https://github.com/vineeshgeo/vineeshgeo.github.io`.
2. Select **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Ensure the default branch is `main`.
5. Commit/push the extracted project files to `main`.
6. Open **Actions** and open **Build and deploy Vineesh Geography website**. Confirm the latest run is green.
7. Open the run and confirm the **Deploy to GitHub Pages** step completed successfully.
8. Visit `https://vineeshgeo.github.io/` and hard-refresh with `Ctrl+Shift+R`.

## Run locally

Requirements: Node.js 22 (or a compatible current Node.js release) and Git.

```bash
npm install
npm run dev
```

For production preview:

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. The workflow checks that `dist/index.html` and `dist/assets/` exist before deploying.

## Diagnose if it is still blank

1. Open the site and press `F12` → **Console**. Look for the first red error.
2. In **Network**, reload and filter for `JS`. Built JavaScript should load from `/assets/...` with status `200`.
3. If requests go to `/src/main.jsx`, or the response contains raw JSX, GitHub Pages is serving the source `index.html` rather than the built `dist` output. Set Pages source to **GitHub Actions** and inspect the workflow.
4. If `/assets/*.js` requests return `404`, inspect the generated `dist/index.html` and confirm `vite.config.js` has `base: '/'` for this repository.
5. If assets load with `200` but the screen is blank, send the first Console error; that points to a React runtime issue rather than a deployment path issue.

## Where to edit content

- `src/data.js`: profiles, project gallery, publications, location.
- `src/App.jsx`: page sections and layout.
- `src/components/ResearchDashboard.jsx`: project filtering and publication search.
- `src/components/Charts.jsx`: illustrative chart data and labels.
- `src/styles.css`: responsive styling and theme.

The supplied location is Department of Geography, Government College Chittur, at `10.6869129, 76.7234543`.

Publication entries are intentionally empty until verified bibliographic details are supplied. Chart data is explicitly illustrative and should be replaced with validated observations before use in research reporting.
