import type { Engine, EngineRegistry, CapabilityRegistry } from "@dark-sloth/core";
import type { RuntimeContext } from "./context.js";
import { type RuntimeState } from "./state.js";
import { RuntimeEventBus } from "./events.js";
export declare class ArchiveKernel {
    readonly engines: EngineRegistry;
    readonly capabilities: CapabilityRegistry;
    readonly events: RuntimeEventBus;
    private state;
    private context?;
    constructor(engines: EngineRegistry, capabilities: CapabilityRegistry, events?: RuntimeEventBus);
    registerEngine(engine: Engine): void;
    unregisterEngine(id: string): boolean;
    start(context: RuntimeContext): void;
    stop(): void;
    getContext(): RuntimeContext | undefined;
    getState(): RuntimeState;
    isRunning(): boolean;
}
