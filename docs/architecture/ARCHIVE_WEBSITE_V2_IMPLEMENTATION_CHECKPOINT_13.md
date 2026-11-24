# Dark Sloth Archive Website V2 — Implementation Checkpoint 13
## Record Pages V2: Evidence and Provenance Layer

Date: 13 November 2026
Status: Implemented; focused content and syntax checks passed; full application verification remains pending.

### Scope delivered
- Added an Evidence & Provenance panel to public individual record pages.
- Distinguished the canonical public Archive identifier (REC-###) from a separate source-document identifier where one exists (for example, RUNE-001 or DC-001).
- Displayed the source filename, the source attribution label held by the existing public catalogue, and the actual frontmatter fields present in the Markdown source.
- Added an explicit provenance caveat: the catalogue status is not itself an independently inspectable verification report.
- Added links for exact REC-### identifiers explicitly cited in the record text. These are labelled as textual citations, not asserted relationships.
- Added a participation boundary note: public witness counts, participant identities and annotation excerpts are not displayed because participation data is not connected to these record pages.
- Added responsive styling for the evidence panel and citation list.

### Source audit findings
- Public catalogue index remains 48 records.
- All 48 record Markdown files were inspected for frontmatter.
- 10 records (REC-001 through REC-010) have no frontmatter.
- The remaining 38 files carry descriptive fields only; no formal provenance envelope, source revision, registration reference, or publication approval fields were found.
- The existing index uses BOOK I / BOOK II / UNKNOWN source labels; these are explicitly presented as catalogue labels, not as formal source registration references.
- All explicit REC-### identifiers found in the record files resolve to an indexed record; no dangling REC references were found.
- Some source documents have their own identifiers (such as RUNE-001 and DC-001) distinct from the public REC-### identifier. The page now keeps these separate.

### Files
- `app/records/[id]/page.tsx`
- `app/globals.css`
- `docs/architecture/ARCHIVE_WEBSITE_V2_IMPLEMENTATION_CHECKPOINT_13.md`

### Verification
- Source audit (48 Markdown files): PASS
- Frontmatter/provenance audit: PASS (10 files without frontmatter; zero formal provenance envelopes)
- Explicit REC reference resolution: PASS (zero dangling references)
- Focused page assertions: PASS
- TypeScript/TSX syntax transpilation: PASS
- `git diff --check`: PASS
- Full semantic TypeScript check: NOT RUN
- ESLint: NOT RUN
- Production build: NOT RUN
- Browser/runtime integration: NOT RUN
- Development server: NOT STARTED (resource protection)

### Boundaries
- No new provenance or verification claims were invented.
- No records or source documents were rewritten.
- No witness or annotation data was queried, exposed, or promoted.
- No database schema/data or Platform public-release manifest changed.
- Existing unrelated working-tree changes preserved; no commit created.

### Next
A separate source-registration workflow should populate formal provenance only when verified source references and registration evidence are available. Do not infer those fields from titles, book labels, or catalogue status.
