import {
  getGraphQueryEngine
} from "@/lib/knowledge-graph/runtimeQuery";


export function generateHistoricalInterpretation(
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


  return {

    type:
      "HISTORICAL_SUMMARY",

    summary:
      `${entity.name} is recorded in the Archive as a ${entity.type} entity.`

  };

}
