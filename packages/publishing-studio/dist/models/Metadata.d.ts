export interface PublicationMetadata {
    title: string;
    subtitle?: string;
    author: string;
    series?: string;
    edition: string;
    language: string;
    current: string;
    status?: string;
    publisher?: string;
    description?: string;
    keywords?: string[];
    cover?: string;
}
