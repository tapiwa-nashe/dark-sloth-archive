export class EngineRegistry {
    engines = new Map();
    register(engine) {
        this.engines.set(engine.identity.id, engine);
    }
    get(id) {
        return this.engines.get(id);
    }
    getAll() {
        return Array.from(this.engines.values());
    }
    findByCapability(capabilityId) {
        return this.getAll()
            .filter(engine => engine.capabilities.some(capability => capability.id === capabilityId));
    }
    hasEngine(id) {
        return this.engines.has(id);
    }
    count() {
        return this.engines.size;
    }
}
