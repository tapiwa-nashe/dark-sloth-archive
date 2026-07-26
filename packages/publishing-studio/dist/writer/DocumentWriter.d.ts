export interface TocEntry {
    title: string;
    level: number;
}
export interface DocumentWriter {
    begin(): Promise<void> | void;
    end(): Promise<void> | void;
    heading(text: string, level: 1 | 2): void;
    paragraph(text: string): void;
    quote(text: string, attribution?: string): void;
    tableOfContents(title: string, entries: TocEntry[]): void;
    pageBreak(): void;
}
