import type { Entity } from "./entity.js";
import type { Relationship } from "./relationship.js";
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
    source: {
        id: string;
        title: string;
        origin: string;
        createdAt: string;
    };
    content: string;
    claims: ArchiveClaim[];
    entities: Entity[];
    relationships: Relationship[];
    createdAt: string;
}
//# sourceMappingURL=archive.d.ts.map