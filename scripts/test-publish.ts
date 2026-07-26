import {
  publishCollection
} from "../lib/publishing/archivePublisher";


const outputs =
  await publishCollection(
    "ARCHIVE PHILOSOPHY"
  );


console.log("");

console.log("Publishing complete.");

for (const output of outputs) {
  console.log(output);
}
