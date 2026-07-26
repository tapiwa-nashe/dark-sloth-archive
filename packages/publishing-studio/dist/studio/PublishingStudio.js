import { PublishingEngine } from "../engine/PublishingEngine.js";
export class PublishingStudio {
    publication;
    engine;
    constructor(publication) {
        this.publication = publication;
        this.engine =
            new PublishingEngine(publication);
    }
    blueprint() {
        return this.engine
            .buildBlueprint();
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
//# sourceMappingURL=PublishingStudio.js.map