import {
  getGraphQueryEngine
} from "@/lib/knowledge-graph/runtimeQuery";


export interface IntelligenceContext {

  entity: any;

  identity?: any;

  connections: any[];

  summary: string;

}



export function reconstructContext(
  canonicalId: string
): IntelligenceContext | null {


  const engine =
    getGraphQueryEngine();


  const trace =
    engine.traceIdentity(
      canonicalId
    );


  if (!trace.entity) {

    return null;

  }



  const entity =
    trace.entity;



  const connections =
    trace.relationships;



  const identity =
    engine.findEntity(
      canonicalId
    );



  const summary =
    buildSummary(
      entity,
      connections
    );



  return {

    entity,

    identity,

    connections,

    summary

  };

}



function buildSummary(
  entity: any,
  connections: any[]
): string {


  const references =
    connections.filter(
      connection =>
        connection.type === "REFERENCES"
    );


  const created =
    connections.find(
      connection =>
        connection.type === "CREATED"
    );



  let summary =
    `${entity.name} is a ${entity.type} entity.`;



  if (created) {

    summary +=
      ` It was created through a connected system.`;

  }



  if (references.length) {

    summary +=
      ` It references ${references.length} connected recovery records.`;

  }



  return summary;

}
