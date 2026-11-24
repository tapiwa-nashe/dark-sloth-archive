# Archive Website V2 — Implementation Checkpoint 11

## Milestone

Collection detail consistency and released-edition routing correction.

## Collection experience

Added `components/CollectionDetail.tsx` as the shared presentation for catalogue-backed collections. It provides:
- consistent collection identifiers and headings;
- catalogue-derived record counts;
- classification labels and stable REC identifiers;
- clear empty states instead of blank lists;
- direct record links and return navigation.

Refactored Foundational History, Archive Philosophy, The Recovery Laws, and The Dissolution Cycle to use the shared component. The bespoke Whispering Wilds source index remains separate because it contains source-evidence notes rather than the standard public record catalogue.

## Publishing Studio routing correction

The previous public edition detail and artifact download flow could check an edition by title/slug but then resolve its output directory using the title string. This incorrectly assumed that the output folder name matched the public title.

Corrected the release registry to retain the actual output directory name as an internal release field. Public edition detail now resolves the approved release by canonical slug (or legacy title lookup), then uses the registry's actual directory. Artifact delivery uses that same approved directory. Generated-edition cards now link using the canonical release slug and display the actual collection field rather than repeating the book title.

All release eligibility checks remain in place. This change does not promote any edition or weaken the explicit public release envelope.

## Verification

- `git diff --check` passed.
- Focused static assertions passed for all four shared collection pages.
- Focused static assertions passed for slug-to-directory resolution, artifact delivery directory, generated-edition links, and collection display.
- No full typecheck, ESLint, production build, or runtime integration test was run.
- No database changes, publication manifest changes, or server starts.
- Existing unrelated repository modifications and deletions were left untouched.
