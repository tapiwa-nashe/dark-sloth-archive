import type { DocumentWriter } from "../DocumentWriter.js";
export declare class MarkdownDocumentWriter implements DocumentWriter {
    private readonly lines;
    begin(): void;
    end(): void;
    tableOfContents(title: string, entries: {
        title: string;
        level: number;
    }[]): void;
    pageBreak(): void;
    heading(text: string, level: 1 | 2): void;
    paragraph(text: string): void;
    quote(text: string, attribution?: string): void;
    image(src: string, caption?: string): void;
    table(headers: string[], rows: string[][]): void;
    code(language: string | undefined, text: string): void;
    toString(): string;
}
