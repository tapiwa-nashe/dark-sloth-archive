export interface RuntimeState {
  started: boolean;
  startedAt?: Date;
  stoppedAt?: Date;
}

export function createRuntimeState(): RuntimeState {
  return {
    started: false
  };
}
