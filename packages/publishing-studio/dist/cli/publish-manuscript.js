import { RawManuscriptLoader } from "../input/RawManuscriptLoader.js";
import { createPublicationRunner } from "../factory/createPublicationRunner.js";
function flag(name) {
    const index = process.argv.indexOf(name);
    return (index >= 0
        ? process.argv[index + 1]
        : undefined);
}
const source = process.argv
    .slice(2)
    .find(arg => !arg.startsWith("--"));
const libraryRoot = flag("--library-root");
const series = flag("--series");
const volume = flag("--volume");
const id = flag("--id");
const title = flag("--title");
const author = flag("--author");
const cover = flag("--cover");
if (!source) {
    console.error("Usage: npm run publish:manuscript -- <manuscript-or-book-folder> [--series <series>] [--volume <volume>] [--id <id>] [--title <title>] [--author <author>] [--cover <path>] [--library-root <path>]");
    process.exit(1);
}
try {
    const loader = new RawManuscriptLoader();
    const publication = await loader.load(source);
    publication.metadata = {
        ...publication.metadata,
        ...(id
            ? { id }
            : {}),
        ...(title
            ? { title }
            : {}),
        ...(author
            ? { author }
            : {}),
        ...(series
            ? { series }
            : {}),
        ...(volume
            ? { volume }
            : {}),
        ...(cover
            ? { cover }
            : {})
    };
    if (!publication.metadata.series) {
        throw new Error(`No series supplied. Add series to publication.json/metadata.json or pass --series "Dark Sloth Codex" / "The Archive Documents".`);
    }
    if (!publication.metadata.volume) {
        throw new Error(`No volume supplied. Add volume to publication.json/metadata.json or pass --volume "Volume X".`);
    }
    const runner = createPublicationRunner({
        load: async () => publication
    });
    const outputs = await runner.publish(source, {
        publishToLibrary: true,
        libraryRoot
    });
    console.log("");
    console.log("Publication complete.");
    console.log(`Title: ${publication.metadata.title}`);
    console.log(`Series: ${publication.metadata.series}`);
    console.log(`Volume: ${publication.metadata.volume}`);
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
//# sourceMappingURL=publish-manuscript.js.map