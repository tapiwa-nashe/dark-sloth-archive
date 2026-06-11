import fs from "fs";
import path from "path";
import matter from "gray-matter";

const recordsDirectory =
  path.join(
    process.cwd(),
    "content/records"
  );

export function getRecordContent(
  id: string
) {
  let filename = `${id}.md`;

  if (Number(id) >= 11) {
    filename = `rec-${id}.md`;
  }

  const fullPath =
    path.join(
      recordsDirectory,
      filename
    );

  const fileContents =
    fs.readFileSync(
      fullPath,
      "utf8"
    );

  const {
    data,
    content,
  } = matter(fileContents);

  return {
    data,
    content,
  };
}
