import type { Publication } from "../models/Publication.js";
export type LibraryPublicationHandoff = {
    schemaVersion: "1.0";
    id: string;
    title: string;
    series: string;
    volume: string;
    hierarchy: "standalone" | "volume" | "recovery-record";
    parentId?: string;
    readerProfile?: "codex" | "field-log" | "archive-document";
    source: string;
    coverSource?: string;
    chapters: Array<{
        id: string;
        title: string;
        kind: "chapter" | "article" | "prologue" | "epilogue" | "section" | "part" | "other";
        content: string;
    }>;
};
export declare function createLibraryPublicationHandoff(publication: Publication, outputDirectory: string): Promise<string>;
