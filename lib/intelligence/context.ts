import fs from "node:fs";
import path from "node:path";


const dataRoot =
  path.join(
    process.cwd(),
    "data",
    "knowledge-graph"
  );


export function getKnowledgeContext(
  canonicalId:string
) {


  const entities =
    JSON.parse(
      fs.readFileSync(
        path.join(
          dataRoot,
          "entities.json"
        ),
        "utf8"
      )
    );


  const relationships =
    JSON.parse(
      fs.readFileSync(
        path.join(
          dataRoot,
          "relationships.json"
        ),
        "utf8"
      )
    );



  const entity =
    entities.find(
      (item:any) =>
        item.canonicalId === canonicalId
    );


  if (!entity) {

    return null;

  }



  const connections =
    relationships.filter(
      (relationship:any) =>
        relationship.from === entity.id ||
        relationship.to === entity.id
    );



  return {

    entity,

    connections,

    summary:
      `${entity.name} is a ${entity.type} entity with ${connections.length} connected relationships.`

  };

}
