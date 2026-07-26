import type { PublicationLoader } from "../../input/PublicationLoader.js";
import type { Publication } from "../../models/Publication.js";
import type { PublicationBlueprint } from "../../pipeline/Blueprint.js";
export declare class ArchivePublicationLoader implements PublicationLoader {
    private readonly blueprint;
    constructor(blueprint: PublicationBlueprint);
    load(source: unknown): Promise<Publication>;
}
