# TODO

## 1) Repository understanding
- [x] Reviewed existing routes in `src/App.tsx`
- [x] Reviewed blog listing in `src/pages/BlogPage.tsx` (links to `/blog/:slug` currently missing)
- [x] Reviewed contact form redirect to `/thank-you` without route
- [x] Reviewed layout behavior (no meta/404 handling)

## 2) Add pages + routing
- [x] Create `src/pages/NotFoundPage.tsx`
- [x] Create `src/pages/ThankYouPage.tsx`
- [x] Create `src/pages/BlogPostPage.tsx`
- [x] Add shared blog data module (e.g. `src/pages/blogData.ts`)
- [x] Update `src/pages/BlogPage.tsx` to use shared blog data
- [x] Update `src/App.tsx` to add routes:
  - [x] `/blog/:slug`
  - [x] `*` (404)
  - [x] `/thank-you`


## 3) Helmet (dynamic titles/meta)
- [x] Install `react-helmet-async` (if not present)
- [x] Wrap app with `HelmetProvider`
- [ ] Add `Helmet` usage to key pages (Home, Blog, Blog post, Thank You, 404)


## 4) Mobile testimonials carousel
- [x] Update `src/pages/HomePage.tsx` testimonials section
- [x] Add/adjust CSS in `src/novabridge.css`


## 5) Verification
- [x] Run build/typecheck
- [ ] Manual route checks: `/blog/<slug>`, `/thank-you`, unknown route -> 404
- [ ] Confirm page titles/meta update


