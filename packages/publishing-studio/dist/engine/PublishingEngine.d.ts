import type { Publication } from "../models/Publication.js";
import type { PublicationBlueprint } from "../pipeline/Blueprint.js";
import type { DocumentTree } from "../pipeline/DocumentTree.js";
import type { RenderTree } from "../pipeline/RenderTree.js";
export declare class PublishingEngine {
    readonly publication: Publication;
    constructor(publication: Publication);
    buildBlueprint(): PublicationBlueprint;
    buildDocumentTree(): DocumentTree;
    buildRenderTree(): RenderTree;
}
