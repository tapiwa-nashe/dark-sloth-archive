export class KnowledgeGraph {
    entities = new Map();
    canonicalEntities = new Map();
    relationships = new Map();
    addEntity(entity) {
        const existing = this.canonicalEntities.get(entity.canonicalId);
        if (existing &&
            entity.canonicalId) {
            return existing;
        }
        this.entities.set(entity.id, entity);
        if (entity.canonicalId) {
            this.canonicalEntities.set(entity.canonicalId, entity);
        }
        return entity;
    }
    addRelationship(relationship) {
        const from = this.entities.get(relationship.from);
        const to = this.entities.get(relationship.to);
        if (!from ||
            !to) {
            throw new Error("Entities must exist before relationship creation.");
        }
        this.relationships.set(relationship.id, relationship);
    }
    getEntity(id) {
        return this.entities.get(id);
    }
    getCanonicalEntity(canonicalId) {
        return this.canonicalEntities.get(canonicalId);
    }
    getRelationships(entityId, type) {
        return Array.from(this.relationships.values())
            .filter(relationship => (relationship.from === entityId ||
            relationship.to === entityId)
            &&
                (!type ||
                    relationship.type === type));
    }
    getAllEntities() {
        return Array.from(this.canonicalEntities.values());
    }
    getAllRelationships() {
        return Array.from(this.relationships.values());
    }
}
