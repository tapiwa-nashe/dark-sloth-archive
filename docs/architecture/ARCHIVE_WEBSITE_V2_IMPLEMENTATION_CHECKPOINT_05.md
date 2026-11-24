# Dark Sloth Archive Website V2 — Implementation Checkpoint 05

Date: 2026-11-11
Phase: Public identity and dossier boundary

## Changes

- Replaced the public `/identity` page's sample ARCH-0001 participant profile with an explanation of the Archive Identity system and a clear boundary: participant identities, personal dossiers, and participation history belong to the authenticated Platform and are not exposed as public catalogue records.
- Replaced the `/dossier` page's conflicting sample identity metrics with an explanation of the public dossier system and its evidence principle: a connection is not automatically a conclusion.
- Reworked `/dossiers/observer` into an explicitly unverified reference dossier. Removed unsupported 72% confidence, LOW risk, unsupported status assertions, and dead `#` links to unrelated dossiers.
- Made the Observer dossier's seven related records resolve from the shared catalogue and linked each to its actual public record page. The page now explicitly states that the reading path is not proof of causation or a verified evidence chain.
- Added `/dossiers/observer` to the sitemap and changed the homepage dossier caption from “Active Investigation” to “Public Dossier References”; the gateway status is now “REFERENCE”.

## Verification

- Focused assertions passed: no sample participant identity remains on the public identity page; unsupported dossier metrics and dead links were removed; the Observer dossier includes review-required and evidence caveats.
- `git diff --check` passed.
- No full typecheck, ESLint, production build, or dev server was run.
- No private identity records or operational Platform tables were queried or exposed.
- No database/schema changes, destructive operations, or unrelated cleanup were performed.

## Remaining work

1. Determine whether the Observer dossier's proposed record associations are canonically supported; retain them as a reading path until formally verified.
2. Build public entity/character profiles only from recovered and approved source material, keeping participant identity records private.
3. Review book publication links and all public navigation labels against actual current release evidence.
4. Run controlled type and production verification when machine load permits.
