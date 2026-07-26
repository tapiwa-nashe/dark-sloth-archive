import type { Publication } from "../models/Publication.js";
import type { DocumentTree } from "./DocumentTree.js";
import type { RenderTree } from "./RenderTree.js";
export declare class PublicationPipeline {
    private readonly publication;
    private readonly engine;
    constructor(publication: Publication);
    documentTree(): DocumentTree;
    renderTree(): RenderTree;
}
