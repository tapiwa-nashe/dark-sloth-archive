import type { Engine } from "../contracts/engine.js";
import type { EngineCapability } from "../contracts/capability.js";

export class CapabilityRegistry {
  private capabilities = new Map<string, EngineCapability>();

  registerEngine(engine: Engine): void {
    for (const capability of engine.capabilities) {
      this.capabilities.set(capability.id, capability);
    }
  }

  unregisterEngine(engine: Engine): void {
    for (const capability of engine.capabilities) {
      this.capabilities.delete(capability.id);
    }
  }

  get(id: string): EngineCapability | undefined {
    return this.capabilities.get(id);
  }

  getAll(): EngineCapability[] {
    return Array.from(this.capabilities.values());
  }

  hasCapability(id: string): boolean {
    return this.capabilities.has(id);
  }

  count(): number {
    return this.capabilities.size;
  }

  clear(): void {
    this.capabilities.clear();
  }
}
