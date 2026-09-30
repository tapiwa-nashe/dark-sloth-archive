export interface RuntimeEvent {
    type: string;
    timestamp: Date;
    payload?: unknown;
}
export type RuntimeEventHandler = (event: RuntimeEvent) => void;
export declare class RuntimeEventBus {
    private readonly handlers;
    on(type: string, handler: RuntimeEventHandler): () => void;
    emit(event: RuntimeEvent): void;
    clear(): void;
}
