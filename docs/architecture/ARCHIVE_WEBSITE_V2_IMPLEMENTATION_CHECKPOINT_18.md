# Dark Sloth Archive — Website V2 Implementation Checkpoint 18

Date: 2026-11-13
Milestone: Public Institutional Library and Publication Experience V2
Repository: `/Users/tapiwandoro/Projects/dark-sloth-archive`

## Implemented

- Refined the public Books catalogue to explain its three distinct publication layers: existing published book listings, institutional working material, and explicitly released Publishing Studio editions.
- Clarified that the Codex and Archive Documents entries are public-facing book listings with retailer destinations; a book listing does not imply that every framework described in a book is ratified institutional policy.
- Replaced the ambiguous card status label "Recovered" with "Retail edition listing".
- Changed the book action label to "View publication".
- Explained that constitutional drafts, proposed agreements and working standards are not represented as ratified policy or public downloads. They require explicit public-release review before entering the catalogue.
- Clarified that generated editions appear only when release metadata, approval, provenance and declared public output files pass the existing public-release checks.
- Preserved the existing Codex and Archive Documents listings, cover assets, retailer destinations, First Recovery gateway and fail-closed generated-edition registry.

## Verification

- TypeScript TSX transpilation syntax check for `app/books/page.tsx`: PASS.
- `git diff --check`: PASS.
- Focused assertions confirmed the catalogue guide, publication labels and public-release catalogue language.
- No full semantic typecheck, lint, production build, browser test or development server was run.
- No publication manifest was promoted, no draft document was exposed as a download, and no generated edition was manually added to the public registry.
- No Archive Platform repository or operational database was changed.

## Outstanding

- Audit retailer destinations and publication metadata against the current publisher accounts before launch.
- Establish explicit release envelopes for any additional institutional documents intended for public download.
- Build a dedicated public document catalogue only when there are approved, rights-cleared document assets to publish.
- Complete full semantic, accessibility, responsive-browser and production launch verification when the machine can safely support it.

## Product boundary

This milestone changes only the public Archive website's publication discovery experience. Participant reading, downloads, app/PWA handoff and operational publishing progression remain responsibilities of the separate Archive Platform and Library workflows.
