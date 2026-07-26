import fs from "node:fs";
import path from "node:path";

import {
  createEditionManifest
} from "./manifest";


export function writeEditionManifest(
  edition: string,
  collection: string,
  records: string[],
  outputs: string[]
) {

  const directory =
    path.join(
      process.cwd(),
      "output",
      edition
    );


  if (!fs.existsSync(directory)) {

    fs.mkdirSync(
      directory,
      {
        recursive: true
      }
    );

  }


  const manifest =
    createEditionManifest(
      edition,
      collection,
      records,
      outputs
    );


  fs.writeFileSync(
    path.join(
      directory,
      "manifest.json"
    ),
    JSON.stringify(
      manifest,
      null,
      2
    )
  );


  return manifest;

}
