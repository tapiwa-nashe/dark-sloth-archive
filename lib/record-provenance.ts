import { records } from "./records";
import { getRecordContent } from "./archive";

export type RecordVerificationStatus =
  | "NOT_ASSESSED"
  | "EVIDENCE_REVIEW_REQUIRED"
  | "VERIFIED";

export type RecordProvenanceStatus =
  | "INCOMPLETE"
  | "READY_FOR_REVIEW"
  | "COMPLETE";

export interface RecordProvenance {
  canonicalId: string;
  title: string;
  classification: string;
  collection: string;
  catalogueStatus: string;
  catalogueSourceLabel: string | null;
  sourceFile: string;
  sourceDocumentIdentifier: string | null;
  sourceMetadataFields: string[];
  sourceSystem: string | null;
  sourceReference: string | null;
  sourceRevision: string | null;
  lkrRegistrationId: string | null;
  verificationStatus: RecordVerificationStatus;
  verificationEvidence: string[];
  provenanceStatus: RecordProvenanceStatus;
  missingRequirements: string[];
}

function nonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : null;
}

export function getRecordProvenance(id: string): RecordProvenance | null {
  const record = records.find((item) => item.id === id);
  if (!record) return null;

  const { data } = getRecordContent(id);
  const sourceFile =
    Number(id) >= 11 ? `content/records/rec-${id}.md` : `content/records/${id}.md`;
  const sourceDocumentIdentifier = nonEmptyString(data.id);
  const sourceMetadataFields = Object.keys(data);
  const missingRequirements = [
    "Registered source system and source reference",
    "Source revision, edition, or immutable source locator",
    "Record-specific LKR registration ID",
    "Inspectable verification evidence and reviewer decision",
  ];

  return {
    canonicalId: `REC-${record.id}`,
    title: record.title,
    classification: record.classification,
    collection: record.collection,
    catalogueStatus: record.status,
    catalogueSourceLabel:
      record.recovered !== "UNKNOWN" ? record.recovered : null,
    sourceFile,
    sourceDocumentIdentifier,
    sourceMetadataFields,
    sourceSystem: null,
    sourceReference: null,
    sourceRevision: null,
    lkrRegistrationId: null,
    verificationStatus: "NOT_ASSESSED",
    verificationEvidence: [],
    provenanceStatus: "INCOMPLETE",
    missingRequirements,
  };
}

export function getRecordProvenanceRegistry(): RecordProvenance[] {
  return records
    .map((record) => getRecordProvenance(record.id))
    .filter((entry): entry is RecordProvenance => entry !== null);
}
