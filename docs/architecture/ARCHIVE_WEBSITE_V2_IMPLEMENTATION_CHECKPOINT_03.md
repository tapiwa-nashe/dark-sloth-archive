# Dark Sloth Archive Website V2 — Implementation Checkpoint 03

Date: 2026-11-11
Phase: Production API exposure and side-effect boundary audit

## Changes

Added production-only 404 guards while retaining non-production diagnostics for:

- Six `/api/test-*` routes: application composition, graph mutation, graph inspection/reload/runtime, and runtime integration.
- Creator manuscript creation, Creator preview inspection, and Creator export. Manuscript creation writes local files; export runs a publishing pipeline through a GET request. Both now fail closed in production until moved behind authenticated Platform workflows.
- All eight `/api/intelligence/*` GET endpoints: context, evolution, generate, history, index, interpret, memory, and recall. This includes two GET handlers that write interpretation/evolution state and other endpoints that expose internal intelligence data.
- `/api/knowledge-graph/query`, which exposes internal graph entities, connections, references, and identity traces.

Existing public release protections from checkpoint 01 remain in place: test-publish is disabled, public publishing GET no longer generates, archive POST is rejected, and archive diagnostics are not exposed in production.

## Verification

- Static assertions confirmed all 18 diagnostic, internal intelligence, graph, and Creator routes include a production 404 guard.
- `git diff --check` passed.
- No production build, typecheck, ESLint, or dev server was run. The guards are source-verified but have not been runtime-tested in a production build.
- The API routes are not deleted; their development workflows remain available outside production.
- No authentication system was invented. Production operations remain withheld until integrated with the authenticated Archive Platform.
- No destructive operations, database changes, resets, or unrelated-file edits were performed.

## Architectural implication

The public website must consume curated, explicitly approved public read models. Internal Knowledge Graph and Intelligence endpoints must not become accidental public APIs merely because they are GET routes. Creator authoring, manuscript storage, and export belong behind authenticated Platform permissions.

## Remaining work

1. Define public read-model endpoints for approved records, books, entities, recoveries, and participation summaries.
2. Review public sitemap and metadata generation against actual public routes and approved release state.
3. Complete route-by-route production review for any remaining API endpoints not included in this checkpoint.
4. Revisit runtime verification when machine load permits; do not start concurrent dev servers or builds on the low-memory iMac.
