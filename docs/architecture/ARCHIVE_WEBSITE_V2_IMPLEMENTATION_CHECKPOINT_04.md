# Dark Sloth Archive Website V2 — Implementation Checkpoint 04

Date: 2026-11-11
Phase: Public catalogue presentation, recovery-feed honesty, and discovery metadata

## Changes

- Added `lib/collections.ts` as the shared collection catalogue. The collections index and collection detail pages now derive their record relationships from shared catalogue data rather than separate hand-maintained arrays.
- The public collection count is now six, preserving the existing identifiers COLLECTION_001–005 and COLLECTION_007. The missing COLLECTION_006 identifier was not fabricated or renumbered.
- Homepage collection and record counts now derive from the catalogue (six collections and 48 records) rather than hardcoded values.
- Replaced the three illustrative recovery cards on `/recoveries` with an explicit empty state. The page explains that no approved public recovery feed is connected and that records will only appear after provenance, visibility, and release status can be verified. It links visitors to the existing Records catalogue.
- Rebuilt `app/sitemap.ts` from actual public static routes, all six collection routes, and all 48 catalogue record detail routes. Removed the previously listed `/helmr-hugr` path because no corresponding page route exists.
- Added `app/robots.ts` with a public crawl policy and exclusions for `/api/` and `/creator/`.

## Focused verification

- Static assertions passed: 48 record entries, six collection entries, catalogue-driven homepage counts, a non-fabricated recovery empty state, and dynamic record/collection sitemap entries.
- `git diff --check` passed.
- Source inspection confirmed collection detail pages use the shared record catalogue.
- No full typecheck, ESLint, production build, or dev server was run.
- No database/schema changes, destructive operations, or unrelated cleanup were performed.

## Remaining work

1. Build the authenticated Platform-to-public read-model publication bridge for approved Recoveries and public entities; do not expose operational tables directly.
2. Review the public identity and dossier routes to distinguish public character/entity profiles from private participant identities and dossiers.
3. Review the public Books list and retailer links against current publication evidence; preserve existing entries pending verification rather than infer publication status from local files.
4. Run lightweight route and type verification when machine load permits, followed by a controlled production build/deployment review.
