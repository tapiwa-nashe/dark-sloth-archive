export function archiveBookToCreatedEvent(book) {
    return {
        id: `event-${Date.now()}`,
        type: "BOOK_CREATED",
        timestamp: new Date().toISOString(),
        payload: {
            book
        }
    };
}
//# sourceMappingURL=ArchiveEventAdapter.js.map