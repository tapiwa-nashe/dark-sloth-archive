import fs from "node:fs";
import path from "node:path";


const memoryPath =
  path.join(
    process.cwd(),
    "data",
    "intelligence",
    "interpretations.json"
  );


export function saveInterpretation(
  interpretation: any
) {

  let existing:any[] = [];


  if (
    fs.existsSync(
      memoryPath
    )
  ) {

    existing =
      JSON.parse(
        fs.readFileSync(
          memoryPath,
          "utf8"
        )
      );

  }


  existing.push(
    {
      id:
        interpretation.id ??
        `INT-${interpretation.subject}-${Date.now()}`,

      ...interpretation,

      createdAt:
        interpretation.createdAt ??
        new Date().toISOString()

    }
  );


  fs.mkdirSync(
    path.dirname(memoryPath),
    {
      recursive:true
    }
  );


  fs.writeFileSync(
    memoryPath,
    JSON.stringify(
      existing,
      null,
      2
    )
  );


  return interpretation;

}



export function getLatestInterpretation(
  subject:string,
  type?:string
) {

  if (
    !fs.existsSync(
      memoryPath
    )
  ) {

    return null;

  }


  const existing:any[] =
    JSON.parse(
      fs.readFileSync(
        memoryPath,
        "utf8"
      )
    );


  const filtered =
    existing.filter(
      item =>
        item.subject === subject &&
        (
          !type ||
          item.type === type
        )
    );


  return (
    filtered.length
      ? filtered[filtered.length - 1]
      : null
  );

}
