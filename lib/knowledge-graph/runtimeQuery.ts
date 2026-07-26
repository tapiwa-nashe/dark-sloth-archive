import fs from "node:fs";
import path from "node:path";

import {
  KnowledgeGraphQueryEngine
} from "./queryEngine";


const root =
  path.join(
    process.cwd(),
    "data/knowledge-graph"
  );


export function getGraphQueryEngine() {


  const entities =
    JSON.parse(
      fs.readFileSync(
        path.join(
          root,
          "entities.json"
        ),
        "utf8"
      )
    );


  const relationships =
    JSON.parse(
      fs.readFileSync(
        path.join(
          root,
          "relationships.json"
        ),
        "utf8"
      )
    );


  return new KnowledgeGraphQueryEngine({

    entities,

    relationships

  });

}
