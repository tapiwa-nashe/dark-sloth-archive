export class ArchivePublicationLoader {
    blueprint;
    constructor(blueprint) {
        this.blueprint = blueprint;
    }
    async load(source) {
        return {
            id: this.blueprint.publicationId,
            metadata: {
                title: this.blueprint.title,
                author: "Unknown",
                edition: "1.0",
                language: "en",
                current: "true",
                publisher: undefined,
                description: undefined,
                keywords: []
            },
            chapters: this.blueprint.chapters.map((chapter) => ({
                id: chapter.id,
                number: chapter.number,
                title: chapter.title,
                content: "",
                words: 0
            }))
        };
    }
}
//# sourceMappingURL=ArchivePublicationLoader.js.map