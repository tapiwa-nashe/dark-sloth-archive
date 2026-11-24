# Dark Sloth Archive V2 — Experience Architecture & Public Data Contracts

**Date:** 2026-11-11
**Phase:** 2 — Experience Architecture & Public Data Contracts
**Status:** Architecture baseline; implementation not yet authorized by this document
**Depends on:** ARCHIVE_WEBSITE_V2_INSTITUTIONAL_AUDIT_V1.md

## 1. Decisions

1. The public Archive and authenticated Archive Platform remain separate applications with separate shells, navigation, session assumptions and authorization boundaries.
2. The public website consumes curated public content through a server-side projection layer. It does not query Platform operational tables directly.
3. A record's existence, a database visibility default, a canon approval, a local output folder, or a successful publication build does not by itself authorize public display.
4. Every public item must have explicit publication approval, public visibility, provenance and a stable canonical identifier.
5. Participation actions and personal state remain in the Platform. The public site may display only separately approved public summaries.
6. Existing route names and specialised workspaces are preserved until route ownership and authorization have been mapped. This is a grouping architecture, not a route migration instruction.
7. All current uncommitted work in both repositories is protected. No reset, cleanup, broad formatting, dependency installation or schema migration is part of Phase 2.

## 2. Experience map

### Public Archive — editorial and discovery

| Area | Route family | Purpose |
|---|---|---|
| Home | / | Institutional introduction, featured approved content and entry paths |
| The Archive | /archive and editorial subroutes | Mission, history, philosophy, constitution, stewardship |
| Collections | /collections, /collections/[slug] | Curated journeys and collection relationships |
| Records | /records, /records/[id] | Searchable approved public records |
| Library | /books, /books/[slug] | Published works and approved editions |
| People & Entities | /people, /people/[slug], /entities/[slug] | Public recovered characters, entities and opted-in contributors |
| Recoveries | /recoveries, /recoveries/[id] | Approved public recovery narratives and milestones |
| Studios | /studios, /studios/[slug] | Public explanation of institutional studios |
| Discover | /discover | Cross-catalogue public search and relationship exploration |
| Platform bridge | /platform | Explain participation and route users to the Platform |

Public primary navigation must not expose operational Creator or Publishing Studio tools as public destinations. Studio descriptions are public; studio workspaces are Platform destinations.

### Archive Platform — participation and operations

| Workspace | Responsibility |
|---|---|
| Dashboard | Personal and role-appropriate work overview |
| Identity & Dossier | Authenticated participant identity and protected dossier |
| Reading & Personal Library | Reading state, bookmarks, annotations-in-context and personal collections |
| Recovery Workspace | Create, submit, manage and review recoveries under policy |
| Witnessing & Contributions | Witness, annotate, endorse, transfer and verification workflows |
| Commons & Governance | Membership, terms, decisions and governance |
| Communications | Inbox, messages and notifications |
| Knowledge & Intelligence | Atlas, graph, search, timeline, memory and authorized intelligence |
| Publishing & Studios | Manuscript, edition, export and production workflows |
| Institutional Operations | Registry, canon, keys, appointments and administrative functions; role-gated |

The Platform route map is an information architecture overlay. Existing specialised workspace frames remain intact unless a later route-by-route migration plan explicitly approves a change.

## 3. Ownership and trust boundaries

| Data domain | Authoritative owner | Public projection |
|---|---|---|
| Canonical books and editions | Publishing pipeline / Library / book system | Released edition metadata and approved reading destination |
| Public records | Archive catalogue and approved recovery/publication workflow | Sanitized record document |
| Collections | Public catalogue curation | Published collection and ordered public references |
| Recovered characters / entities | Canon and entity stewardship systems | Approved public entity profile |
| Participant identity | Platform Identity system | Only explicit public profile fields after opt-in |
| Dossier | Platform | None by default |
| Recovery submissions | Platform / Recovery Stream | Only separately approved public recovery |
| Witnesses and annotations | Platform participation services | Aggregate counts or selected excerpts only after explicit publication approval |
| Commons membership | Platform Commons | Public principles and process; no member roster by default |
| Assistant memory and intelligence | Platform / LKR / owning engines | No personal memory or operational internals |
| Provenance and LKR registration | LKR and owning source system | Public provenance summary only when cleared for release |

