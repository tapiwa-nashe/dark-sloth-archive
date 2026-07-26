import { v4 as uuid } from "uuid";
export function createRelationship(from, to, type, confidence = 1, evidence = []) {
    return {
        id: uuid(),
        from,
        to,
        type,
        confidence,
        evidence,
        createdAt: new Date(),
    };
}
