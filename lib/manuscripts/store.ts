import fs from "node:fs";
import path from "node:path";


const manuscriptRoot =
  path.join(
    process.cwd(),
    "data",
    "manuscripts"
  );


export function getManuscript(
  id:string
) {

  const file =
    path.join(
      manuscriptRoot,
      `${id}.json`
    );


  if (
    !fs.existsSync(file)
  ) {

    return null;

  }


  return JSON.parse(
    fs.readFileSync(
      file,
      "utf8"
    )
  );

}
