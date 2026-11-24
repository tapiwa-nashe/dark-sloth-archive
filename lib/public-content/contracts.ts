export const PUBLIC_CONTENT_TYPES = [
  "RECORD", "BOOK", "COLLECTION", "ENTITY", "RECOVERY", "STUDIO", "CONTRIBUTOR",
] as const;
export type PublicContentType = (typeof PUBLIC_CONTENT_TYPES)[number];

export const PUBLICATION_STATUSES = [
  "DRAFT", "IN_REVIEW", "APPROVED", "PUBLISHED", "WITHDRAWN",
] as const;
export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number];

export const PUBLIC_VISIBILITIES = [
  "PRIVATE", "INTERNAL", "UNLISTED", "PUBLIC",
] as const;
export type PublicVisibility = (typeof PUBLIC_VISIBILITIES)[number];

export interface PublicProvenance {
  sourceSystem: string;
  sourceReference: string;
  sourceRevision?: string;
  registrationReference?: string;
}

export interface PublicRelationship {
  canonicalId: string;
  contentType: PublicContentType;
  relationshipType: string;
}

export interface PublicContentEnvelope {
  canonicalId: string;
  contentType: PublicContentType;
  title: string;
  slug: string;
  summary?: string;
  publicationStatus: PublicationStatus;
  visibility: PublicVisibility;
  approvedAt: string | null;
  publishedAt: string | null;
  withdrawnAt: string | null;
  provenance: PublicProvenance;
  relationships: PublicRelationship[];
  updatedAt: string;
}

export interface PublicRecord extends PublicContentEnvelope {
  contentType: "RECORD";
  recordType: string;
  collectionIds: string[];
  body: string;
  authors: string[];
}

export interface PublicBook extends PublicContentEnvelope {
  contentType: "BOOK";
  workId: string;
  editionId: string;
  authorDisplay: string[];
  editionLabel: string;
  coverAsset?: string;
  language: string;
  readingUrl?: string;
  format: string[];
  releaseDate?: string;
}

export interface PublicEditionReveal {
  publicationId: string;
  title: string;
  publicationStatus: "PUBLISHED";
  visibility: "PUBLIC";
}

export interface PublicCollection extends PublicContentEnvelope {
  contentType: "COLLECTION";
  description: string;
  coverAsset?: string;
  orderedItemIds: string[];
  curatorDisplay?: string;
}

export interface PublicEntity extends PublicContentEnvelope {
  contentType: "ENTITY";
  entityType: "RECOVERED_CHARACTER" | "CANONICAL_ENTITY" | "PUBLIC_CONTRIBUTOR";
  aliases: string[];
  biography: string;
  canonReferences: string[];
  imageAsset?: string;
}

export interface PublicRecovery extends PublicContentEnvelope {
  contentType: "RECOVERY";
  recoveryType: string;
  narrative: string;
  sourceReferences: string[];
  verificationSummary?: string;
}

export interface PublicParticipationSummary {
  targetCanonicalId: string;
  witnessCount: number;
  approvedAnnotationExcerpts: Array<{
    excerptId: string;
    text: string;
    publicAuthorLabel?: string;
  }>;
  approvedEndorsementSummary?: string;
  asOf: string;
}
