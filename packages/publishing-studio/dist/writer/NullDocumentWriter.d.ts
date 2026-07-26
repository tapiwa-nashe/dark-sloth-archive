import type { DocumentWriter } from "./DocumentWriter.js";
export declare class NullDocumentWriter implements DocumentWriter {
    begin(): void;
    end(): void;
    tableOfContents(title: string, entries: {
        title: string;
        level: number;
    }[]): void;
    pageBreak(): void;
    heading(): void;
    paragraph(): void;
    quote(): void;
    image(): void;
    table(): void;
    code(): void;
}
