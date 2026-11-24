import { createPublicationRunner } from "../factory/createPublicationRunner.js";
const source = process.argv[2];
const libraryRootIndex = process.argv.indexOf("--library-root");
const libraryRoot = libraryRootIndex >= 0
    ? process.argv[libraryRootIndex + 1]
    : undefined;
if (!source) {
    console.error("Usage: npm run publish -- <book-folder> [--library-root <path>]");
    process.exit(1);
}
try {
    const runner = createPublicationRunner();
    const outputs = await runner.publish(source, {
        publishToLibrary: true,
        libraryRoot
    });
    console.log("");
    console.log("Publishing complete.");
    console.log("Library: published");
    for (const output of outputs) {
        console.log(output);
    }
}
catch (error) {
    console.error("");
    console.error("Publication failed:");
    console.error(error instanceof Error
        ? error.message
        : String(error));
    process.exit(1);
}
//# sourceMappingURL=publish.js.map