# Recovery and Institutional Milestone Publication Protocol V1

**Canonical status:** ADOPTED
**Effective date:** 2026-11-16
**Protocol owner:** The Archive, with technology ownership held by Dark Sloth Recovery Technologies
**Institutional register:** Living Knowledge Runtime (LKR)
**Applies to:** All Dark Sloth repositories, engines, studios, programmes and institutional workstreams

## 1. Governing rule

LKR registration is not the end of the workflow. Every qualifying recovery or institutional milestone must receive an authoritative LKR record, a corresponding durable Archive/Recovery Stream publication record, and publication to the correct canonical Entity account when public-release requirements are met and that account is verified.

Not every completed task is a recovery. Work must be classified honestly before registration or publication. No routine maintenance, debugging, partial implementation or ordinary administrative action may be promoted as a recovery or institutional milestone merely to create activity.

## 2. Canonical publication accounts

- **Entity-0001 — Dark Sloth Recovery Technologies:** the operating-company participant account. It is the designated owner of technologies recovered, developed or brought under the company's stewardship. Its institutional account is currently **PENDING VERIFICATION**; no public publication may be routed to it until the register confirms verification.
- **Entity-0002 — The Archive:** the founding institutional participant and verified Archive institutional account. It is the institutional gateway, record custodian and publication identity for completed institutional milestones.
- **Entity-0003 — HELMR HUGR:** an ecosystem institutional participant account currently **PENDING VERIFICATION**. It is not presumed to be a subsidiary, owner or verified authority.

Entity IDs are participant/publication identities, not proof of legal ownership. Publication authorship does not transfer technology ownership. **Dark Sloth Recovery Technologies owns the technologies; The Archive holds institutional custody, verification and governance authority.** For technology records, preserve `technologyOwner: "Dark Sloth Recovery Technologies"` and `institutionalCustodian: "The Archive"` as distinct fields. Do not apply technology ownership to non-technology historical material by assumption.

## 3. Work classification

Every candidate work item is assigned exactly one primary class:

### A. RECOVERY

Use only when the work has recovered or established knowledge from identifiable source material, evidence, records, testimony, artefacts or a traceable evidentiary process.

Examples: historical recovery; recovered manuscript or text; recovered character or entity supported by source material; evidence-based discovery; verified reconstruction; recovery of a previously lost or obscured institutional record.

Required evidence: source provenance, a stable subject, a substantive recovery narrative, explicit findings, uncertainty/limitations, and verification status. Designated publication destination: Entity-0001, but public release is HOLD until its institutional account is verified. The LKR and Archive records may be prepared and retained internally meanwhile.

### B. INSTITUTIONAL_MILESTONE

Use when a meaningful institutional capability or structure has been completed and validated. A milestone records what the institution has actually achieved; it is not presented as recovered historical knowledge.

Examples: establishing and validating the Commons and Marketplace repositories and their independent boundaries; completing a functioning engine; implementing and testing a constitutional governance capability; completing a verified institutional integration.

Required evidence: completed scope, working implementation or artefact, validation/test evidence, source repository/reference, known limitations and a clear institutional significance statement. Publication destination: Entity-0002.

### C. OPERATIONAL_CHANGE

Routine development, configuration, integration progress, deployment work, ordinary content updates or non-foundational code changes. Record in project logs and/or LKR only when continuity, traceability or institutional risk requires it. No public publication by default.

### D. EXPERIMENT_OR_INCOMPLETE

Prototypes, hypotheses, partial implementations, unverified work, failed experiments and work awaiting acceptance. Preserve useful evidence internally when appropriate. Do not publish as a completed recovery or milestone.

### E. MAINTENANCE_OR_ADMINISTRATION

Routine fixes, dependency updates, housekeeping, allocator operations, debugging, minor styling, scheduling and administrative tasks. No public recovery/milestone publication. LKR registration is not required unless the change materially affects institutional continuity, security, data integrity or auditability.

## 4. Classification decision test

Ask in order:

1. Is there a substantive body of knowledge recovered from traceable evidence? If yes, classify RECOVERY.
2. If not, has a meaningful institutional capability or structure been completed and validated? If yes, classify INSTITUTIONAL_MILESTONE.
3. If neither, classify as OPERATIONAL_CHANGE, EXPERIMENT_OR_INCOMPLETE, or MAINTENANCE_OR_ADMINISTRATION.

Do not inflate a task to fit a publication category. When evidence is insufficient, choose the less-public classification.

## 5. Mandatory workflow for RECOVERY and INSTITUTIONAL_MILESTONE

