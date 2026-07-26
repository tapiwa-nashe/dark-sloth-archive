import type { Publication } from "../../models/Publication.js";
export interface ArchivePublicationInput {
    publicationId: string;
    title: string;
    author?: string;
    edition?: string;
    language?: string;
    current?: string;
    chapters: {
        id: string;
        number: number;
        title: string;
        content: string;
        words: number;
        part?: string;
    }[];
}
export declare function fromArchive(input: ArchivePublicationInput): Publication;
