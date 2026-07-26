import type { Publication } from "../models/Publication.js";
import type { PublicationLoader } from "./PublicationLoader.js";
export declare class FilePublicationLoader implements PublicationLoader {
    private readonly parser;
    load(source: unknown): Promise<Publication>;
}
