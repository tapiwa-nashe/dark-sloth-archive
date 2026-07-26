import {
  loadStoredGraph
} from "@/lib/knowledge-graph/reloadRuntime";


export async function GET() {


  const {

    graph,

    identities

  } =
    loadStoredGraph();



  const entity =
    Array.from(
      graph.getAllEntities()
    )
    .find(
      item =>
        item.name === "ARCHIVE PHILOSOPHY"
    );



  return Response.json({

    restored:
      !!entity,


    entity,


    connections:
      entity
        ? graph.getRelationships(
            entity.id
          )
        : [],


    identities

  });

}
