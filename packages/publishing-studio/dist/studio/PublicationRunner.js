import { PublicationPipeline } from "../pipeline/PublicationPipeline.js";
import { FrontMatterLoader } from "../frontmatter/FrontMatterLoader.js";
import { ManifestLoader } from "../manifest/ManifestLoader.js";
import { BookAssembler } from "../book/BookAssembler.js";
import { LayoutEngine } from "../layout/LayoutEngine.js";
import { PublicationOutput } from "../output/PublicationOutput.js";
import { DefaultExportProfile } from "../profile/DefaultExportProfile.js";
import { PublicationReporter } from "../report/PublicationReporter.js";
import { PublishLogger } from "../report/PublishLogger.js";
export class PublicationRunner {
    loader;
    renderer;
    exporter;
    reporter = new PublicationReporter();
    logger = new PublishLogger();
    frontMatterLoader = new FrontMatterLoader();
    manifestLoader = new ManifestLoader();
    assembler = new BookAssembler();
    layoutEngine = new LayoutEngine();
    constructor(loader, renderer, exporter) {
        this.loader = loader;
        this.renderer = renderer;
        this.exporter = exporter;
    }
    async publish(source) {
        const publication = await this.loader.load(source);
        const pipeline = new PublicationPipeline(publication);
        const renderTree = pipeline.renderTree();
        const markdown = await this.renderer.render(renderTree);
        const frontMatter = publication.source
            ? await this.frontMatterLoader.load(publication.source.root)
            : {};
        const manifest = publication.source
            ? await this.manifestLoader.load(publication.source.root)
            : {
                titlePage: true,
                copyright: false,
                dedication: false,
                preface: false,
                acknowledgements: false,
                tableOfContents: false,
                headers: false,
                pageNumbers: false,
                appendix: false,
                glossary: false,
                aboutAuthor: false
            };
        const book = this.assembler.assemble(publication, manifest, frontMatter);
        const layout = this.layoutEngine.build(book);
        const publicationPackage = {
            publication,
            book,
            layout,
            renderTree,
            markdown,
            output: PublicationOutput.from(publication),
            profile: DefaultExportProfile
        };
        const outputs = await this.exporter.export(publicationPackage);
        await this.reporter.write(publicationPackage, outputs);
        await this.logger.write(publicationPackage, outputs);
        return outputs;
    }
}
//# sourceMappingURL=PublicationRunner.js.map