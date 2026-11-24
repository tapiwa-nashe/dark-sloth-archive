# Dark Sloth Archive — Website V2 Implementation Checkpoint 20

Date: 2026-11-13
Milestone: Production Domain and Deployment Alignment Audit V1
Repository: `/Users/tapiwandoro/Projects/dark-sloth-archive`

## Production observations

- `darkslotharchive.com` resolves to `76.76.21.21`, a Vercel address.
- `www.darkslotharchive.com` resolves through `cname.vercel-dns.com` and Vercel IP addresses.
- `https://darkslotharchive.com` returned HTTP 200 with `server: Vercel` and `x-vercel-cache: HIT`.
- The live homepage title/description differ from the current local root metadata, indicating the served deployment does not reflect the current local website source.
- Live `/partnerships` and `/contribute` routes returned 404.
- Live `/robots.txt` returned a 404 page. The local source has `app/robots.ts`, but that source is not reflected by the live deployment.
- The local `/sitemap.xml` route was queried but no body assertion was made; status remains unverified.

## Local deployment integration

- No `.vercel` project-link directory exists in the local repository.
- Vercel CLI is not installed on the device.
- Git remote is `origin` at `https://github.com/tapiwa-nashe/dark-sloth-archive.git`; current branch is `main`, tracking `origin/main`.
- No Vercel project identity, deployment target, build settings or production environment-variable inventory was available locally.
- No environment files were present in the repository root during the safe key-name inventory.
- Next.js config currently declares `publishing-studio` as a server external package; no deployment-specific configuration was added.

## Safety finding

- The local worktree has 426 changed/untracked entries. Many are unrelated existing work, generated outputs, package changes and new routes. This is not a clean release candidate.
- No files were reset, cleaned, staged, committed, pushed or deployed.
- No credentials or environment values were printed or read.
- No DNS, Vercel, GitHub or production settings were changed.
- No Archive Platform repository or operational database was changed.

## Readiness decision

**DEPLOYMENT BLOCKED — DO NOT PUSH OR DEPLOY FROM THIS WORKTREE.** The domain is active on Vercel, but the current live deployment is behind the local website source. The local repository is not linked to a Vercel project and has extensive uncommitted/untracked work. A release candidate must be isolated and reviewed without disturbing the existing worktree, then connected to the verified Vercel project and deployed through an authorised workflow.

## Next controlled steps

1. Identify the authoritative Vercel project and confirm its Git repository, production branch and build settings through the account owner.
2. Compare the live deployment commit with `origin/main` and the current local source; do not assume the production project is connected to the current branch.
3. Create an isolated release candidate from a verified baseline, selectively carrying only approved public website changes. Preserve the current worktree intact.
4. Verify production environment variables by name and required values through the authorised Vercel project interface; do not copy secrets into source control.
5. Complete semantic typecheck, lint, build and browser checks in the isolated candidate, then use preview deployment before production.
6. Connect the public Platform feed only after its read-only contract and production origin are approved.
