# Archive Website V2 — Implementation Checkpoint 25

Date: 2026-11-16
Branch: `archive-website-v2-preview`
Status: Preview implementation; not committed or deployed

## Scope completed
- Added permanent public record resolution at `/r/REC-###`.
- Valid record identifiers redirect permanently to their canonical public record detail page; unknown identifiers return 404.
- Added browser-generated QR codes to public record detail pages.
- QR downloads are fail-closed: they require `NEXT_PUBLIC_ARCHIVE_CANONICAL_URL` to be configured as an HTTPS origin and an exact match with the current page origin. No production hostname is hard-coded or assumed.
- Added a contextual Platform participation gate to the record detail page. Public reading remains available without Platform installation.
- Added a public Knowledge Graph reference index derived only from explicit `REC-###` references in public catalogue text. Connections are labelled `TEXT CITES`, not verified relationships.
- Added Knowledge Graph navigation and sitemap entry.
- Added local TypeScript declaration for `qrcode`.

## Architectural boundaries preserved
- The public Archive remains independently readable; Platform installation is not required to inspect public records.
- The Platform remains a separate participation system.
- The public graph does not expose internal graph APIs, private participant data, identities, annotations or witness details.
- No public release status or record verification has been inferred from catalogue presence.
- No production deployment or physical QR batch has been authorised.

## Validation
- TypeScript full-project check: PASS (`tsc --noEmit --pretty false --incremental false` and a second incremental `tsc --noEmit --pretty false` after the QR component refinement).
- ESLint on all changed TS/TSX route and component files: PASS.
- `git diff --check`: PASS.
- QR encoder runtime test: PASS; generated a valid 360×360 PNG at high error correction.
- Live resolver test: PASS; `/r/REC-001` returned HTTP 308 to `/records/001`, and `/r/REC-999` returned HTTP 404.
- Public Knowledge Graph and sitemap live HTTP checks: PENDING; dev compilation exceeded the safe test window on the constrained machine.
- Browser visual review and physical-device QR scan: PENDING.
- Production build: NOT RUN to avoid resource pressure.

## LKR
Implementation registered and read-back verified as `LKR-DEV-1546`. Follow-up runtime validation registered and read-back verified as `LKR-DEV-1549`. Both records use writable `LOCAL_SQLITE` authority.

## Release state
Preview branch only. No commit, push, physical QR distribution or production deployment in this checkpoint.
