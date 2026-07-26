export class CapabilityRegistry {
    capabilities = new Map();
    registerEngine(engine) {
        for (const capability of engine.capabilities) {
            this.capabilities.set(capability.id, capability);
        }
    }
    get(id) {
        return this.capabilities.get(id);
    }
    getAll() {
        return Array.from(this.capabilities.values());
    }
    count() {
        return this.capabilities.size;
    }
}
