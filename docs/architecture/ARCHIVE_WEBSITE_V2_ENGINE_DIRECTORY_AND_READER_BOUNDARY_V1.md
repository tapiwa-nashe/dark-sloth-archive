# Archive Website V2 — Engine Directory and Participant Reading Boundary V1

Date: 2026-11-16
Repository: dark-sloth-archive-v2-preview
Branch: archive-website-v2-preview
Status: IMPLEMENTED IN PREVIEW; VALIDATION IN PROGRESS

## Institutional boundary

The public Archive is the discovery layer. It supports public browsing of collections, records, books, released artifacts and engine descriptions. It does not provide the full participant reader or protected engine workspaces.

The Archive Platform is the participation layer. Identity-bound experiences, interactive engines, full book reading, chapter navigation, reading continuity, submissions and operational workflows remain in the Platform and retain their own authorization rules.

## Implemented

- Added public `/engines` directory covering HELMR HUGR, The Expedition, Reading Engine, Knowledge Graph Engine, Recovery Stream, Publishing Studio, Living Knowledge Runtime, and Commons & Marketplace.
- Added the engine directory to the public navigation and sitemap.
- Added a connected-experiences section to the public Platform information page. It links to existing Platform routes for HELMR HUGR, Expedition, participant Library/Reader, Commons, Publishing and Knowledge Graph.
- Added a public reader-access bridge at `/read/[slug]`. It does not return book text; it explains the participant reading boundary and links to the Platform and public catalogue.
- Added a "Read in the Archive Platform" action to each published-book catalogue card. The separate retailer listing remains clearly identified as an external publication.
- Added a catalogue notice explaining that public browsing and released artifact viewing remain available while full digital reading is reserved for the Platform.

## Existing system route evidence

The Platform repository contains routes for:
- `/helmr-hugr` — redirects to the configured HELMR HUGR application URL (with its existing localhost fallback).
- `/expedition` — authenticated interactive Expedition workspace.
- `/library` — redirects through the configured Library integration.
- `/read/[slug]` — Platform reader bridge into the Library reader.
- `/commons`, `/publishing`, and `/graph` — existing Platform routes.

The public directory links to the Platform gateway rather than inventing public app URLs or bypassing participant authentication.

## Security and product rules

- Do not expose full book text, chapters, reading progress, or reader APIs through the public Archive.
- Do not mirror protected Platform data into the public catalogue.
- Public artifact previews must be explicitly released and must not become a back door to full manuscript content.
- External retailer destinations are independently operated; the Archive labels them as external publication listings.
- Engine descriptions are discovery metadata. Actual access continues to obey each Platform engine's own identity and permission checks.
- The public Archive remains useful without an account; Platform sign-in is prompted only when a visitor chooses a restricted experience.

## Validation

- Earlier QR/Knowledge Graph work remains uncommitted in this preview branch and must be preserved.
- Engine directory, Platform gateway, reader gate and catalogue changes were added in this checkpoint.
- `git diff --check` and ESLint were invoked for changed files.
- Full TypeScript validation was running at checkpoint preparation; record its final result separately.
- No production build, deployment, external URL configuration or production reader test was performed.
- Do not enable public full-text reading or physical QR printing from this checkpoint.

## LKR registration

Implementation and validation milestone registered in the authoritative local SQLite runtime and read-back verified:
- Recovery ID: LKR-DEV-1554
- Authority: LOCAL_SQLITE
- Source reference: dark-sloth-archive/website-v2/engine-directory-reader-boundary-v1/2026-11-16

Validation completed after implementation: ESLint PASS, full TypeScript PASS, and git diff --check PASS. Preview-only; no production build or deployment.
