# Dark Sloth Archive — Website V2 Implementation Checkpoint 23

Date: 2026-11-14
Milestone: Public Institutional Homepage Experience Redesign V2
Repository: /Users/tapiwandoro/Projects/dark-sloth-archive-v2-preview
Branch: archive-website-v2-preview
Commit: 1a397ea

## Visual review finding

The supplied browser screenshot was confirmed to be the Vercel preview deployment, not the production alias. It showed the institutional introduction from the preview source, but the homepage still used the old oversized single-column hero, overlapping First Recovery panel, repeated legacy card patterns and excessive left navigation clearance. A successful build had not constituted a meaningful visual redesign.

## Implementation

- Rebuilt the homepage into a structured institutional experience with a responsive two-column hero.
- Preserved the canonical principle "Nothing is invented. Only recovered."
- Added clear public Archive and Books entry actions.
- Added an institutional principles index distinguishing source preservation, evidence and uncertainty.
- Reworked the institutional introduction into a clearer editorial two-column layout.
- Replaced the repetitive gateway list with six numbered public catalogue pathways: Collections, Records, Books, Recoveries, People & Entities, and Partnerships.
- Added catalogue indicators driven by the actual collections/records catalogues and public feed connection state.
- Repositioned First Recovery as a dedicated feature section rather than an oversized floating panel.
- Added explicit contributor and institutional partnership pathways.
- Added a restrained institutional closing statement.
- Replaced excessive legacy desktop left padding (up to 300px) with a consistent 76px navigation rail clearance; responsive mobile spacing remains 24px.
- Refined navigation rail presentation and hover expansion.
- Added responsive layouts and reduced-motion handling.
- Kept public Archive separate from the operational Archive Platform.

## Validation

- TypeScript TSX transpilation syntax: PASS for app/page.tsx and components/ArchiveHero.tsx.
- Required public gateway route assertions: PASS.
- Homepage CSS selector assertions: PASS.
- git diff --check: PASS.
- Commit pushed to preview branch: 1a397ea.
- Candidate working tree clean after push.

## Not yet verified

- Vercel deployment/build for commit 1a397ea.
- Browser rendering of the new homepage at desktop and mobile sizes.
- Navigation hover/keyboard behavior in the browser.
- Full semantic typecheck, lint and production build.
- LKR registration; local LKR service was previously unavailable at 127.0.0.1:3010.

## Release status

PREVIEW REDESIGN COMMITTED AND PUSHED — AWAITING VERCEL BUILD AND VISUAL REVIEW.
Production main branch, production deployment, domains, DNS and settings remain unchanged.
