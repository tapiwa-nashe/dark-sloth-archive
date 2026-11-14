# Public Website V2 — Preview Release Manifest V1

## Release candidate

- Repository: dark-sloth-archive
- Branch: archive-website-v2-preview
- Base commit: 32cdbd6a2470c373babd5c7643359ddc672513ae
- Purpose: preview-only review of the public institutional website.
- Production domain: unchanged; no promotion requested or performed.

## Candidate scope

This branch contains the selected public-facing website experience and the public-release safety boundaries needed to serve it. It is not a release of the operational Archive Platform or internal publishing/creator runtime.

## Preview review checklist

- [ ] Vercel preview build completes successfully.
- [ ] Homepage and institutional identity render correctly.
- [ ] Books and collection pages preserve published links and correct status language.
- [ ] Records pages show provenance and distinguish source IDs from Archive IDs.
- [ ] Recoveries/entities show a safe disconnected state if the public read model is not configured.
- [ ] Partnerships and contributor pages correctly state proposed/pending status and intake limitations.
- [ ] Sitemap and robots are served correctly.
- [ ] Creator, internal intelligence and test endpoints fail closed in production-like preview.
- [ ] No private identities, dossiers, participant data, Commons data or internal runtime information are exposed.
- [ ] Mobile/responsive, keyboard navigation, contrast and accessibility review completed.
- [ ] Production domain and live deployment remain unchanged until explicit approval.

## Deployment rules

1. This branch is for Vercel Preview only.
2. Do not change the Vercel Production Branch.
3. Do not assign production domains to the preview.
4. Do not promote this deployment automatically.
5. Any missing API origin must remain disconnected; do not guess an origin.
6. Production promotion requires separate explicit approval after preview review.
