export interface EngineEvent<T = unknown> {
    id: string;
    type: string;
    source: string;
    payload: T;
    createdAt: string;
}
//# sourceMappingURL=event.d.ts.map