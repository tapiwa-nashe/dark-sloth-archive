# Dark Sloth Archive Website V2 — Institutional Audit V1

**Audit date:** 2026-11-11
**Scope:** Public Archive website, Archive Platform boundary, connected engine capability inventory, content and publication surfaces.
**Status:** Phase 1 audit — architecture and implementation recommendations; no application code changed.

## 1. Executive finding

The July-era public website is no longer an adequate representation of the institution. The Archive ecosystem now has two substantial applications and a growing set of sibling engines. The correct response is a coordinated institutional experience upgrade, not a single-site redesign and not a merger of the public site with the Platform.

- **Dark Sloth Archive (public):** institutional presentation, public collections, published records, books, public character/entity profiles, verified recoveries approved for public display, research and discovery.
- **Dark Sloth Archive Platform (participation):** authenticated identity, dossier, reading participation, witnessing, annotations, recovery submission, verification, Commons, communications, workspaces, publishing operations and institutional tools.
- **Shared system identity:** canon, visual language, identifiers, provenance principles and shared design tokens. Shared identity does not imply shared permissions or unrestricted shared data access.

The public site should consume explicit, sanitized public read models. It should not directly query operational Platform tables or expose engine internals merely because those systems are technically reachable.

## 2. Repository state and preservation constraints

### Public website repository

- Path: `~/Projects/dark-sloth-archive`
- Branch: `main`
- HEAD: `0c73faa` (`feat: preserve canonical publication identity in reader adapter`)
- Local branch is three commits ahead of `origin/main`.
- Working tree contains extensive pre-existing modifications, deletions and untracked files (audit snapshot: approximately 46 modified, 237 deleted and 89 untracked status entries; generated/package output accounts for part of this state).
- No reset, checkout, clean, broad formatter, dependency install or destructive cleanup was performed.
- The project has no meaningful application-level test suite discovered; one runtime kernel test file exists under `packages/runtime/tests`.

### Archive Platform repository

- Path: `~/Projects/dark-sloth-archive-platform`
- Branch: `recovery-prisma-fix`.
- Working tree contains extensive pre-existing changes across routes, UI, authentication, Prisma, recovery, publishing, Commons, participation, tests, migrations and backups.
- The Platform is in active development. Do not overwrite, reset, rebase, clean or broadly format it as part of this website project.
- Platform inventory observed: approximately 96 page routes, 39 API route handlers, 106 TSX components and 76 test files at audit time. Counts are filesystem snapshots, not product-completion claims.

## 3. Public website — current inventory

### Routes

- Home, collections and six collection detail routes.
- Records index and record detail.
- Books catalogue.
- Recoveries.
- Identity and dossier reference pages.
- First Recovery entry flow.
- Studios and Publishing Studio surfaces.
- Creator/publishing workspace routes.
- Platform bridge/landing page.
- API surfaces for archive queries, publication, creator artifacts, intelligence and knowledge graph, plus test routes.

### Existing assets and content

- 48 Markdown files exist under `content/records`.
- The static `lib/records.ts` catalogue currently declares 42 entries, ending at REC-045.
- Six existing Markdown records (`rec-046.md` through `rec-051.md`) are not represented in the static catalogue and therefore are not listed by the current record index.
- The current record index describes itself as the first ten foundational records while rendering the full static catalogue. Its title/description and actual list are inconsistent.
- Six public collections are declared: Foundational History, Archive Philosophy, The Recovery Laws, The Twenty-Four Runes, The Dissolution Cycle and Whispering Wilds.
- The book page has two hand-maintained publication groups (Codex and Archive Documents), plus a generated-edition section derived from the local output directory.
- Eleven local book cover assets were found under `public/books`.

### Current public experience issues

1. Homepage metrics and several counts are hard-coded rather than derived from an authoritative public catalogue.
2. The Recoveries page displays three example recovery cards; it is not connected to a verified public recovery feed.
3. Identity and dossier pages are reference/static pages rather than a proper public profile system for recovered characters/entities and public contributors.
4. Public navigation exposes Creator Engine and Publishing Studio beside public collections and records. These are operational capabilities and should not be treated as ordinary public destinations.
5. `lib/publishing/registry.ts` enumerates directories under `output/` and defaults missing publication status to `PUBLISHED`. Public release must instead require explicit publication approval/status and public visibility metadata.
6. The homepage and current navigation are not a connected discovery experience; links do not consistently lead visitors through related records, books, entities and collections.
7. The global stylesheet is approximately 4,837 lines and contains repeated/overlapping navigation and layout overrides. A token-led component system should replace further ad-hoc CSS growth, without a destructive stylesheet rewrite.
8. The sitemap is a short hand-maintained list. It does not include individual public records or collection pages and should be generated from approved public content.
9. The README remains the default Next.js starter documentation and does not describe the institution or its runtime boundaries.

