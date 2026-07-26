import { access } from "node:fs/promises";
import { join } from "node:path";
export async function coverPath(root, cover) {
    if (!cover) {
        return undefined;
    }
    const path = join(root, cover);
    try {
        await access(path);
        return path;
    }
    catch {
        return undefined;
    }
}
//# sourceMappingURL=coverPath.js.map