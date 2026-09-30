export interface RuntimeState {
    started: boolean;
    startedAt?: Date;
    stoppedAt?: Date;
}
export declare function createRuntimeState(): RuntimeState;
