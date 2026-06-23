# Security hardening TODO

## Plan confirmation
- [ ] Update server-side CORS to restrict origins (remove `*`)
- [ ] Add basic protection to `/api/tools/execute` and `/api/tools/schemas`:
  - [ ] Require auth token (env-based) OR disable publicly
  - [ ] Add rate limiting
  - [ ] Add request body size limit
- [ ] Tighten CSP in `index.html` (remove `unsafe-eval` and `unsafe-inline` where possible)
- [ ] Harden static serving rules if needed
- [ ] Update `.gitignore` to ignore Prisma DB files (e.g. `prisma/*.db`)
- [ ] Ensure `bun run dev:server` still starts
- [ ] Validate endpoints with curl (optional)

