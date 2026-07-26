import { randomUUID } from "node:crypto";
function normalize(value) {
    return value
        .toLowerCase()
        .trim();
}
export class EntityIdentityResolver {
    findMatch(incoming, existing) {
        const target = normalize(incoming.name);
        const match = existing.find(entity => {
            if (normalize(entity.name) === target) {
                return true;
            }
            return entity.aliases
                .some(alias => normalize(alias) === target);
        });
        if (!match) {
            return {
                matched: false,
                confidence: 0
            };
        }
        return {
            matched: true,
            entity: match,
            confidence: 1
        };
    }
    nextCanonicalId(identities) {
        const numbers = identities
            .map(identity => Number(identity.canonicalId
            .replace("CONCEPT_", "")))
            .filter(Number.isFinite);
        const next = numbers.length
            ? Math.max(...numbers) + 1
            : 1;
        return (`CONCEPT_${String(next)
            .padStart(6, "0")}`);
    }
    resolve(entity, identities, recordId) {
        const target = normalize(entity.name);
        const existing = identities.find(identity => {
            if (normalize(identity.primaryName) === target) {
                return true;
            }
            return identity.aliases
                .some(alias => normalize(alias) === target);
        });
        if (existing) {
            if (!existing.entityIds.includes(entity.id)) {
                existing.entityIds.push(entity.id);
            }
            existing.references.push({
                value: entity.name,
                sourceRecordId: recordId,
                createdAt: new Date().toISOString()
            });
            if (normalize(existing.primaryName)
                !==
                    target) {
                if (!existing.aliases.includes(entity.name)) {
                    existing.aliases.push(entity.name);
                }
            }
            existing.updatedAt =
                new Date().toISOString();
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
                    createdAt: new Date().toISOString()
                }
            ],
            confidence: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
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
