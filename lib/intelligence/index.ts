import fs from "node:fs";
import path from "node:path";


const indexPath =
  path.join(
    process.cwd(),
    "data",
    "intelligence",
    "index.json"
  );


function ensureIndex() {

  const directory =
    path.dirname(
      indexPath
    );


  fs.mkdirSync(
    directory,
    {
      recursive:true
    }
  );


  if (
    !fs.existsSync(
      indexPath
    )
  ) {

    fs.writeFileSync(
      indexPath,
      "[]"
    );

  }

}



export function updateIntelligenceIndex(
  subject:string,
  interpretations:any[]
) {


  ensureIndex();


  const index =
    JSON.parse(
      fs.readFileSync(
        indexPath,
        "utf8"
      )
    );


  const existing =
    index.find(
      (item:any) =>
        item.subject === subject
    );


  const record = {

    subject,

    interpretationCount:
      interpretations.length,

    types:
      interpretations.map(
        item =>
          item.type
      ),

    latest:

      interpretations[
        interpretations.length - 1
      ],

    updatedAt:
      new Date()
        .toISOString()

  };



  if (existing) {

    Object.assign(
      existing,
      record
    );

  } else {

    index.push(
      record
    );

  }



  fs.writeFileSync(
    indexPath,
    JSON.stringify(
      index,
      null,
      2
    )
  );


  return record;

}



export function getIntelligenceIndex(
  subject?:string
) {

  ensureIndex();


  const index =
    JSON.parse(
      fs.readFileSync(
        indexPath,
        "utf8"
      )
    );


  if (!subject) {

    return index;

  }


  return index.find(
    (item:any) =>
      item.subject === subject
  );

}
