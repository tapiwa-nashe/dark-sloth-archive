import { readFile } from "node:fs/promises";
import { join } from "node:path";
async function load(path) {
    try {
        return await readFile(path, "utf8");
    }
    catch {
        return undefined;
    }
}
export class FrontMatterLoader {
    async load(root) {
        const folder = join(root, "frontmatter");
        return {
            copyright: await load(join(folder, "copyright.md")),
            dedication: await load(join(folder, "dedication.md")),
            preface: await load(join(folder, "preface.md"))
        };
    }
}
//# sourceMappingURL=FrontMatterLoader.js.map