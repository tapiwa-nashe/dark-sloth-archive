# Archive Website V2 — QR Record Resolution and Public Knowledge Graph V1

Date: 2026-11-16
Branch: archive-website-v2-preview

## Decisions
- Public record QR codes resolve through permanent record paths: `/r/REC-001`.
- The resolver validates identifiers against the public record catalogue, returns 404 for unknown identifiers, and permanently redirects valid identifiers to `/records/001`.
- QR images are generated in the visitor's browser. Preview pages use the preview origin and cannot enable QR downloads.
- Physical QR downloads are enabled only when `NEXT_PUBLIC_ARCHIVE_CANONICAL_URL` is configured as an HTTPS origin and the current page origin exactly matches it. No production domain is assumed by application code.
- QR codes are intended for public record discovery. Reading the public record does not require Platform installation.
- Participant actions are separately explained and linked to the Platform.
- Public graph V1 derives only explicit REC-### references present in public catalogue record text. These edges are labelled TEXT CITES and are not presented as verified relationships.
- No internal Knowledge Graph API is exposed.
- No private Platform data, identity information, annotation or witness details are exposed.

## Implemented
- `app/r/[id]/route.ts` — canonical record resolver with permanent redirect and explicit 404 response.
- `components/RecordQrCard.tsx` — browser-generated record QR component with canonical-origin print gate.
- `types/qrcode.d.ts` — local TypeScript declaration for the QR package.
- `components/PlatformFeatureGate.tsx` — contextual participation gateway.
- `app/knowledge-graph/page.tsx` — public textual-reference graph index.
- Record detail page integration, navigation entry and sitemap entry.
- Responsive styling for QR, participation gate and graph index.

## Pending
- Configure and verify the canonical production HTTPS origin before enabling physical QR downloads.
- Validate printed QR output and scan behaviour on multiple devices.
- Test valid and unknown resolver IDs through a running preview server.
- Implementation milestone `LKR-DEV-1546` and runtime validation milestone `LKR-DEV-1549` registered and read-back verified under writable `LOCAL_SQLITE` authority.
- Complete browser review of the preview experience.

## Validation
- TypeScript: full-project `tsc --noEmit` passed after the final QR component refinement.
- ESLint: passed on all changed TS/TSX route and component files.
- QR encoder: generated and validated a 360×360 PNG at high error correction.
- Live resolver: `/r/REC-001` returned HTTP 308 to `/records/001`; `/r/REC-999` returned HTTP 404.
- `git diff --check`: PASS.
- Public Knowledge Graph and sitemap live HTTP checks remain pending because dev compilation exceeded the safe test window.
- Browser visual review and physical-device QR scan remain pending.
- Full production build and deployment were not run to avoid resource pressure on the development machine.

## Release
Preview implementation only. No production deployment performed.
