export function exportMetadata(publication) {
    return {
        title: publication.metadata.title,
        author: publication.metadata.author,
        language: publication.metadata.language,
        publisher: publication.metadata.publisher,
        subject: publication.metadata.description,
        keywords: publication.metadata.keywords
    };
}
//# sourceMappingURL=ExportMetadata.js.map