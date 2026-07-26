import type { EngineEvent } from "../contracts/event.js";
type EventHandler = (event: EngineEvent) => void;
export declare class EventBus {
    private handlers;
    subscribe(type: string, handler: EventHandler): void;
    emit<T>(event: Omit<EngineEvent<T>, "id" | "createdAt">): EngineEvent<T>;
}
export {};
//# sourceMappingURL=eventBus.d.ts.map