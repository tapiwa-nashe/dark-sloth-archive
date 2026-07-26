import { mkdir } from "node:fs/promises";
import { join } from "node:path";
export async function outputPath(filename) {
    const outputDir = join("output", filename);
    await mkdir(outputDir, { recursive: true });
    return outputDir;
}
//# sourceMappingURL=outputPath.js.map