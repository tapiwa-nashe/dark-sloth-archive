import type { Entity, Identity } from "@dark-sloth/types";
export interface IdentityResolution {
    identity: Identity;
    entity: Entity;
    created: boolean;
}
export declare class EntityIdentityResolver {
    private nextCanonicalId;
    resolve(entity: Entity, identities: Identity[], recordId: string): IdentityResolution;
}
