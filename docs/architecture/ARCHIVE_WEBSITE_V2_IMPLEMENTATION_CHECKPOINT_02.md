# Dark Sloth Archive Website V2 — Implementation Checkpoint 02

Date: 2026-11-11
Phase: Public catalogue reconciliation

## Recovered and implemented

- Reconciled the public record catalogue against `content/records`.
- Added REC-046 through REC-051 to `lib/records.ts` using their existing Markdown frontmatter titles and collection assignment. Their source records identify their corresponding canonical source runes (RUNE-001 through RUNE-006).
- Updated the public Records index to present the full catalogue rather than describing the page as the first ten records. It now shows each record's classification and collection relationship.
- Updated the record detail collection identifier for records 046–051 so they resolve to COLLECTION_004.
- Rebuilt the Twenty-Four Runes collection listing from the shared record catalogue. It now separates six canonical rune records (021–026) from twelve rune recovery records (040–051), avoiding the earlier conflation of rune records and recovery essays.
- Removed three broken Whispering Wilds links (037–039). The page now states that the previously named references Elias Crowe, the Black Vault, and the Sentinel lack corresponding public Markdown source files in the current records directory and remain withheld pending source recovery.

## Evidence and unresolved catalogue findings

- `content/records` contains 48 Markdown files: 001–036 and 040–051.
- REC-046–REC-051 each have frontmatter with an explicit record ID, title, and collection, and are now represented in the catalogue.
- Files 001–010 predate the frontmatter format; their body content contains the legacy record identifiers and metadata. Their existing catalogue entries were preserved.
- Files 021–026 use RUNE-001–RUNE-006 as their source IDs, while the public route/catalogue identifiers remain 021–026. This distinction is retained rather than rewriting existing public URLs.
- There are no source files for 037–039. The old collection page's names and identifiers are retained only as unresolved references in explanatory text, not as links or verified catalogue entries.
- The title “The Twenty-Four Runes” is the canonical collection title; only six canonical rune record files are currently represented. The page now makes this limitation explicit.

## Focused verification

- Source-to-catalogue assertions passed for REC-046–REC-051.
- Assertions confirmed the three unresolved Whispering Wilds source files remain absent and are intentionally unlinked.
- `git diff --check` passed.
- No full typecheck, ESLint, production build, or dev server was run, to avoid competing with other active work on the low-memory iMac.
- No database schema changes, resets, cleanup, or unrelated-file edits were performed.

## Remaining work

1. Recover or locate the authoritative source material for Whispering Wilds records 037–039 before restoring their links.
2. Review the existing static collection pages for consistent data-driven catalogue relationships and descriptions.
3. Complete the production API exposure audit for graph, test, and Creator endpoints.
4. Reconcile previously published generated books through explicit human-approved release metadata; do not auto-promote legacy manifests.
