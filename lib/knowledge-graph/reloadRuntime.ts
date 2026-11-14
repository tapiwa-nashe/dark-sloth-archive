import {
  ArchivePublicationGraph
} from "./publicationGraph";


import {
  loadGraphSnapshot
} from "./store/graphStore";



export function loadStoredGraph() {


  const snapshot =
    loadGraphSnapshot();



  const graph =
    new ArchivePublicationGraph();



  for (
    const entity
    of snapshot.entities
  ) {

    graph.addEntity(
      entity
    );

  }



  for (
    const relationship
    of snapshot.relationships
  ) {

    graph.addRelationship(
      relationship
    );

  }



  return {

    graph,

    identities:
      snapshot.identities

  };

}
