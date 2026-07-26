import { TableOfContentsBuilder } from "../toc/TableOfContentsBuilder.js";
export class BookAssembler {
    tocBuilder = new TableOfContentsBuilder();
    assemble(publication, manifest, frontMatter) {
        const sections = [];
        if (manifest.titlePage) {
            sections.push({
                type: "title",
                title: publication.metadata.title,
                content: publication.metadata.author
            });
        }
        if (manifest.copyright &&
            frontMatter.copyright) {
            sections.push({
                type: "copyright",
                content: frontMatter.copyright
            });
        }
        if (manifest.dedication &&
            frontMatter.dedication) {
            sections.push({
                type: "dedication",
                content: frontMatter.dedication
            });
        }
        if (manifest.preface &&
            frontMatter.preface) {
            sections.push({
                type: "preface",
                content: frontMatter.preface
            });
        }
        if (manifest.tableOfContents) {
            const toc = this.tocBuilder.build(publication);
            sections.push({
                type: "toc",
                title: "Contents",
                content: toc.entries
                    .map(entry => entry.title)
                    .join("\n")
            });
        }
        for (const chapter of publication.chapters) {
            sections.push({
                type: "chapter",
                title: chapter.title,
                content: chapter.content
            });
        }
        return {
            sections
        };
    }
}
//# sourceMappingURL=BookAssembler.js.map