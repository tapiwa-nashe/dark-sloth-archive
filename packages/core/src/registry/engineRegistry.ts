import type { Engine } from "../contracts/engine.js";

export class EngineRegistry {
  private engines = new Map<string, Engine>();

  register(engine: Engine): void {
    this.engines.set(engine.identity.id, engine);
  }

  unregister(id: string): boolean {
    return this.engines.delete(id);
  }

  get(id: string): Engine | undefined {
    return this.engines.get(id);
  }

  getAll(): Engine[] {
    return Array.from(this.engines.values());
  }

  findByCapability(capabilityId: string): Engine[] {
    return this.getAll().filter(engine =>
      engine.capabilities.some(capability =>
        capability.id === capabilityId
      )
    );
  }

  hasEngine(id: string): boolean {
    return this.engines.has(id);
  }

  count(): number {
    return this.engines.size;
  }

  clear(): void {
    this.engines.clear();
  }
}
