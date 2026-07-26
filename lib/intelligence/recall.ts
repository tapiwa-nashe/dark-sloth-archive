import {
  getIntelligenceIndex
} from "./index";


import fs from "node:fs";
import path from "node:path";


const memoryPath =
  path.join(
    process.cwd(),
    "data",
    "intelligence",
    "interpretations.json"
  );



export function recallIntelligence(
  subject:string
) {


  const index =
    getIntelligenceIndex(
      subject
    );


  if (!index) {

    return {

      found:false,

      subject

    };

  }



  let interpretations:any[] = [];


  if (
    fs.existsSync(
      memoryPath
    )
  ) {

    interpretations =
      JSON.parse(
        fs.readFileSync(
          memoryPath,
          "utf8"
        )
      )
      .filter(
        (item:any) =>
          item.subject === subject
      );

  }



  return {

    found:true,

    subject,

    index,

    interpretations,

    latest:
      index.latest

  };

}
