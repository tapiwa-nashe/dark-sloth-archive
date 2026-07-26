import type {
  Entity,
  Relationship
} from "@dark-sloth/types";


export interface KnowledgeGraphMemory {

  entities: Entity[];

  relationships: Relationship[];

}



export class KnowledgeGraphQueryEngine {


  constructor(
    private memory: KnowledgeGraphMemory
  ) {}



  findEntity(
    id: string
  ): Entity | undefined {

    return this.memory.entities.find(
      entity =>
        entity.id === id ||
        entity.canonicalId === id
    );

  }




  findByType(
    type: Entity["type"]
  ): Entity[] {

    return this.memory.entities.filter(
      entity =>
        entity.type === type
    );

  }




  findConnections(
    entityId: string
  ): Relationship[] {

    return this.memory.relationships.filter(
      relationship =>
        relationship.from === entityId ||
        relationship.to === entityId
    );

  }




  findReferences(
    entityId: string
  ): Relationship[] {

    return this.memory.relationships.filter(
      relationship =>
        relationship.from === entityId &&
        relationship.type === "REFERENCES"
    );

  }




  traceIdentity(
    canonicalId: string
  ) {

    const entity =
      this.findEntity(
        canonicalId
      );


    if (!entity) {

      return {

        entity: null,

        relationships: []

      };

    }


    return {

      entity,

      relationships:
        this.findConnections(
          entity.id
        )

    };

  }


}