1. **Classify:** assign RECOVERY or INSTITUTIONAL_MILESTONE and record the rationale.
2. **Evidence:** assemble source references, artefacts, implementation/test results, limitations and relevant approvals. Never invent evidence or claim tests that were not run.
3. **Register in LKR:** create a complete recovery-ledger record with a unique LKR ID, idempotency key, source reference, stable subject, status, canonical status, significance, classification, destination and provenance. Read the record back from LOCAL_SQLITE and verify its ID and key fields.
4. **Create durable Archive publication record:** create the corresponding Recovery Stream publication record using the LKR ID as its stable source identity. Preserve the classification and provenance. The LKR record remains the institutional source of truth; the publication is a derived read/circulation record.
5. **Route by classification:** RECOVERY is designated for Entity-0001 but must remain unpublished while that account is pending verification; INSTITUTIONAL_MILESTONE is authored by verified Entity-0002. The destination must be set in structured metadata and validated server-side; never rely on a manually typed display label.
6. **Publish:** publish only when the record is complete, verified, public-safe, provenance-complete and eligible under the publication policy. The public record must identify its class accurately. A milestone must never be presented as a recovery.
7. **Read back:** verify the durable publication record, author Entity ID, classification, LKR ID and publication status. If any step fails, preserve the LKR record and mark publication as pending/retryable; never claim publication succeeded.
8. **Link:** retain cross-references between LKR record, Archive/Recovery Stream publication, source artefacts and the project/repository milestone.

## 6. Publication metadata contract

Every qualifying public item must carry:

- `publicationClass`: `RECOVERY` or `INSTITUTIONAL_MILESTONE`;
- `publicationDestination`: `Entity-0001` or `Entity-0002` respectively;
- `authorId`: the same canonical Entity ID as the destination;
- `lkrRecoveryId` or the authoritative LKR recovery ID;
- `sourceReference`, `subjectType`, `subjectId`;
- `publicationState`, policy version and verification evidence.

The server must reject mismatched class/destination/author combinations. Operational, experimental, incomplete, maintenance and administrative items must not be promoted through the public recovery/milestone pathway, even if an incoming record requests public visibility.

## 7. Publication quality and safety

- Nothing is invented. Only recovered.
- Distinguish established facts, interpretation, hypotheses and unknowns.
- Include meaningful source provenance and material limitations.
- Do not expose private personal data, credentials, internal secrets, confidential partner information or unapproved evidence.
- Respect copyright, consent, safety and publication rights.
- Public release is deliberate and reversible through a recorded withdrawal/withholding decision; history is not silently erased.
- A successful LKR write is not proof of a successful Archive record or public post.

## 8. Failure handling

- LKR write fails: stop; no Archive publication and no public post.
- LKR read-back fails: stop; retain diagnostic evidence and retry safely with the same idempotency key.
- Archive publication record fails: retain LKR record; mark publication pending; retry idempotently.
- Entity-0001 or Entity-0003 is pending verification: hold publication to that account. Do not substitute Entity-0002 merely to bypass the hold. Entity-0002 may publish genuine institutional milestones only.
- Public publication fails: keep the durable records, mark retryable and report the exact stage that failed.

## 9. Canonical examples

- Recovering a historical manuscript with source evidence: RECOVERY → LKR → durable recovery publication → Entity-0001.
- Recovering a previously obscured character from documented canon: RECOVERY → LKR → durable recovery publication → Entity-0001.
- Establishing the Commons and Marketplace as two independent institutional technology systems, with verified repository and contract typechecks: record company ownership as Dark Sloth Recovery Technologies and institutional custody as The Archive; classify only the validated achievement as INSTITUTIONAL_MILESTONE → LKR → durable institutional publication → Entity-0002.
- Fixing a button, restarting a development server, updating a dependency, or debugging a local environment: MAINTENANCE_OR_ADMINISTRATION → no public post.
- An unfinished Marketplace payment integration: EXPERIMENT_OR_INCOMPLETE → no milestone publication.

## 10. Adoption

This protocol supersedes the former practice of treating LKR registration alone as the complete outcome. All future Dark Sloth work must apply this classification and publication sequence. Existing LKR records are not automatically reclassified or back-published; historical publication requires an explicit evidence and eligibility review.

## 11. Entity ownership and verification amendment — 2026-11-16

The institutional register is authoritative for participant account names and verification status. Entity-0001 is Dark Sloth Recovery Technologies (Operating Entity · Company; pending verification). Entity-0002 is The Archive (Founding Institutional Participant; Archive Verified). Entity-0003 is HELMR HUGR (Ecosystem Institution · Institutional Brand; pending verification). The company owns technologies; The Archive is the Institution and custodian. Entity account status must be checked before every public publication; pending accounts cannot receive public posts. A milestone published by The Archive does not make The Archive the technology owner.
