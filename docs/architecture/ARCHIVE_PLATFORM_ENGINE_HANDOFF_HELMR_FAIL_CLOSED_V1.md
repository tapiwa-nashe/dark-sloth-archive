# Archive Platform Engine Handoff — HELMR HUGR Fail-Closed V1

Date: 2026-11-16
Status: Implemented locally; configuration and full runtime verification remain outstanding.

## Boundary
The public Archive website exposes the engine directory and explains each experience. Operational engine experiences remain inside the Archive Platform. The public site hands visitors to the Platform gateway; it does not expose private participant workflows or assume that an engine is independently hosted.

## Platform handoff
The public website's `/platform` gateway builds production destinations from `NEXT_PUBLIC_ARCHIVE_PLATFORM_URL`. A localhost fallback is used only during local development, where the known Platform port is 3004. In production, missing configuration leaves destinations unavailable and displays a configuration-pending state rather than emitting localhost links.

## HELMR HUGR fail-closed behavior
The Platform's `/helmr-hugr` route uses `HELMR_HUGR_URL` only when configured and valid. It does not guess a port or redirect to `localhost:3002`; that port has been used by the public preview and is not a verified HELMR HUGR destination. Missing or invalid configuration produces an explanatory Platform page.

## Validation recorded
- Public website ESLint: PASS.
- Public website TypeScript check: PASS.
- Platform `/helmr-hugr`: HTTP 200, configured-destination-pending state.
- Platform `/expedition`, `/commons`, `/publishing`: HTTP 200.
- Platform `/library`: HTTP 307 to the known local Library port 3001.
- Platform `/graph` and Library root: runtime probes timed out; not verified.
- Platform-specific ESLint/TypeScript checks did not complete; not claimed as passing.
- No production build, visual browser review, physical QR scan, deployment, or commit was performed.

## Required configuration before production
- Set `NEXT_PUBLIC_ARCHIVE_PLATFORM_URL` to the verified canonical HTTPS Platform URL.
- Set `HELMR_HUGR_URL` to the verified HELMR HUGR application URL, or implement the engine inside the Platform and replace the external handoff with its real internal route.
- Verify the Library root and reader route from the Platform before declaring the reading journey complete.

## Preservation
All work remains in the `archive-website-v2-preview` branch and is uncommitted. No production deployment is authorized by this checkpoint.
