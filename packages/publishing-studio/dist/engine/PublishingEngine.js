export class PublishingEngine {
    publication;
    constructor(publication) {
        this.publication = publication;
    }
    buildBlueprint() {
        return {
            publicationId: this.publication.id,
            title: this.publication.metadata.title,
            chapters: this.publication.chapters.map(chapter => ({
                id: chapter.id,
                number: chapter.number,
                title: chapter.title
            }))
        };
    }
    buildDocumentTree() {
        return {
            root: {
                id: this.publication.id,
                type: "document",
                children: this.publication.chapters.map(chapter => ({
                    id: chapter.id,
                    type: "chapter",
                    content: chapter.title,
                    children: chapter.content
                        .split(/\n\s*\n/)
                        .filter(Boolean)
                        .map((paragraph, index) => ({
                        id: `${chapter.id}-p-${index + 1}`,
                        type: "paragraph",
                        content: paragraph.trim()
                    }))
                }))
            }
        };
    }
    buildRenderTree() {
        const nodes = [];
        let currentPart;
        for (const chapter of this.publication.chapters) {
            if (chapter.part &&
                chapter.part !== currentPart) {
                currentPart = chapter.part;
                nodes.push({
                    id: `part-${currentPart}`,
                    type: "part",
                    content: currentPart
                });
            }
            nodes.push({
                id: chapter.id,
                type: "heading",
                content: chapter.title
            });
            const paragraphs = chapter.content
                .split(/\n\s*\n/)
                .filter(Boolean);
            for (let i = 0; i < paragraphs.length; i++) {
                nodes.push({
                    id: `${chapter.id}-text-${i + 1}`,
                    type: "text",
                    content: paragraphs[i].trim()
                });
            }
        }
        return {
            nodes
        };
    }
}
//# sourceMappingURL=PublishingEngine.js.map