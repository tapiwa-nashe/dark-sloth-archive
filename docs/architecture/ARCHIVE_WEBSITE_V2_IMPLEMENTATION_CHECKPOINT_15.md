# Dark Sloth Archive — Website V2 Implementation Checkpoint 15

Date: 2026-11-13
Milestone: Public Institutional Introduction and Discoverability V1
Repository: `/Users/tapiwandoro/Projects/dark-sloth-archive`

## Implemented

- Added a clear institutional introduction to the public homepage, explaining Dark Sloth Archive's purpose, the preservation and interpretation of knowledge, and its public-facing role.
- Explicitly distinguished the public Archive website from the separate Archive Platform, with separate discovery gateways.
- Added responsive styling for the institutional introduction and keyboard-visible focus treatment for its links.
- Repositioned the First Recovery panel so it no longer overlaps the newly inserted institutional introduction.
- Expanded root metadata with a canonical metadata base, institutional title and description, keywords, Open Graph metadata, Twitter summary-large-image metadata and crawler directives.
- Reused the existing Archive hero background as the social preview image; no new brand artwork or logo was invented.
- Added the public Publishing Studio route to the sitemap.
- Corrected the Recovery Stream header so a disconnected public feed is labelled as awaiting connection instead of showing a misleading zero approved releases.

## Verification

- TypeScript transpilation syntax checks passed for `app/page.tsx`, `app/layout.tsx`, `app/recoveries/page.tsx` and `app/sitemap.ts`.
- Existing social preview asset confirmed at 1536 × 1024.
- `git diff --check` passed.
- No full semantic typecheck, lint, production build, browser test or development server was run.
- No public feed origin was configured or guessed. No secrets were read.
- No Archive Platform repository, operational database, recovery manifest or publication approval was changed.

## Outstanding

- Confirm the production public domain and deployment configuration before external launch.
- Configure the real HTTPS Platform public read-model origin when the public endpoint is deployed.
- Confirm social preview crop and metadata in a browser/social sharing debugger after deployment.
- Add verified institutional contact and partnership destinations when their approved contact details and workflow are available.

## Product boundary

This checkpoint modifies only the public `dark-sloth-archive` website. The Archive Platform remains a separate product; its local development port is not used as a public website destination.