## 4. Platform — current capability inventory

The Platform is substantially more mature than the public website and already contains distinct institutional and operational areas:

- Archive overview and dashboard.
- Archive identities, identity profiles, dossiers and identity actions.
- Recovery creation, recovery detail, recovery stream and recovery access controls.
- Witness, annotation, observer, endorsement, transfer and verification participation services/repositories.
- Commons membership and governance.
- Reading/library entry points and bookmarks.
- Communications, messages, inbox and notifications.
- Knowledge graph, Atlas, search, discovery, timeline, map, memory and intelligence.
- Publishing, edition, export, manuscript import and Publishing Studio.
- Registry, artifacts, canon, keys, appointments, nominations, governance and institutional operations.
- Archive Assistant and LKR integration.

The Platform already contains `PublicNav`, `OperationsNav`, `ArchiveNav`, `ArchiveNavigation` and an `ArchivePlatformFrame`. The frame distinguishes specialised workspaces from the common operational shell. `PublicNav` is currently used on the Discover page rather than acting as a complete, site-wide public institutional navigation. The root Platform route redirects to `/archive`; the public website has a separate `/platform` bridge page.

The Platform's Records route is already access-policy-aware and filters registry entries through the recovery visibility policy. Its Recoveries route explicitly says the dedicated recovery catalogue is not yet connected and avoids fabricating records. This is the correct fail-closed approach and must be preserved.

## 5. Engine and capability integration map

### Directly represented in the public website project

- `@dark-sloth/core`, `@dark-sloth/types`, `@dark-sloth/runtime`.
- `@dark-sloth/identity` and `@dark-sloth/navigation`.
- `@dark-sloth/reader-types` (types contract only).
- `publishing-studio` package.
- Local knowledge-graph and intelligence implementation/adapters under `lib/knowledge-graph` and `lib/intelligence`.

### Important sibling capabilities not yet integrated as first-class public website experiences

- Reading Engine: reading core, reader, memory, SDK and surface packages.
- Dark Sloth Book System: canonical `.dsbook` format, compiler, portable HTML and reading adapter.
- Recovery Stream Engine: core, ranking, stream, recommendation and storage packages.
- Archive Assistant Engine.
- Living Knowledge Runtime / LKR.
- Civilization Engine and Commons-related sibling packages.
- Glyphic Engine and canonical rune/grammar resolution.
- Biography Recovery Engine, Registry Engine and Artifact Engine.

The Platform already has direct package integrations for the Archive Assistant, Identity Engine, Living Knowledge client and Recovery Stream core/ranking/types. It also has the corresponding participation, Commons and institutional services in its own application boundary. The Platform currently redirects its Library route to the separate Library application.

**Integration recommendation:** do not add every engine as a direct dependency of the public website. Define a small server-side public-content integration layer that reads approved publication and public profile projections from their owning systems. Keep write operations, personal reading state, participation records, private dossiers, operational intelligence and internal LKR data inside their authoritative applications.

## 6. Recommended institutional experience boundary

| Experience | Public Archive | Archive Platform |
|---|---|---|
| Institutional philosophy, constitution and public history | Public | Reference/operational access as appropriate |
| Approved collections and canonical public records | Public | Curate, register and administer |
| Published books and approved editions | Public discovery and reading entry | Publishing and distribution operations |
| Recovered characters and public entities | Public profiles and relationships | Canonical identity/entity management |
| Participant identity and private dossier | Public profile only when explicitly opted/public | Owner, authorized participant and guardian views |
| Witnessing and annotations | Publicly display only items explicitly approved for publication | Create, manage, moderate and persist participation |
| Recovery submission | Explain the process and provide a clear Platform entry | Authenticated submission and lifecycle |
| Verification | Display approved public verification evidence | Authorized verification workflow |
| Commons | Explain purpose, principles and admission path | Membership requests and governance |
| Publishing Studio / Creator tools | Public catalogue and studio description | Authenticated production workspace |
| Assistant, intelligence and LKR | Curated public explanations/results only | Private and operational capabilities |

## 7. Proposed public information architecture

1. **Home** — institutional proposition, featured recoveries, selected collections, books and clear entry points.
2. **The Archive** — mission, philosophy, history, constitution, principles and stewardship.
3. **Collections** — six existing collections with clear scope, counts from real data and collection-level journeys.
4. **Records** — approved public records, searchable and filterable by collection, type, status and relationship.
5. **Library** — published books, editions, manuscripts and reader entry points; only explicitly released material.
6. **People & Entities** — recovered characters, canonical entities, public contributors and their approved relationships. Keep fictional/recovered character identity distinct from participant account identity.
7. **Recoveries** — approved public recovery stories and milestones; no examples or private submissions masquerading as real records.
8. **Studios** — public descriptions of HELMR HUGR, publishing, research and other creative/recovery studios; tools remain in the Platform.
9. **Discover** — unified public search and relationship exploration across public records, books, collections and entities.
10. **Enter the Platform** — explicit bridge to participation, authentication and workspaces.

