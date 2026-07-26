import {
  EntityIdentityResolver,
  type IdentityResolution
} from "@/lib/knowledge-graph/identityResolver";

import {
  publicationManifestToGraph,
  type PublicationManifest
} from "./publicationGraphAdapter";

import type {
  Entity,
  Identity
} from "@dark-sloth/types";


export interface IdentityGraphResult {

  entities: Entity[];

  identities: Identity[];

  relationships: any[];

}



const resolver =
  new EntityIdentityResolver();



export function buildIdentityGraph(
  manifest: PublicationManifest,
  identities: Identity[] = []
): IdentityGraphResult {


  const graph =
    publicationManifestToGraph(
      manifest
    );


  const resolvedEntities =
    graph.entities.map(
      entity => {

        const resolution =
          resolver.resolve(
            entity,
            identities,
            manifest.id
          );


        return resolution.entity;

      }
    );


  return {

    entities:
      resolvedEntities,

    identities,

    relationships:
      graph.relationships

  };

}