No public page should import Prisma models from the Platform or make a browser request to operational Platform APIs. The public site should not receive credentials capable of reading the Platform database.

## 4. Public projection contract

The public application should introduce a small typed boundary (proposed module: lib/public-content/) with explicit read models. The first implementation may adapt existing local Markdown and catalogue content; remote integrations are added only when their owning system exposes a stable, authorized read endpoint.

### Shared publication envelope

- canonicalId: stable Archive identifier; required.
- contentType: controlled type (RECORD, BOOK, COLLECTION, ENTITY, RECOVERY, STUDIO, CONTRIBUTOR).
- title: required display title.
- slug: stable public route key; required where route-addressable.
- summary: optional short public description.
- publicationStatus: explicit DRAFT, IN_REVIEW, APPROVED, PUBLISHED, WITHDRAWN.
- visibility: explicit PRIVATE, INTERNAL, UNLISTED, PUBLIC.
- approvedAt, publishedAt, withdrawnAt: nullable lifecycle timestamps.
- provenance: source system, source reference, source revision and registration reference; never private credentials.
- relationships: typed canonical references, not embedded private objects.
- updatedAt: source-controlled timestamp.

**Eligibility rule:** display only when publicationStatus = PUBLISHED, visibility = PUBLIC, required approval evidence exists, the canonical ID is valid, and the item is not withdrawn. Missing, unknown or contradictory fields fail closed. UNLISTED content may resolve only through an explicitly authorized share flow; it must not appear in indexes, search, sitemap or recommendations.

### PublicRecord

- Envelope fields.
- recordType, collectionIds, body or approved Markdown source, authors (public labels only), relatedCanonicalIds, verificationSummary.
- No owner account IDs, private annotations, access keys, internal moderation notes or raw operational provenance payloads.

### PublicBook / PublicEdition

- Envelope fields.
- workId, editionId, authorDisplay, editionLabel, coverAsset, language, description, readingUrl, format, releaseDate.
- A local output/ directory is not a publication signal. An edition is ineligible unless its own explicit release metadata passes the publication envelope rule.

### PublicCollection

- Envelope fields.
- description, coverAsset, orderedItemIds, curatorDisplay, relatedCollectionIds.
- Counts are derived from eligible public items only.

### PublicEntity

- Envelope fields.
- entityType, aliases, biography, canonReferences, relatedCanonicalIds, imageAsset.
- Fictional/recovered character profiles and real participant profiles use distinct types and routes. Canon approval is not automatically publication approval.

### PublicRecovery

- Envelope fields.
- recoveryType, narrative, sourceReferences, relatedCanonicalIds, verificationSummary, publicTimeline.
- A submission, active recovery record, or visibility database default does not qualify. It requires a dedicated public release decision.

### PublicParticipationSummary

- targetCanonicalId, witnessCount, approvedAnnotationExcerpts, approvedEndorsementSummary, asOf.
- Counts and excerpts are computed by a trusted server-side projection. No participant identifiers, email, private text, raw annotation stream or personal activity history is exposed.
- Until explicit per-item/per-excerpt publication controls exist and are verified, return no participation excerpts and no participant-level data.

## 5. Platform schema implications

The current Platform schema includes sensitive operational objects such as User, ArchiveIdentity, Dossier, AssistantMemory, Witness, Annotation, CommonsMembership, RecoveryRecord, VisualEntity, VisualCanonEvidence and RegistryEntry.

Important cautions from the schema review:

