export class PublishingWorkspace {
    publication;
    constructor(publication) {
        this.publication = publication;
    }
    getPublication() {
        return this.publication;
    }
    updateTitle(title) {
        this.publication = {
            ...this.publication,
            metadata: {
                ...this.publication.metadata,
                title
            }
        };
        return this;
    }
    updateChapter(id, content) {
        this.publication = {
            ...this.publication,
            chapters: this.publication.chapters.map(chapter => chapter.id === id
                ? {
                    ...chapter,
                    content,
                }
                : chapter)
        };
        return this;
    }
}
//# sourceMappingURL=PublishingWorkspace.js.map