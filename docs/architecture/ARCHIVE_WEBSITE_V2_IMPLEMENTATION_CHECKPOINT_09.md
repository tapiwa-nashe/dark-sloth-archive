# Archive Website V2 — Implementation Checkpoint 09

## Milestone

Live public catalogue metrics and gateway refresh.

## Homepage changes

Updated `app/page.tsx` to consume the server-side public Archive feed:
- Collections count comes from the shared collection catalogue.
- Records count comes from the public records catalogue.
- Public recovery and People & Entities counts come from the Platform public read-model adapter.
- If the Platform feed is not connected, the homepage displays an em dash and an explicit awaiting-connection caption instead of implying that zero public releases exist.

Removed the unsupported homepage metrics for a single public dossier and a root participant Archive ID. Replaced those cards with Records, Public Recoveries, and People & Entities.

Updated Archive Gateways to point directly to Collections, Recoveries, People & Entities, and Books. The private participant identity system is no longer represented as a public homepage metric.

## Verification

- Focused `git diff --check` for `app/page.tsx` and the Whispering Wilds collection page passed.
- No full build, typecheck, lint, or dev server was started due to host resource constraints.
- No Platform data, release manifests, or database schema changed.
