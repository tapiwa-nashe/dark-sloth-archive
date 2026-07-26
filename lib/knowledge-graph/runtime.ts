import {
  KnowledgeGraph
} from "@dark-sloth/graph";


import {
  buildIdentityGraph
} from "./identityGraphBuilder";


import {
  saveGraphSnapshot
} from "./store/graphStore";


import fs from "node:fs";


export function loadPublicationGraph(
  manifestPath:string
) {


  const manifest =
    JSON.parse(
      fs.readFileSync(
        manifestPath,
        "utf8"
      )
    );


  const identityGraph =
    buildIdentityGraph(
      manifest
    );


  const graph =
    new KnowledgeGraph();



  for (
    const entity
    of identityGraph.entities
  ) {

    graph.addEntity(
      entity
    );

  }



  for (
    const relationship
    of identityGraph.relationships
  ) {

    graph.addRelationship(
      relationship
    );

  }



  saveGraphSnapshot({

    entities:
      identityGraph.entities,

    relationships:
      identityGraph.relationships,

    identities:
      identityGraph.identities

  });



  return {

    graph,

    identities:
      identityGraph.identities

  };

}
