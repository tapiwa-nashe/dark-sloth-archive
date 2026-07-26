import type { Publication } from "../models/Publication.js";
export interface ExportMetadata {
    title: string;
    author: string;
    language?: string;
    publisher?: string;
    subject?: string;
    keywords?: string[];
}
export declare function exportMetadata(publication: Publication): ExportMetadata;
