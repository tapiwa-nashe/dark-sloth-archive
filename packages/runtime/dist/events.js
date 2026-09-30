export class RuntimeEventBus {
    constructor() {
        this.handlers = new Map();
    }
    on(type, handler) {
        const handlers = this.handlers.get(type) ?? new Set();
        handlers.add(handler);
        this.handlers.set(type, handlers);
        return () => {
            handlers.delete(handler);
            if (handlers.size === 0) {
                this.handlers.delete(type);
            }
        };
    }
    emit(event) {
        const handlers = this.handlers.get(event.type);
        if (!handlers) {
            return;
        }
        for (const handler of handlers) {
            handler(event);
        }
    }
    clear() {
        this.handlers.clear();
    }
}
