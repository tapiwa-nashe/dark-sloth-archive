import fs from "node:fs";
import path from "node:path";


export interface InterpretationRecord {

  id: string;

  subject: string;

  type: string;

  summary: string;

  createdAt: string;

}



const storage =
  path.join(
    process.cwd(),
    "data/intelligence/interpretations.json"
  );



function load(): InterpretationRecord[] {

  if (!fs.existsSync(storage)) {

    return [];

  }


  return JSON.parse(
    fs.readFileSync(
      storage,
      "utf8"
    )
  );

}




function save(
  records: InterpretationRecord[]
) {

  fs.writeFileSync(
    storage,
    JSON.stringify(
      records,
      null,
      2
    )
  );

}




export function saveInterpretation(
  record: InterpretationRecord
) {

  const records =
    load();


  const existing =
    records.find(
      item =>
        item.id === record.id
    );


  if (!existing) {

    records.push(
      record
    );

  }


  save(
    records
  );


  return record;

}




export function getInterpretations(
  subject?: string
) {

  const records =
    load();


  if (!subject) {

    return records;

  }


  return records.filter(
    record =>
      record.subject === subject
  );

}
