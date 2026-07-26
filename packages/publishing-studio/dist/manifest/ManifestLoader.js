import { readFile } from "node:fs/promises";
import { join } from "node:path";
export class ManifestLoader {
    async load(root) {
        const filename = join(root, "manifest.json");
        return JSON.parse(await readFile(filename, "utf8"));
    }
}
//# sourceMappingURL=ManifestLoader.js.map