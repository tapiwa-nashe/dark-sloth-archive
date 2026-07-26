export function fromArchive(input) {
    return {
        id: input.publicationId,
        metadata: {
            title: input.title,
            author: input.author ??
                "Unknown",
            edition: input.edition ??
                "Archive Edition",
            language: input.language ??
                "en-US",
            current: input.current ??
                "Dark Sloth Archive"
        },
        chapters: input.chapters.map(chapter => ({
            id: chapter.id,
            number: chapter.number,
            title: chapter.title,
            content: chapter.content,
            words: chapter.words,
            part: chapter.part
        }))
    };
}
//# sourceMappingURL=ArchivePublicationAdapter.js.map