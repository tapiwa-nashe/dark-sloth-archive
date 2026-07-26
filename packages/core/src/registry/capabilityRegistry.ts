import type {
  Engine,
} from "../contracts/engine.js";

import type {
  EngineCapability,
} from "../contracts/capability.js";


export class CapabilityRegistry {


  private capabilities =
    new Map<string, EngineCapability>();



  registerEngine(
    engine: Engine
  ) {


    for (
      const capability of engine.capabilities
    ) {

      this.capabilities.set(
        capability.id,
        capability
      );

    }

  }



  get(
    id: string
  ) {

    return this.capabilities.get(
      id
    );

  }



  getAll() {

    return Array.from(
      this.capabilities.values()
    );

  }



  count() {

    return this.capabilities.size;

  }


}
