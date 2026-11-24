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
                type: "chapterStart",
                title: `CHAPTER ${chapter.number}`,
                content: chapter.title,
                chapterNumber: chapter.number
            });
            if (chapter.recovery) {
                sections.push({
                    type: "recovery",
                    content: chapter.recovery,
                    chapterNumber: chapter.number
                });
            }
            if (chapter.openingQuestion) {
                sections.push({
                    type: "openingQuestion",
                    content: chapter.openingQuestion,
                    chapterNumber: chapter.number
                });
            }
            sections.push({
                type: "chapterContent",
                content: chapter.content,
                chapterNumber: chapter.number
            });
        }
        return {
            sections
        };
    }
}
//# sourceMappingURL=BookAssembler.js.map