- RecoveryRecord.visibility currently defaults to PUBLIC; this is not a safe publication contract. Public release must be determined by the authorization policy and explicit publication evidence, never by this default alone.
- Annotation has no publication approval/visibility fields in the inspected schema. Treat all annotations as private to authorized Platform workflows until a moderation/publication contract is deliberately designed.
- Witness links a user to a recovery record. Never expose the witness relation or identity list. A public aggregate would require a trusted, policy-filtered projection.
- Dossier, AssistantMemory, Commons membership events and operational governance data are private/role-bound by default.
- VisualEntity.status = approved and canon-evidence status describe canon workflow; they do not establish public publication permission.
- Entity and RegistryEntry do not currently carry a complete public release envelope. Do not infer public eligibility from ACTIVE status.
- The public application must not use the Platform schema as its public DTO definition.

These findings do not authorize schema changes in Phase 2. Any future metadata migration requires a separate schema design, backfill plan, access-policy review and LKR registration.

## 6. Publication and exposure gates

### Gate A — public catalogue integrity
- Reconcile Markdown records with catalogue entries, including REC-046 through REC-051.
- Establish canonical ID, slug, source file, collection links and explicit release state.
- Reject duplicate canonical IDs and duplicate public slugs.

### Gate B — books and editions
- Replace inferred PUBLISHED defaults with explicit metadata.
- Require approved release state, public visibility, provenance and a valid destination.
- Keep manuscript drafts and generated build artefacts out of public catalogue output.

### Gate C — recoveries and participation
- Remove example recovery cards or replace them with eligible records.
- Keep Platform participation actions behind Platform authentication.
- Publish no annotation excerpt, witness identity or dossier content without explicit permission and review.

### Gate D — API and production safety
- Test-only mutation/publication routes must not be available in production.
- Review /api/archive write authorization before deployment.
- Public GET endpoints return projection DTOs only; write endpoints require authentication, authorization, validation, rate limits and auditability.
- Production sitemap, search and metadata include only eligible public routes.

## 7. Shared design system, separate shells

Create shared design tokens in a small stable package or public-site token layer first; avoid moving the entire existing 4,800-line stylesheet at once.

Shared tokens cover:
- charcoal/off-white surfaces and restrained deep accent palette;
- canonical typography roles and readable long-form measure;
- spacing, layout widths, border, radius and elevation;
- focus, hover, selected, warning, verified and restricted states;
- motion and reduced-motion behaviour;
- responsive breakpoints and accessible contrast.

Public shell: editorial, spacious, literary, image-led where source assets warrant, with strong reading hierarchy and provenance.

Platform shell: compact, task-oriented, responsive and information-dense, with clear workspace context, permissions and status.

Shared tokens do not require shared navigation, page composition or component density. No invented marks or decorative rune usage; canonical marks and runes must follow Archive canon.

## 8. Delivery sequence

1. Establish typed public DTOs and a local adapter for current public records/books/collections.
2. Build a publication eligibility validator and tests; fail closed on missing status or visibility.
3. Reconcile the public catalogue and correct the record index and sitemap inputs.
4. Separate public editorial routes from Platform workspace destinations.
5. Establish shared tokens and public shell components incrementally.
6. Upgrade public Home, Collections, Records, Library, People & Entities, Recoveries and Discover using eligible read models.
7. Align Platform navigation in a separate controlled workstream after route ownership and permission mapping.
8. Run focused tests and one controlled build/verification window only when the machine is stable.

## 9. Explicit non-goals for this phase

- No server startup, concurrent dev servers or heavy build.
- No database migration or change to Platform schema.
- No cross-application direct database access.
- No automatic public release of any current recovery, annotation, witness, identity, entity or generated book.
- No broad route renaming or deletion.
- No changes to existing user work outside this new architecture document.

## 10. Phase 2 exit criteria

- Public and Platform route families and responsibilities are documented.
- Data ownership and prohibited cross-boundary access are explicit.
- Typed public projection contracts and fail-closed publication eligibility are specified.
- Schema gaps and publication risks are recorded without assuming unsupported fields.
- Implementation sequence and release gates are actionable.

**Phase 2 outcome:** architecture and public data contracts are specified. Proceed to a small, testable public-content adapter and eligibility validator before visual page upgrades.
