import fs from "node:fs";
import path from "node:path";


const outputRoot =
  path.join(
    process.cwd(),
    "output"
  );


export function getGeneratedPublications() {

  if (!fs.existsSync(outputRoot)) {
    return [];
  }


  return fs.readdirSync(
    outputRoot,
    {
      withFileTypes: true
    }
  )
  .filter(
    entry => entry.isDirectory()
  )
  .map(
    entry => {

      const directory =
        path.join(
          outputRoot,
          entry.name
        );


      const files =
        fs.readdirSync(
          directory
        );


      return {

        title: entry.name,

        files

      };

    }
  );

}
