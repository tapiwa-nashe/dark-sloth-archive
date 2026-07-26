import fs from "node:fs";

import {
  publicationManifestToGraph
} from "../lib/knowledge-graph/publicationGraphAdapter";


const manifest =
  JSON.parse(
    fs.readFileSync(
      "output/ARCHIVE PHILOSOPHY/manifest.json",
      "utf8"
    )
  );


const graph =
  publicationManifestToGraph(
    manifest
  );


console.log("");

console.log("ENTITIES");

for (const entity of graph.entities) {

  console.log(
    entity.type,
    "→",
    entity.name
  );

}


console.log("");

console.log("RELATIONSHIPS");

for (const relationship of graph.relationships) {

  console.log(
    relationship.type,
    relationship.from,
    "→",
    relationship.to
  );

}
