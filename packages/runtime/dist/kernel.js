import { createRuntimeState } from "./state.js";
import { RuntimeEventBus } from "./events.js";
export class ArchiveKernel {
    constructor(engines, capabilities, events = new RuntimeEventBus()) {
        this.state = createRuntimeState();
        this.engines = engines;
        this.capabilities = capabilities;
        this.events = events;
    }
    registerEngine(engine) {
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
    unregisterEngine(id) {
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
    start(context) {
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
    stop() {
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
    getContext() {
        return this.context;
    }
    getState() {
        return { ...this.state };
    }
    isRunning() {
        return this.state.started;
    }
}
