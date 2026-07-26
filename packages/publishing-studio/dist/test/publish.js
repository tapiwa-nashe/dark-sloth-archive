import { ArchivePublicationLoader, MarkdownRenderer, MarkdownExporter, DocxExporter, ExportManager, PublicationRunner } from "../index.js";
const blueprint = {
    publicationId: "PUB-001",
    title: "The Dissolution Cycle",
    chapters: [
        {
            id: "CH-001",
            number: 1,
            title: "The Beginning"
        }
    ]
};
const loader = new ArchivePublicationLoader(blueprint);
const renderer = new MarkdownRenderer();
const exporter = new ExportManager([
    new MarkdownExporter(),
    new DocxExporter()
]);
const runner = new PublicationRunner(loader, renderer, exporter);
console.log(await runner.publish(blueprint));
//# sourceMappingURL=publish.js.map