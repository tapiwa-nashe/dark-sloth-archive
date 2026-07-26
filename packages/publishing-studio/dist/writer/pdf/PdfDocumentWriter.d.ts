import { PDFDocument } from "pdf-lib";
import type { ExportProfile } from "../../profile/ExportProfile.js";
export interface TocEntry {
    title: string;
    level: number;
}
export declare class PdfDocumentWriter {
    private readonly pdf;
    private readonly profile;
    private page;
    private font;
    private y;
    private headerLeft;
    private headerRight;
    constructor(pdf: PDFDocument, profile: ExportProfile);
    begin(): Promise<void>;
    end(): Promise<void>;
    private newPage;
    paragraph(text: string, size?: number): void;
    heading(text: string, level: 1 | 2): void;
    tableOfContents(title: string, entries: TocEntry[]): void;
    quote(text: string, attribution?: string): void;
    pageBreak(): void;
}
