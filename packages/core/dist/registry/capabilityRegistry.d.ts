import type { Engine } from "../contracts/engine.js";
import type { EngineCapability } from "../contracts/capability.js";
export declare class CapabilityRegistry {
    private capabilities;
    registerEngine(engine: Engine): void;
    unregisterEngine(engine: Engine): void;
    get(id: string): EngineCapability | undefined;
    getAll(): EngineCapability[];
    hasCapability(id: string): boolean;
    count(): number;
    clear(): void;
}
//# sourceMappingURL=capabilityRegistry.d.ts.map