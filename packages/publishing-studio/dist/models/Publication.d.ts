import type { Chapter } from "./Chapter.js";
import type { PublicationMetadata } from "./Metadata.js";
import type { PublicationSource } from "./PublicationSource.js";
import type { PublicationManifest } from "./PublicationManifest.js";
export interface Publication {
    id: string;
    metadata: PublicationMetadata;
    source?: PublicationSource;
    manifest?: PublicationManifest;
    chapters: Chapter[];
}
