# Archive Shared-Domain Workspace Routing Audit V1

Date: 2026-11-16
Canonical public origin: `https://darkslotharchive.com`
Proposed participant prefix: `/workspace`
Status: ARCHITECTURE AUDIT COMPLETE — IMPLEMENTATION REQUIRES PLATFORM ROUTING ADAPTATION

## Decision

The public Archive and Archive Platform will share the canonical domain while remaining separate Next.js applications, repositories, data stores and authorization boundaries.

- Public institutional website: `https://darkslotharchive.com/`
- Platform entry: `https://darkslotharchive.com/workspace`
- Platform route examples: `/workspace/commons`, `/workspace/publishing`, `/workspace/helmr-hugr`
- Public information gateway: `/platform`

The shared origin is a reverse-proxy/routing arrangement, not an application merge and not a simple client-side redirect.

## Findings

1. The public website V2 preview is a separate Next.js 16.2.7 application and its production build passed during the deployment-readiness audit.
2. The Platform is a separate Next.js application with a large App Router surface, many API route handlers, Supabase SSR authentication, and server-side cookie handling.
3. Platform auth callback URLs are derived from `NEXT_PUBLIC_SITE_URL`; production must use the shared HTTPS origin. Supabase redirect allowlists must include the canonical callback URL.
4. Platform cookie handling uses root path `/` and same-site cookies. A same-origin reverse proxy can preserve browser cookie scope, but proxy forwarding and auth callback behavior must be verified end to end.
5. Platform client code contains numerous root-relative API fetches such as `/api/auth/library-session`, `/api/commons/*`, `/api/expedition/*`, `/api/messages/*`, and `/api/participant-publishing/*`. A `/workspace` path prefix does not automatically rewrite these fetch URLs.
6. Platform contains many root-relative navigation destinations. The Next.js `basePath` option can prefix Next-managed links and static assets, but does not automatically prefix arbitrary `fetch('/api/...')`, `window.location` assignments, or every external integration URL.
7. The public website also owns API routes, so indiscriminately proxying all root `/api/*` requests to Platform would cause route collisions and could break public publishing/intelligence APIs.
8. The preview clone is not linked to a Vercel project and has no Vercel CLI installed. The existing domain responds from Vercel, but this audit cannot inspect or modify the production Vercel project or its deployment environment.
9. The Platform's production deployment origin is not discoverable from the checked local repository configuration. A reverse proxy needs that exact origin as an upstream target.

## Required implementation sequence

1. Identify the existing Vercel project/deployment serving `darkslotharchive.com` and the Platform's deployable Vercel project/origin.
2. Implement a Platform routing adapter for `/workspace`: basePath-aware internal links, API URL construction, downloads, auth callback redirects, and static assets.
3. Add an explicit public-site reverse-proxy rule for `/workspace/:path*` to the verified Platform deployment origin, with host/cookie forwarding and no public API route collisions.
4. Configure Platform production `NEXT_PUBLIC_SITE_URL=https://darkslotharchive.com` and the verified auth callback/redirect allowlist. Configure the public QR canonical origin as `https://darkslotharchive.com`.
5. Verify magic-link sign-in, callback, refresh, sign-out, protected route denial, Platform API calls, file uploads/downloads, static assets, and deep-link refresh under `/workspace`.
6. Verify public website routes remain on the public app and Platform routes remain isolated. Then stage a preview deployment and complete browser acceptance before production promotion.

## Release safety

- No routing code was changed in either application in this audit.
- No DNS, Vercel domain, deployment, Supabase redirect allowlist, or production environment settings were changed.
- No project was merged and no data store was moved.
- Do not deploy a path-prefix proxy until Platform basePath/API/auth adaptation and a verified upstream deployment origin are in place.
- Do not point the Platform gateway at the public root URL; that would loop visitors back to the public site.
