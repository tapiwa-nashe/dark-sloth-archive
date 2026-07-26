import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { MarkdownPublicationParser } from "../parsing/MarkdownPublicationParser.js";
export class FilePublicationLoader {
    parser = new MarkdownPublicationParser();
    async load(source) {
        const folder = String(source);
        const manuscript = await readFile(join(folder, "manuscript.md"), "utf8");
        const metadata = JSON.parse(await readFile(join(folder, "metadata.json"), "utf8"));
        const manifest = JSON.parse(await readFile(join(folder, "manifest.json"), "utf8"));
        const publication = this.parser.parse(manuscript);
        publication.metadata = {
            ...publication.metadata,
            ...metadata
        };
        publication.source = {
            root: folder
        };
        publication.manifest =
            manifest;
        return publication;
    }
}
//# sourceMappingURL=FilePublicationLoader.js.map