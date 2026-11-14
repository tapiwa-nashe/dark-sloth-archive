import type {
  Entity,
  Relationship,
  Engine
} from "@dark-sloth/core";


export interface KnowledgeGraphMemory {

  entities: Entity[];

  relationships: Relationship[];

}



export class KnowledgeGraphQueryEngine implements Engine {


  readonly identity = {
    id: "knowledge-graph.query",
    name: "Knowledge Graph Query Engine",
    version: "1.0.0"
  };

  readonly capabilities = [
    {
      id: "knowledge-graph.query",
      name: "Knowledge Graph Query",
      description:
        "Query entities, relationships, references, and identity traces from the Archive knowledge graph."
    }
  ];

  constructor(
    private memory: KnowledgeGraphMemory
  ) {}

  health() {
    return {
      healthy: true,
      message: `Knowledge graph available: ${this.memory.entities.length} entities, ${this.memory.relationships.length} relationships.`
    };
  }



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
