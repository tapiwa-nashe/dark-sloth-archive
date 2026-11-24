# Dark Sloth Archive — Website V2 Implementation Checkpoint 21

Date: 2026-11-14
Milestone: Production Deployment Source Reconciliation V1
Repository: `/Users/tapiwandoro/Projects/dark-sloth-archive`

## Confirmed production source

From the Vercel production deployment details supplied by the account owner:
- Environment: Production / Current / Ready.
- Git branch: `main`.
- Deployed commit: `32cdbd6a2470c373babd5c7643359ddc672513ae`.
- Commit subject: `feat: finalize archive interface alpha shell and navigation system`.
- Commit timestamp: 2026-07-27 09:00:22 +0200.
- Both `darkslotharchive.com` and `www.darkslotharchive.com` are assigned to the production deployment.

## Local/GitHub reconciliation

A read-only `git fetch origin main` completed successfully.
- GitHub `origin/main`: `32cdbd6a2470c373babd5c7643359ddc672513ae` (same commit as production).
- Local branch: `main`.
- Local HEAD: `0c73faa68d47a3de42bb345cffd9b878f90c353c`, dated 2026-09-30 11:07:34 +0200.
- Local branch is 3 commits ahead of `origin/main`, 0 commits behind.
- Local-only commits:
  - `d257218` — feat: establish archive application publishing runtime
  - `649eabd` — feat: add archive runtime and reader type packages
  - `0c73faa` — feat: preserve canonical publication identity in reader adapter
- The local worktree has 426 changed/untracked entries from the previous inventory. These include unrelated and generated package changes, new routes, source changes and deleted package files. They are not all approved for public release.

## Root cause

Vercel production is deploying GitHub `main` at the July 27 commit. The local branch contains three later commits and extensive uncommitted work, but none of these local changes have been pushed to GitHub. Therefore Vercel has no new Git commit from which to build the updated public website.

## Safety decision

Do NOT push the current worktree or deploy it wholesale.
- No reset, clean, checkout, stash, staging, commit, push or deployment was performed.
- Only remote tracking refs were updated by `git fetch origin main`.
- No Vercel settings, domains, DNS, environment variables or GitHub settings were changed.
- No Archive Platform repository or operational database was changed.

## Controlled release plan

1. Preserve the current working tree as the source workspace.
2. Establish an isolated release workspace from the verified production baseline or a deliberate local commit, without altering the existing working tree.
3. Review and selectively transfer only approved public-website files and dependencies. Exclude unrelated generated artifacts, internal operational data, secrets, participant/private content and unfinished routes.
4. Run semantic typecheck, lint and production build in the isolated workspace; investigate failures rather than bypassing them.
5. Push a dedicated preview branch only after explicit source review, then inspect its Vercel preview URL.
6. Confirm public pages, robots, sitemap, metadata, assets and privacy boundaries in preview.
7. Promote to production only after preview approval.

## LKR

Registration was not attempted in this checkpoint. The LKR local service at `127.0.0.1:3010` had previously returned ECONNREFUSED. Restarting services was intentionally avoided to protect the older development machine.
