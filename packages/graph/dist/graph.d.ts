import type { Entity, Relationship, RelationshipType } from "@dark-sloth/types";
export declare class KnowledgeGraph {
    private entities;
    private canonicalEntities;
    private relationships;
    addEntity(entity: Entity): Entity;
    addRelationship(relationship: Relationship): void;
    getEntity(id: string): Entity | undefined;
    getCanonicalEntity(canonicalId: string): Entity | undefined;
    getRelationships(entityId: string, type?: RelationshipType): Relationship[];
    getAllEntities(): Entity[];
    getAllRelationships(): Relationship[];
}
