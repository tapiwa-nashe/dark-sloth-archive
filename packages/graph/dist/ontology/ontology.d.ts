import { Entity, RelationshipType } from "@dark-sloth/core";
export declare class OntologyRules {
    private rules;
    validate(relationshipType: RelationshipType, from: Entity, to: Entity): boolean;
}
