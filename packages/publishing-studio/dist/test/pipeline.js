import { PublishingEngine } from "../engine/PublishingEngine.js";
const publication = {
    id: "PUB-001",
    metadata: {
        title: "The Dissolution Cycle",
        author: "Tapiwa Ndoro",
        edition: "First Edition",
        language: "en",
        current: "Dark Sloth Archive"
    },
    chapters: [
        {
            id: "CH-001",
            number: 1,
            title: "The Beginning",
            content: "Nothing is invented. Only recovered.",
            words: 6
        }
    ]
};
const engine = new PublishingEngine(publication);
console.log(engine.buildBlueprint());
console.log(engine.buildDocumentTree());
console.log(engine.buildRenderTree());
//# sourceMappingURL=pipeline.js.map