import type { Publication } from "../models/Publication.js";
import type { PublicationLoader } from "./PublicationLoader.js";
export declare class MemoryPublicationLoader implements PublicationLoader {
    private readonly publication;
    constructor(publication: Publication);
    load(): Promise<Publication>;
}
