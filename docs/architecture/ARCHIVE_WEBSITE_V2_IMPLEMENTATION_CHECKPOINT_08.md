# Archive Website V2 — Implementation Checkpoint 08

## Milestone

Whispering Wilds source index and public entity candidate audit.

## Website implementation

Updated `app/collections/whispering-wilds/page.tsx` from a generic source-reconciliation placeholder to a source-grounded collection index. It now presents six subjects from Book III, grouped by Pathfinder History, Archive History, and Wilds Entities:

- Arlen Vale — PF-001
- Elias Crowe — EC-001
- Nala Mbeki — NM-001
- Mara Quell — MQ-001
- The Ageless — AG-001
- The Sentinel — SF-001

Each entry includes its source chapter, classification/designation, and a short evidence-aware note. The page links to the Codex Library and the separate approved public entity register.

## Evidence and publication boundary

The index is derived from the existing Library release file `release/the-whispering-wilds.html`, specifically Chapters 004, 006, 017, 019, 027, 035, and 038.

The index deliberately retains source distinctions:
- Arlen Vale's early-life details remain conflicting; a related record is marked Partial Recovery.
- Mara Quell's designation is recorded, but the source says acceptance of that title is unknown.
- The Ageless are described as “Continuities”, explicitly a provisional classification.
- The Sentinel's Chapter 004 fragment is disputed and unattributed; the separate Chapter 035 Vale Pursuit Journal entry is authenticated.
- No identity was invented for the child at Milestone Thirteen.
- The Black Vault is not misrepresented as a person.

The page is a collection-level source index, not an approval or release of separate public profiles. The Platform public-release manifest remains empty. No Platform data or public-release settings were changed.

## Companion audit

`dark-sloth-archive-platform/docs/public-release/PUBLIC_ENTITY_RELEASE_CANDIDATE_AUDIT_V1.md` records candidate evidence and the remaining release gates.

## Safety and verification

- Preserved existing unrelated working-tree changes in both repositories.
- No database writes or migrations.
- No public release manifest entries added.
- No dev server, full build, typecheck, or lint started due to resource constraints on the host machine.
- Source extraction was performed read-only from the existing published Book III HTML.
