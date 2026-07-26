import type { BookManifest } from "./BookManifest.js";
export declare class ManifestLoader {
    load(root: string): Promise<BookManifest>;
}
