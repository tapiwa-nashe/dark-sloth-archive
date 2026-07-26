import type { Engine } from "../contracts/engine.js";
import type { EngineCapability } from "../contracts/capability.js";
export declare class CapabilityRegistry {
    private capabilities;
    registerEngine(engine: Engine): void;
    get(id: string): EngineCapability | undefined;
    getAll(): EngineCapability[];
    count(): number;
}
//# sourceMappingURL=capabilityRegistry.d.ts.map