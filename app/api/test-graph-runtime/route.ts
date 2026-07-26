import {
  loadPublicationGraph
} from "@/lib/knowledge-graph/runtime";


export async function GET() {

  const {
    graph,
    identities
  } =
    loadPublicationGraph(
      "output/ARCHIVE PHILOSOPHY/manifest.json"
    );


  const book =
    Array.from(
      graph.getAllEntities()
    )
    .find(
      entity =>
        entity.name === "ARCHIVE PHILOSOPHY"
    );


  return Response.json({

    entity:
      book,

    connections:
      book
        ? graph.getRelationships(
            book.id
          )
        : [],

    identities

  });

}
