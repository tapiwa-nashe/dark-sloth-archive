import type { Engine } from "../contracts/engine.js";
export declare class EngineRegistry {
    private engines;
    register(engine: Engine): void;
    unregister(id: string): boolean;
    get(id: string): Engine | undefined;
    getAll(): Engine[];
    findByCapability(capabilityId: string): Engine[];
    hasEngine(id: string): boolean;
    count(): number;
    clear(): void;
}
//# sourceMappingURL=engineRegistry.d.ts.map