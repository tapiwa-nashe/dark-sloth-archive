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


export function getEdition(
  edition: string
) {

  const directory =
    path.join(
      outputRoot,
      edition
    );


  if (!fs.existsSync(directory)) {
    return null;
  }


  const files =
    fs.readdirSync(
      directory
    );


  let metadata:any = null;


  const metadataPath =
    path.join(
      directory,
      "publication.json"
    );


  if (fs.existsSync(metadataPath)) {

    metadata =
      JSON.parse(
        fs.readFileSync(
          metadataPath,
          "utf8"
        )
      );

  }


  const collection =
    metadata?.collection ??
    edition;


  const manifestPath =
    path.join(
      directory,
      "manifest.json"
    );


  let manifest = null;


  if (
    fs.existsSync(manifestPath)
  ) {

    manifest =
      JSON.parse(
        fs.readFileSync(
          manifestPath,
          "utf8"
        )
      );

  }


  return {

    title:
      edition,


    files,


    metadata,


    manifest,


    collection,


    records:
      resolveCollectionRecords(
        collection
      )

  };

}
