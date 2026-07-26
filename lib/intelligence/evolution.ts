import fs from "node:fs";
import path from "node:path";

import {
  classifyEvolution
} from "./evolutionClassifier";


const evolutionPath =
  path.join(
    process.cwd(),
    "data",
    "intelligence",
    "evolution.json"
  );



function ensureEvolutionStore() {

  fs.mkdirSync(
    path.dirname(evolutionPath),
    {
      recursive:true
    }
  );


  if (
    !fs.existsSync(
      evolutionPath
    )
  ) {

    fs.writeFileSync(
      evolutionPath,
      "[]"
    );

  }

}



export function recordEvolution(
  subject:string,
  previous:any,
  current:any
) {


  ensureEvolutionStore();


  const history =
    JSON.parse(
      fs.readFileSync(
        evolutionPath,
        "utf8"
      )
    );



  const change =
    classifyEvolution(
      previous,
      current
    );



  const event = {

    subject,

    from:
      previous?.type ??
      null,

    to:
      current?.type ??
      null,

    change,

    previous:
      previous?.summary ??
      null,

    current:
      current?.summary ??
      null,

    timestamp:
      new Date()
        .toISOString()

  };



  history.push(
    event
  );


  fs.writeFileSync(
    evolutionPath,
    JSON.stringify(
      history,
      null,
      2
    )
  );


  return event;

}



export function getEvolutionHistory(
  subject:string
) {


  ensureEvolutionStore();


  return JSON.parse(
    fs.readFileSync(
      evolutionPath,
      "utf8"
    )
  )
  .filter(
    (item:any) =>
      item.subject === subject
  );

}
