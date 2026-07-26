import { v4 as uuid } from "uuid";
import type { Evidence } from "./evidence.js";

export type RelationshipType =
  | "FOUNDED"
  | "CREATED"
  | "AUTHORED"
  | "LOCATED_IN"
  | "MENTIONS"
  | "REFERENCES"
  | "RELATED_TO";

export interface Relationship {
  id: string;
  from: string;
  to: string;
  type: RelationshipType;
  confidence: number;
  evidence?: Evidence[];
  createdAt: Date;
}

export function createRelationship(
  from: string,
  to: string,
  type: RelationshipType,
  confidence = 1,
  evidence: Evidence[] = []
): Relationship {
  return {
    id: uuid(),
    from,
    to,
    type,
    confidence,
    evidence,
    createdAt: new Date(),
  };
}
