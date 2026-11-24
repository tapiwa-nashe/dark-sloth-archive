# Archive Website V2 — Deployment Readiness Audit V1

Date: 2026-11-16
Repository: dark-sloth-archive-v2-preview
Branch: archive-website-v2-preview
Status: BUILD PASS; DEPLOYMENT BLOCKED ON PRODUCTION CONFIGURATION AND RELEASE ACCESS

## Verified

- Preview branch exists on origin at 6ae3a42; the current working tree contains the V2 implementation batch and must be preserved.
- `git diff --check`: PASS.
- Full TypeScript check (`npx tsc --noEmit --pretty false --incremental false`): PASS.
- Targeted ESLint on V2 public routes/components: PASS.
- Production build (`npm run build`): PASS; Next.js compiled, TypeScript completed, and all 45 static pages generated.
- Production-mode local smoke test on port 3012: `/`, `/records`, `/books`, `/engines`, `/knowledge-graph`, `/platform`, `/read/demo`, `/sitemap.xml`, and `/robots.txt` returned HTTP 200.
- `/r/REC-001` returned HTTP 308; `/r/REC-999` returned HTTP 404.
- `darkslotharchive.com` resolved to 76.76.21.21 and responded HTTP/2 200 from Vercel when certificate verification was bypassed for diagnosis. The legacy macOS certificate store did not validate the remote certificate, so trusted TLS validation remains unconfirmed from this machine.

## Outstanding blockers

- Repository-wide ESLint reports 48 errors and 14 warnings across pre-existing application, intelligence, publishing and package files. These were not mass-fixed because they extend beyond the V2 public-site changes.
- No `.env`, `.env.local`, or `.env.production` is present in this preview repository.
- `NEXT_PUBLIC_ARCHIVE_CANONICAL_URL` must be configured to `https://darkslotharchive.com` in the production deployment so QR downloads can be enabled safely.
- The production Archive Platform URL is not yet established in the available project configuration. `NEXT_PUBLIC_ARCHIVE_PLATFORM_URL` must be set to its confirmed HTTPS origin; production links intentionally remain disabled until then.
- This clone has no `.vercel/project.json` link and no installed Vercel CLI. Deployment must use the existing Vercel Git integration or an explicitly linked authorized deployment workflow.
- Browser visual review and a production-host trusted TLS check remain pending.

## Release decision

The V2 preview is build-valid and its changed public routes pass targeted lint and local smoke tests. It is not yet approved for production deployment. Do not deploy until the Platform production URL, production environment variables, deployment-project linkage, and browser acceptance are confirmed. Do not commit or reset the current working tree as part of this audit.
