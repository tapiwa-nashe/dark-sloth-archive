import type {
  Engine
} from "../contracts/engine.js";


export class EngineRegistry {


  private engines =
    new Map<string, Engine>();


  register(
    engine: Engine
  ) {

    this.engines.set(
      engine.identity.id,
      engine
    );

  }



  get(
    id: string
  ) {

    return this.engines.get(
      id
    );

  }



  getAll() {

    return Array.from(
      this.engines.values()
    );

  }



  findByCapability(
    capabilityId: string
  ) {

    return this.getAll()
      .filter(
        engine =>
          engine.capabilities.some(
            capability =>
              capability.id === capabilityId
          )
      );

  }



  hasEngine(
    id: string
  ) {

    return this.engines.has(
      id
    );

  }



  count() {

    return this.engines.size;

  }


}
