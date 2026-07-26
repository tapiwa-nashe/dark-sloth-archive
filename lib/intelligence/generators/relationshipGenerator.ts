import {
  getGraphQueryEngine
} from "@/lib/knowledge-graph/runtimeQuery";


export function generateRelationshipInterpretation(
  canonicalId: string
) {


  const engine =
    getGraphQueryEngine();


  const entity =
    engine.findEntity(
      canonicalId
    );


  if (!entity) {

    return null;

  }


  const connections =
    engine.findConnections(
      entity.id
    );


  return {

    type:
      "RELATIONSHIP_ANALYSIS",

    summary:
      `${entity.name} has ${connections.length} connected relationships.`

  };

}
