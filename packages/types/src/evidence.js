import { v4 as uuid } from "uuid";
export function createEvidence(type, source, confidence) {
    return {
        id: uuid(),
        type,
        source,
        confidence,
        createdAt: new Date(),
    };
}
