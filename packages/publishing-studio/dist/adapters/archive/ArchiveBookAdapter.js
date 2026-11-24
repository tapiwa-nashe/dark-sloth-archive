export function publicationToArchiveBook(publication) {
    const chapters = publication.chapters.map(chapter => ({
        id: chapter.id,
        number: chapter.number,
        title: chapter.title,
        recovery: chapter.recovery,
        openingQuestion: chapter.openingQuestion,
        content: chapter.content
    }));
    return {
        identity: {
            id: publication.metadata.title
                .toLowerCase()
                .replace(/\s+/g, "-"),
            title: publication.metadata.title,
            author: publication.metadata.author
        },
        metadata: {
            status: "DRAFT",
            classification: "ARCHIVE BOOK"
        },
        chapters
    };
}
//# sourceMappingURL=ArchiveBookAdapter.js.map