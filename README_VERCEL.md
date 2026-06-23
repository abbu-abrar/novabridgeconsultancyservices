# Vercel Deployment Notes (NovaBridge)

## 1) Build (static site)
- Uses Vite (`npm run build`) producing `dist/`.
- SPA routing handled by `vercel.json` rewrite to `/index.html`.

## 2) API/tool endpoints
This deployment is static only.
- `/api/*` and `/api/tools/*` are not required for the site.

## 3) Next step
Deploy as a static React/Vite app.


