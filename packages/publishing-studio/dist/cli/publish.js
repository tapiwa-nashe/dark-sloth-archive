import { createPublicationRunner } from "../factory/createPublicationRunner.js";
const source = process.argv[2];
if (!source) {
    console.error("Usage:");
    console.error("npm run publish -- <book-folder>");
    process.exit(1);
}
const runner = createPublicationRunner();
const outputs = await runner.publish(source);
console.log("");
console.log("Publishing complete.");
for (const output of outputs) {
    console.log(output);
}
//# sourceMappingURL=publish.js.map