export interface RuntimeEvent {
  type: string;
  timestamp: Date;
  payload?: unknown;
}

export type RuntimeEventHandler = (event: RuntimeEvent) => void;

export class RuntimeEventBus {
  private readonly handlers = new Map<string, Set<RuntimeEventHandler>>();

  on(type: string, handler: RuntimeEventHandler): () => void {
    const handlers = this.handlers.get(type) ?? new Set<RuntimeEventHandler>();
    handlers.add(handler);
    this.handlers.set(type, handlers);

    return () => {
      handlers.delete(handler);
      if (handlers.size === 0) {
        this.handlers.delete(type);
      }
    };
  }

  emit(event: RuntimeEvent): void {
    const handlers = this.handlers.get(event.type);
    if (!handlers) {
      return;
    }

    for (const handler of handlers) {
      handler(event);
    }
  }

  clear(): void {
    this.handlers.clear();
  }
}