## 8. Proposed Platform information architecture

Keep the Platform as a separate application and operational shell. Its navigation should be organised around:

- Home / Dashboard.
- Identity and Dossier.
- Reading and Personal Library.
- Recovery Stream and Recovery Workspace.
- Witnessing, Annotations and Contributions.
- Commons and Governance.
- Communications.
- Knowledge, Atlas and Intelligence.
- Publishing and Studios.
- Institutional Operations and Administration (permission-gated).

This is a grouping proposal, not a mandate to rename or relocate routes before reviewing each route's auth policy, workflow ownership and engine boundary.

## 9. Shared design direction

Preserve the Dark Sloth canon and visual identity: charcoal/off-white foundations, rich deep colours, restrained red, HELMR HUGR marks, established Archive identifiers and canonical rune usage. Do not introduce generic AI-dashboard styling or invented logos.

- **Public Archive:** editorial, immersive, literary, cultural and discovery-oriented; spacious typography, strong collection imagery, readable long-form records and clear provenance.
- **Archive Platform:** compact, responsive, information-dense and operational; reusable panels, clear state/permission indicators, consistent workspace navigation and accessible interaction patterns.
- **Shared:** tokens for colour, type, spacing, borders, focus states, status semantics, identifiers and responsive behaviour. Separate layout shells and information hierarchy.

## 10. Priority risks and implementation gates

### P0 — public exposure and publication boundary

- The public website exposes test API routes. In particular, `GET /api/test-publish` invokes a publication operation; test-evolution also mutates the local graph snapshot. These must be removed from production routing or guarded behind a non-production-only boundary before release.
- `POST /api/archive` accepts publication input without an evident authentication/authorization check in the inspected handler. Review this write boundary before public deployment; require explicit trusted authorization and validation.
- Generated editions must not be treated as public merely because an output directory exists. Require explicit approved status, provenance and visibility.
- Public identity, annotation, witness and recovery surfaces must consume public projections only. Never expose private identity/dossier or participation data by default.

### P1 — content correctness and discoverability

- Reconcile the static record catalogue with the 48 Markdown files; the six latest record files are currently omitted from the index.
- Replace example recovery cards and hard-coded homepage metrics with verified public data or remove the claims until connected.
- Separate public character/entity profiles from participant Archive identities.
- Rebuild sitemap from public, canonical, approved routes and content.
- Replace invalid/stale navigation destinations and keep Creator/Publishing workspaces out of public primary navigation.

### P2 — architecture, accessibility and performance

- Consolidate the 4,837-line stylesheet incrementally around design tokens and reusable components.
- Add route-level tests for public visibility, navigation destinations, metadata, record-to-file integrity and public publication eligibility.
- Add responsive, keyboard, focus, contrast and reduced-motion checks.
- Avoid running concurrent development servers or heavy builds on the current constrained iMac. Establish one controlled verification window after static changes are complete.

## 11. Recommended delivery sequence

1. Approve this boundary and the public/Platform information architecture.
2. Define public content contracts and publication eligibility, including the public projection for records, books and entities.
3. Establish shared design tokens with separate Public Archive and Platform shells.
4. Upgrade public navigation, footer, homepage and discovery entry points.
5. Upgrade collections, records, library, people/entities and recoveries using verified content.
6. Integrate public participation summaries only where publication permission exists; route actions into the Platform.
7. Align Platform navigation and visual system without disrupting specialized workspaces.
8. Verify permissions, content integrity, accessibility, performance, sitemap and release readiness.

## 12. Audit completion and non-actions

- Inspected both repository structures, route inventories, public navigation, layout shells, key content adapters, publication registry, public API handlers, Platform navigation and representative access-aware routes.
- Inspected engine package manifests and selected engine documentation to distinguish existing integrations from capabilities not yet represented on the public website.
- Inspected LKR API registration contract and confirmed the local Control Room endpoint responds but requires its configured authentication token. No LKR record has been written by this audit yet.
- No application source, styles, data, dependencies, running services, database records or existing user changes were modified during the inspection.

**Phase 1 outcome:** the architectural direction is clear. Proceed with the public data contract and experience blueprint before implementing the visual upgrade. Preserve the two-application boundary and the owning-engine boundaries.
