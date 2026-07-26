import type { Publication } from "../models/Publication.js";
export declare class PublishingStudio {
    readonly publication: Publication;
    private engine;
    constructor(publication: Publication);
    blueprint(): import("../index.js").PublicationBlueprint;
    documentTree(): import("../index.js").DocumentTree;
    renderTree(): import("../index.js").RenderTree;
}
