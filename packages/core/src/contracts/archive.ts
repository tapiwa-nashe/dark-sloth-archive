import type { Entity } from "./entity.js";
import type { Relationship } from "./relationship.js";

export interface ArchiveSource {
  id: string;
  title: string;
  origin: string;
  createdAt: string;
}

export interface ArchiveEvidence {
  id: string;
  text: string;
  sourceId: string;
  createdAt: string;
}

export interface ArchiveClaim {
  id: string;
  statement: string;
  confidence: number;
  evidenceIds: string[];
  entityIds: string[];
  relationshipIds: string[];
  createdAt: string;
}

export interface ArchiveRecord {
  id: string;
  title: string;
  source: ArchiveSource;
  content: string;

  claims: ArchiveClaim[];

  entities: Entity[];

  relationships: Relationship[];

  createdAt: string;
}
