import { randomUUID } from "node:crypto";
export class EntityIdentityResolver {
    nextCanonicalId(identities) {
        const numbers = identities
            .map(identity => Number(identity.canonicalId
            .split("_")[1]))
            .filter(Number.isFinite);
        const next = numbers.length
            ? Math.max(...numbers) + 1
            : 1;
        return ("CONCEPT_" +
            String(next)
                .padStart(6, "0"));
    }
    resolve(entity, identities, recordId) {
        const normalized = entity.name
            .toLowerCase()
            .trim();
        const existing = identities.find(identity => identity.primaryName
            .toLowerCase()
            .trim() === normalized
            ||
                identity.aliases
                    .map(alias => alias
                    .toLowerCase()
                    .trim())
                    .includes(normalized));
        if (existing) {
            if (!existing.entityIds.includes(entity.id)) {
                existing.entityIds.push(entity.id);
            }
            existing.references.push({
                value: entity.name,
                sourceRecordId: recordId,
                createdAt: new Date()
                    .toISOString()
            });
            existing.updatedAt =
                new Date()
                    .toISOString();
            return {
                identity: existing,
                entity: {
                    ...entity,
                    canonicalId: existing.canonicalId
                },
                created: false
            };
        }
        const identity = {
            id: randomUUID(),
            canonicalId: this.nextCanonicalId(identities),
            primaryName: entity.name,
            aliases: [],
            entityIds: [
                entity.id
            ],
            references: [
                {
                    value: entity.name,
                    sourceRecordId: recordId,
                    createdAt: new Date()
                        .toISOString()
                }
            ],
            confidence: 1,
            createdAt: new Date()
                .toISOString(),
            updatedAt: new Date()
                .toISOString()
        };
        identities.push(identity);
        return {
            identity,
            entity: {
                ...entity,
                canonicalId: identity.canonicalId
            },
            created: true
        };
    }
}
