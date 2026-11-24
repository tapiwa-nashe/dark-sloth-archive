# Dark Sloth Archive Website V2 — Implementation Checkpoint 07

Date: 2026-11-11
Phase: Platform-to-public read-model bridge V1

## Platform implementation

- Added `lib/public-release/manifest.ts` as a code-reviewed, explicit release register for recovery and public entity records. Both arrays are empty by default.
- Added `GET /api/public/archive`, a read-only projection returning only public recovery and entity DTOs plus aggregate witness counts for already released recoveries.
- The endpoint requires explicit PUBLISHED/PUBLIC release metadata, approval and publication timestamps, non-withdrawn status, unique canonical IDs/slugs, and source provenance.
- Underlying recovery rows must additionally be ACTIVE, PUBLIC, and have no required key. Underlying entities must be ACTIVE.
- Recovery body content is included only when a release entry explicitly sets `includeBody: true`.
- No participant IDs, owner IDs, annotation bodies, dossiers, assistant memories, Commons membership, or internal authoring fields are returned. Annotation excerpts are intentionally empty until a separate approval policy exists.
- Added the Platform release procedure at `docs/public-release/PUBLIC_ARCHIVE_READ_MODEL_V1.md`.

## Website implementation

- Added the server-only `lib/public-content/client.ts` adapter. It requires `ARCHIVE_PLATFORM_PUBLIC_API_URL`, enforces HTTPS in production, validates the schema/read-only marker, and re-applies the website's deny-by-default eligibility filter.
- Connected `/recoveries` to the read model, with distinct states for an unconfigured endpoint and a connected endpoint with no approved releases.
- Added `/entities` and `/entities/[slug]` public catalogue/profile pages, driven only by approved read-model entries.
- Added People & Entities to public navigation and sitemap.

## Verification

- Focused static assertions passed for empty-by-default release manifests, database visibility/status/key constraints, no private annotation/creator fields, server-only origin configuration, and connected public pages/navigation.
- `git diff --check` passed in both repositories.
- No Prisma schema changes or migrations were made.
- No full typecheck, ESLint, production build, database query, or dev server was run. Runtime connectivity remains dependent on setting `ARCHIVE_PLATFORM_PUBLIC_API_URL` in the website deployment environment.
- No public releases were added. The bridge is functional but will correctly show zero public records until an explicit approval is made.

## Next work

1. Wire the website environment to the deployed Platform origin and verify the endpoint without exposing credentials.
2. Recover and review candidate public entities and recoveries before adding release entries.
3. Add publication governance and withdrawal workflow for manifest changes.
4. Consider a persisted release table only when a reviewed UI workflow and migration process are ready; V1 intentionally requires no schema change.

## Operational configuration

The live Platform origin has not been inferred or hardcoded. Deployment must set the server-only `ARCHIVE_PLATFORM_PUBLIC_API_URL` to the actual HTTPS Platform origin. Until that is configured, the website deliberately shows `PUBLIC READ MODEL NOT CONNECTED`.
