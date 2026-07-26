import { randomUUID } from "node:crypto";
export class EventBus {
    handlers = new Map();
    subscribe(type, handler) {
        const existing = this.handlers.get(type)
            ?? [];
        existing.push(handler);
        this.handlers.set(type, existing);
    }
    emit(event) {
        const fullEvent = {
            id: randomUUID(),
            createdAt: new Date()
                .toISOString(),
            ...event
        };
        const listeners = this.handlers.get(event.type)
            ?? [];
        for (const listener of listeners) {
            listener(fullEvent);
        }
        return fullEvent;
    }
}
