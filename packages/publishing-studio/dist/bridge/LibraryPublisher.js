import { spawn } from "node:child_process";
import { access } from "node:fs/promises";
import { join, resolve } from "node:path";
function run(command, args, cwd) {
    return new Promise((resolvePromise, reject) => {
        const child = spawn(command, args, {
            cwd,
            stdio: "inherit"
        });
        child.once("error", reject);
        child.once("exit", code => {
            if (code === 0) {
                resolvePromise();
            }
            else {
                reject(new Error(`Library publication bridge exited with code ${code ?? "unknown"}.`));
            }
        });
    });
}
export async function publishToLibrary(handoffPath, libraryRoot) {
    const resolvedLibraryRoot = resolve(libraryRoot ??
        process.env
            .DARK_SLOTH_LIBRARY_ROOT ??
        join(process.cwd(), "..", "dark-sloth-library"));
    const bridge = join(resolvedLibraryRoot, "scripts", "publish-from-studio.mjs");
    await access(bridge);
    const resolvedHandoffPath = resolve(handoffPath);
    await access(resolvedHandoffPath);
    await run(process.execPath, [
        "--experimental-strip-types",
        bridge,
        resolvedHandoffPath
    ], resolvedLibraryRoot);
}
//# sourceMappingURL=LibraryPublisher.js.map