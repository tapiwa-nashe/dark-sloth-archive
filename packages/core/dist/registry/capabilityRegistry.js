export class CapabilityRegistry {
    capabilities = new Map();
    registerEngine(engine) {
        for (const capability of engine.capabilities) {
            this.capabilities.set(capability.id, capability);
        }
    }
    unregisterEngine(engine) {
        for (const capability of engine.capabilities) {
            this.capabilities.delete(capability.id);
        }
    }
    get(id) {
        return this.capabilities.get(id);
    }
    getAll() {
        return Array.from(this.capabilities.values());
    }
    hasCapability(id) {
        return this.capabilities.has(id);
    }
    count() {
        return this.capabilities.size;
    }
    clear() {
        this.capabilities.clear();
    }
}
