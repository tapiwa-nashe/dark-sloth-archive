# Dark Sloth Archive — Website V2 Implementation Checkpoint 17

Date: 2026-11-13
Milestone: Public Contributor Pathways V1
Repository: `/Users/tapiwandoro/Projects/dark-sloth-archive`

## Implemented

- Created the public `/contribute` route explaining how source custodians, researchers, archivists, educators, translators, technical contributors and institutions may support the Archive.
- Established public-facing contribution principles: provenance before certainty; evidence distinct from interpretation; rights, consent and dignity; transparent corrections; and no promise of publication.
- Explained that contributions require review before they can become public records.
- Explicitly stated that contributor intake is not open on this website and that this page does not accept uploads or create submission records.
- Added contributor pathways to the public navigation, homepage gateways and sitemap.
- Connected the Partnerships page to the contributor guidance page.

## Verification

- TypeScript transpilation syntax checks passed for:
  - `app/contribute/page.tsx`
  - `app/partnerships/page.tsx`
  - `app/page.tsx`
  - `app/sitemap.ts`
  - `components/ArchiveNav.tsx`
- `git diff --check` passed.
- Route, navigation and intake-guardrail assertions passed.
- No full semantic typecheck, lint, production build, browser test or development server was run.
- No unapproved contact channel, upload workflow, consent mechanism, submission database or public intake process was invented.
- No Archive Platform repository or operational database was changed.

## Outstanding

- Establish and verify an authorised intake destination before accepting submissions.
- Implement consent, rights declarations, file handling, acknowledgement, moderation, provenance capture and review workflows before opening intake.
- Define contributor attribution and correction procedures through approved policy.

## Product boundary

The public Archive explains contributor standards and pathways. Operational submission and participation capabilities belong in the separate Archive Platform and must be connected through an explicit, approved workflow.
