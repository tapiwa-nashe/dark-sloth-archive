# Dark Sloth Archive — Website V2 Implementation Checkpoint 22

Date: 2026-11-14
Milestone: Isolated Public Website Preview Candidate V1
Candidate repository: /Users/tapiwandoro/Projects/dark-sloth-archive-v2-preview
Candidate branch: archive-website-v2-preview
Base: production baseline 32cdbd6a2470c373babd5c7643359ddc672513ae

## Isolation

- Created a separate Git worktree from verified origin/main at the exact Vercel production commit.
- The original dark-sloth-archive workspace was not altered by the candidate transfer.
- Candidate package.json, package-lock.json and next.config.ts remain unchanged from the production baseline.
- No environment files or secrets were copied.

## Selected public website transfer

Transferred selected current public website work:
- Institutional homepage, navigation and shared visual styles.
- Books and collections catalogue refinements.
- Records catalogue and evidence/provenance pages.
- Recoveries and entity public projection pages.
- Partnerships and contributor guidance pages.
- Public metadata, sitemap and robots rules.
- Deny-by-default public-content contracts and release eligibility.
- Public publishing registry and edition routing safeguards.
- Production guards for internal intelligence, creator and test endpoints.

Selected new modules include public-content contracts/client/eligibility, collections, records, record provenance, collection and record catalogue components.

## Exclusions / deliberate containment

- Did not copy package refactors, generated type-consolidation artifacts, local-only tarballs, .types-* work, private data, environment files, or external sibling-repository dependencies.
- Did not copy unfinished Creator preview components, creator composition/preview modules, experimental test application/runtime endpoints, or internal intelligence engine additions.
- Removed the candidate-only Archive runtime route because its implementation depended on local-only runtime modules not included in this public-site release.
- Disabled the legacy creator export endpoint with a 404 response rather than shipping an unresolved local-only publishing runtime import.
- Removed unused navigation-engine adapters that depended on a package absent from the production baseline.
- The public website candidate does not merge with the operational Archive Platform.

## Focused checks

- TypeScript TSX/TS transpilation syntax check: 116 files, no syntax diagnostics.
- Relative and @/ local import resolution: no missing local imports.
- External dependency inventory: all third-party and workspace imports are represented by production-baseline dependencies/workspace packages; Node built-ins excluded from package dependency requirements.
- git diff --check: PASS.
- Candidate package manifest, lockfile and Next config unchanged from production baseline.
- No candidate environment files found.

## Not yet verified

- Full semantic TypeScript check.
- ESLint.
- Production build.
- Vercel preview deployment.
- Browser/device/accessibility/responsive checks.
- Preview environment variable and API-origin verification.
- LKR registration; local LKR service was unavailable on port 3010 in the preceding checkpoint.

## Release status

ISOLATED CANDIDATE PREPARED — NOT YET COMMITTED OR PUSHED.
No production branch, production deployment, custom domain, DNS record, Vercel setting or production environment variable was changed.
