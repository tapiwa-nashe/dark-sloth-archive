import type { Publication } from "../models/Publication.js";
export declare class RawManuscriptLoader {
    private readonly parser;
    load(source: string): Promise<Publication>;
}
