export interface PublicationMetadata {
    id?: string;
    title: string;
    subtitle?: string;
    author: string;
    series?: string;
    volume?: string;
    hierarchy?: "standalone" | "volume" | "recovery-record";
    parentId?: string;
    readerProfile?: "codex" | "field-log" | "archive-document";
    edition: string;
    language: string;
    current: string;
    status?: string;
    publisher?: string;
    description?: string;
    keywords?: string[];
    cover?: string;
}
