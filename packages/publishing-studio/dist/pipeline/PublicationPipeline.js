import { PublishingEngine } from "../engine/PublishingEngine.js";
export class PublicationPipeline {
    publication;
    engine;
    constructor(publication) {
        this.publication = publication;
        this.engine = new PublishingEngine(publication);
    }
    documentTree() {
        return this.engine
            .buildDocumentTree();
    }
    renderTree() {
        return this.engine
            .buildRenderTree();
    }
}
//# sourceMappingURL=PublicationPipeline.js.map