import fs from "fs";
import path from "path";

const recordsDirectory =
  path.join(process.cwd(), "content/records");

export function getRecordContent(
  id: string
) {
  const fullPath =
    path.join(
      recordsDirectory,
      `${id}.md`
    );

  return fs.readFileSync(
    fullPath,
    "utf8"
  );
}
