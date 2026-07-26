import { v4 as uuid } from "uuid";
export function createEntity(type, name, aliases = [], description) {
    return {
        id: uuid(),
        canonicalId: "",
        type,
        name,
        aliases,
        description,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
