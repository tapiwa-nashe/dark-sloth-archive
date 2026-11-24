# Dark Sloth Archive Website V2 — Implementation Checkpoint 06

Date: 2026-11-11
Phase: Public navigation and Creator workspace boundary

## Changes

- Removed the private Creator Engine from public Archive navigation.
- Changed the former Archive ID navigation target to the public Dossiers catalogue and added a separate Identity System destination.
- Kept the public Publishing Studio catalogue distinct from private authoring and export workflows.
- Added production `notFound()` guards to the Creator Manuscript Forge page and individual manuscript workspace page. These private workspace pages remain usable in development but cannot be opened as public production pages.
- Existing API production guards remain in place for manuscript creation, preview inspection, and export. The `/creator/` robots exclusion remains supplemental discovery guidance, not the security boundary.

## Verification

- Focused assertions passed for navigation and production page guards.
- `git diff --check` passed.
- No full typecheck, ESLint, production build, or dev server was run.
- No manuscript files were read, changed, or deleted; no database/schema changes were made.
