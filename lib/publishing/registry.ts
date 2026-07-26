import fs from "node:fs";
import path from "node:path";

import {
  resolveCollectionRecords
} from "./provenance";


const outputRoot =
  path.join(
    process.cwd(),
    "output"
  );


export type EditionRecord = {

  title: string;

  collection: string;

  editionType: string;

  status: string;

  engine: string;

  chapters: number;

  records: any[];

  outputs: string[];

};



export function getEditionRegistry(): EditionRecord[] {

  if (!fs.existsSync(outputRoot)) {
    return [];
  }


  return fs.readdirSync(
    outputRoot,
    {
      withFileTypes:true
    }
  )
  .filter(
    entry =>
      entry.isDirectory()
  )
  .map(
    entry => {

      const folder =
        path.join(
          outputRoot,
          entry.name
        );


      const metadataPath =
        path.join(
          folder,
          "publication.json"
        );


      let metadata:any = {};


      if (
        fs.existsSync(metadataPath)
      ) {

        metadata =
          JSON.parse(
            fs.readFileSync(
              metadataPath,
              "utf8"
            )
          );

      }


      const collection =
        metadata.collection ??
        entry.name;


      return {

        title:
          metadata.title ??
          entry.name,


        collection,


        editionType:
          "Archive Edition",


        status:
          metadata.status ??
          "PUBLISHED",


        engine:
          "Publishing Studio V1",


        chapters:
          metadata.chapters ?? 0,


        records:
          resolveCollectionRecords(
            collection
          ),


        outputs:
          fs.readdirSync(
            folder
          )

      };

    }
  );

}
