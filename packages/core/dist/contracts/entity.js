import { v4 as uuid } from "uuid";
import { generateCanonicalId } from "../ids/idGenerator.js";
export function createEntity(type, name, aliases = [], description) {
    return {
        id: uuid(),
        canonicalId: generateCanonicalId(type),
        type,
        name,
        aliases,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
}
