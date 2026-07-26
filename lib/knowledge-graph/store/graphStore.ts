import fs from "node:fs";
import path from "node:path";


const root =
  path.join(
    process.cwd(),
    "data",
    "knowledge-graph"
  );


function readJson(
  filename:string
) {

  const file =
    path.join(
      root,
      filename
    );


  if (
    !fs.existsSync(file)
  ) {

    return [];

  }


  return JSON.parse(
    fs.readFileSync(
      file,
      "utf8"
    )
  );

}



export function saveGraphSnapshot(
  snapshot:{
    entities:any[];
    relationships:any[];
    identities:any[];
  }
) {

  if (
    !fs.existsSync(root)
  ) {

    fs.mkdirSync(
      root,
      {
        recursive:true
      }
    );

  }


  fs.writeFileSync(
    path.join(root,"entities.json"),
    JSON.stringify(
      snapshot.entities,
      null,
      2
    )
  );


  fs.writeFileSync(
    path.join(root,"relationships.json"),
    JSON.stringify(
      snapshot.relationships,
      null,
      2
    )
  );


  fs.writeFileSync(
    path.join(root,"identities.json"),
    JSON.stringify(
      snapshot.identities,
      null,
      2
    )
  );

}



export function loadGraphSnapshot() {

  return {

    entities:
      readJson(
        "entities.json"
      ),

    relationships:
      readJson(
        "relationships.json"
      ),

    identities:
      readJson(
        "identities.json"
      )

  };

}
