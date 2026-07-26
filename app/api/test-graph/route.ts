import {
  buildIdentityGraph
} from "@/lib/knowledge-graph/identityGraphBuilder";

import fs from "node:fs";


export async function GET() {

  const manifest =
    JSON.parse(
      fs.readFileSync(
        "output/ARCHIVE PHILOSOPHY/manifest.json",
        "utf8"
      )
    );


  const graph =
    buildIdentityGraph(
      manifest
    );


  return Response.json(
    graph
  );

}
