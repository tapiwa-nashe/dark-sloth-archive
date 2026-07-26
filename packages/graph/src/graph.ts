import type {
  Entity,
  Relationship,
  RelationshipType,
} from "@dark-sloth/types";


export class KnowledgeGraph {


  private entities =
    new Map<string, Entity>();


  private canonicalEntities =
    new Map<string, Entity>();


  private relationships =
    new Map<string, Relationship>();



  addEntity(
    entity: Entity
  ): Entity {


    const existing =
      this.canonicalEntities.get(
        entity.canonicalId
      );


    if (
      existing &&
      entity.canonicalId
    ) {

      return existing;

    }


    this.entities.set(
      entity.id,
      entity
    );


    if (
      entity.canonicalId
    ) {

      this.canonicalEntities.set(
        entity.canonicalId,
        entity
      );

    }


    return entity;

  }




  addRelationship(
    relationship: Relationship
  ): void {


    const from =
      this.entities.get(
        relationship.from
      );


    const to =
      this.entities.get(
        relationship.to
      );


    if (
      !from ||
      !to
    ) {

      throw new Error(
        "Entities must exist before relationship creation."
      );

    }


    this.relationships.set(
      relationship.id,
      relationship
    );

  }




  getEntity(
    id:string
  ) {

    return this.entities.get(
      id
    );

  }




  getCanonicalEntity(
    canonicalId:string
  ) {

    return this.canonicalEntities.get(
      canonicalId
    );

  }




  getRelationships(
    entityId:string,
    type?:RelationshipType
  ) {

    return Array.from(
      this.relationships.values()
    )
    .filter(
      relationship =>
        (
          relationship.from === entityId ||
          relationship.to === entityId
        )
        &&
        (
          !type ||
          relationship.type === type
        )
    );

  }




  getAllEntities() {

    return Array.from(
      this.canonicalEntities.values()
    );

  }




  getAllRelationships() {

    return Array.from(
      this.relationships.values()
    );

  }


}
