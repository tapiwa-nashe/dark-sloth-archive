# Dark Sloth Archive V2 — Implementation Checkpoint 01

**Date:** 2026-11-11
**Milestone:** Public release registry and Publishing Studio boundary
**Status:** Implemented; focused checks passed; full typecheck/build not run

## Delivered

1. Kept the full generated-output inventory as an operational registry, but introduced a separate public edition registry.
2. Public generated editions now require the complete public publication envelope: canonical ID, content type BOOK, title, slug, PUBLISHED status, PUBLIC visibility, valid approval and publication timestamps, non-withdrawn state and valid provenance.
3. Public files must be explicitly declared in `publicOutputs`, use an approved document extension, be a basename (no nested or traversal paths), and exist inside that edition's output folder.
4. The public Books page now consumes only the public edition registry. Existing hand-curated Codex and Archive Documents remain unchanged.
5. The public Publishing Studio page is now an editorial released-editions catalogue. It no longer exposes collection generation controls or operational output inventories.
6. Edition detail pages now resolve only eligible public releases, show only explicitly released files and no longer expose Generate Edition controls, manifests or production internals.
7. Both artifact-serving routes verify public release eligibility, declared file membership and resolved path containment before serving a file.
8. The public publishing GET route no longer triggers a filesystem publication side effect. The test-publish endpoint is disabled.
9. The public Archive API now limits operational diagnostics to non-production and rejects write requests; production diagnostics return not found.

## Current catalogue result

The output directory currently contains eight generated edition folders. Their legacy publication manifests contain publication timestamps but do not contain the required explicit public release envelope and declared public file list. Therefore zero generated editions currently qualify for the public generated-edition catalogue.

This is intentional fail-closed behaviour, not a claim that the underlying books are unpublished. Existing hand-curated Codex/Archive Documents listings and their established retailer links were preserved. Each generated edition can be released later through an explicit metadata approval process.

## Verification

- Public eligibility regression assertions: PASS (eligible, unlisted, withdrawn, invalid approval timestamp and filtered collection).
- Legacy output metadata audit: PASS — 8 directories inspected; 0 incorrectly promoted to public.
- `git diff --check`: PASS.
- ESLint run was stopped because other platform lint processes were already active on the same low-memory iMac; no full typecheck or production build was run.
- No dev server started; no database/schema migration; no existing work reset or cleaned.

## Remaining security review

The public Archive API write handler is disabled and production diagnostics are hidden. The separate test/graph/intelligence endpoints still require a route-by-route production exposure review before deployment. The Creator Studio routes and any remaining operational pages also require ownership mapping before final removal or migration.

## Next

1. Define the explicit publication metadata schema and controlled release workflow, including migration of legitimate previously published generated books after human confirmation.
2. Audit all public API routes for side effects, authorization and information exposure.
3. Separate remaining Creator and Publishing Studio operational pages from public editorial descriptions.
4. Reconcile record Markdown files with the canonical catalogue and sitemap.
5. Continue with public Records, Collections, People & Entities, Recoveries and Discover read models.
