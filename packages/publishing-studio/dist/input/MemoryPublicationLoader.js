export class MemoryPublicationLoader {
    publication;
    constructor(publication) {
        this.publication = publication;
    }
    async load() {
        return this.publication;
    }
}
//# sourceMappingURL=MemoryPublicationLoader.js.map