import type { Publication } from "../models/Publication.js";
export interface PublicationLoader {
    load(source: unknown): Promise<Publication>;
}
