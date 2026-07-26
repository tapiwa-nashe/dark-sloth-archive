import {
  randomUUID
} from "node:crypto";

import type {
  EngineEvent
} from "../contracts/event.js";


type EventHandler =
  (
    event: EngineEvent
  ) => void;


export class EventBus {


  private handlers =
    new Map<
      string,
      EventHandler[]
    >();



  subscribe(
    type: string,
    handler: EventHandler
  ) {


    const existing =
      this.handlers.get(type)
      ?? [];


    existing.push(
      handler
    );


    this.handlers.set(
      type,
      existing
    );

  }



  emit<T>(
    event: Omit<
      EngineEvent<T>,
      "id" | "createdAt"
    >
  ) {


    const fullEvent: EngineEvent<T> =
    {

      id:
        randomUUID(),

      createdAt:
        new Date()
          .toISOString(),

      ...event

    };


    const listeners =
      this.handlers.get(
        event.type
      )
      ?? [];


    for (
      const listener of listeners
    ) {

      listener(
        fullEvent
      );

    }


    return fullEvent;

  }

}
