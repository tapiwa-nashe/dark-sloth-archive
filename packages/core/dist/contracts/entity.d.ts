export type EntityType = "PERSON" | "ORGANIZATION" | "PROJECT" | "DOCUMENT" | "CONCEPT" | "PLACE" | "EVENT" | "ARTIFACT" | "BOOK" | "COLLECTION" | "NODE" | "RECOVERY";
export interface Entity {
    id: string;
    canonicalId: string;
    type: EntityType;
    name: string;
    aliases: string[];
    description?: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare function createEntity(type: EntityType, name: string, aliases?: string[], description?: string): Entity;
//# sourceMappingURL=entity.d.ts.map