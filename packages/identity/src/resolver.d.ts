import type { Entity, Identity } from "@dark-sloth/core";
export interface IdentityMatch {
    matched: boolean;
    entity?: Entity;
    confidence: number;
}
export interface IdentityResolution {
    identity: Identity;
    entity: Entity;
    created: boolean;
}
export declare class EntityIdentityResolver {
    findMatch(incoming: Entity, existing: Entity[]): IdentityMatch;
    private nextCanonicalId;
    resolve(entity: Entity, identities: Identity[], recordId: string): IdentityResolution;
}
