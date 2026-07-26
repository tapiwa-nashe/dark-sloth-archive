import { v4 as uuid } from "uuid";

export type EvidenceType =
  | "DOCUMENT"
  | "USER"
  | "AI_EXTRACTION"
  | "IMPORT";

export interface Evidence {
  id: string;
  type: EvidenceType;
  source: string;
  confidence: number;
  createdAt: Date;
}

export function createEvidence(
  type: EvidenceType,
  source: string,
  confidence: number
): Evidence {
  return {
    id: uuid(),
    type,
    source,
    confidence,
    createdAt: new Date(),
  };
}
