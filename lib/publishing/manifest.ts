import fs from "node:fs";
import path from "node:path";


export function createEditionManifest(
  edition: string,
  collection: string,
  records: string[],
  outputs: string[]
) {

  const manifest = {

    id:
      `ARCH-EDITION-${edition
        .toUpperCase()
        .replace(
          /[^A-Z0-9]+/g,
          "-"
        )}`,

    title:
      edition,

    collection,

    engine:
      "Publishing Studio V1",

    status:
      "VERIFIED",

    records,

    outputs,

    generated:
      new Date()
        .toISOString()

  };


  return manifest;

}
