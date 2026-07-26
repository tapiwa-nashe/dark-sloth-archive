export class TableOfContentsBuilder {
    build(publication) {
        return {
            type: "toc",
            title: "Table of Contents",
            entries: publication.chapters.map(chapter => ({
                title: chapter.title,
                level: 1
            }))
        };
    }
}
//# sourceMappingURL=TableOfContentsBuilder.js.map