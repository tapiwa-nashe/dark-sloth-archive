import type {
  Engine,
  EngineRegistry,
  CapabilityRegistry
} from "@dark-sloth/core";

import type { RuntimeContext } from "./context.js";
import { createRuntimeState, type RuntimeState } from "./state.js";
import { RuntimeEventBus } from "./events.js";

export class ArchiveKernel {
  readonly engines: EngineRegistry;
  readonly capabilities: CapabilityRegistry;
  readonly events: RuntimeEventBus;

  private state: RuntimeState = createRuntimeState();
  private context?: RuntimeContext;

  constructor(
    engines: EngineRegistry,
    capabilities: CapabilityRegistry,
    events: RuntimeEventBus = new RuntimeEventBus()
  ) {
    this.engines = engines;
    this.capabilities = capabilities;
    this.events = events;
  }

  registerEngine(engine: Engine): void {
    this.engines.register(engine);
    this.capabilities.registerEngine(engine);

    this.events.emit({
      type: "engine.registered",
      timestamp: new Date(),
      payload: {
        id: engine.identity.id,
        name: engine.identity.name,
        version: engine.identity.version
      }
    });
  }

  unregisterEngine(id: string): boolean {
    const engine = this.engines.get(id);

    if (!engine) {
      return false;
    }

    this.engines.unregister(id);
    this.capabilities.unregisterEngine(engine);

    this.events.emit({
      type: "engine.unregistered",
      timestamp: new Date(),
      payload: {
        id: engine.identity.id,
        name: engine.identity.name,
        version: engine.identity.version
      }
    });

    return true;
  }

  start(context: RuntimeContext): void {
    if (this.state.started) {
      return;
    }

    this.context = context;

    this.state = {
      started: true,
      startedAt: new Date()
    };

    this.events.emit({
      type: "runtime.started",
      timestamp: new Date()
    });
  }

  stop(): void {
    if (!this.state.started) {
      return;
    }

    this.state = {
      ...this.state,
      started: false,
      stoppedAt: new Date()
    };

    this.events.emit({
      type: "runtime.stopped",
      timestamp: new Date()
    });

    this.context = undefined;
  }

  getContext(): RuntimeContext | undefined {
    return this.context;
  }

  getState(): RuntimeState {
    return { ...this.state };
  }

  isRunning(): boolean {
    return this.state.started;
  }
}
