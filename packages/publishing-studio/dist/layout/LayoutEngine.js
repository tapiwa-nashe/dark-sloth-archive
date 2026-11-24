export class LayoutEngine {
    build(book) {
        const blocks = [];
        for (const section of book.sections) {
            switch (section.type) {
                case "title":
                    blocks.push({
                        type: "title",
                        text: section.title ?? "Untitled"
                    });
                    blocks.push({
                        type: "paragraph",
                        text: section.content
                    });
                    break;
                case "toc":
                    blocks.push({
                        type: "toc",
                        title: section.title ?? "Contents",
                        entries: section.content
                            .split("\n")
                            .filter(Boolean)
                            .map((title, index) => ({
                            title: `Chapter ${index + 1} — ${title}`,
                            level: 1
                        }))
                    });
                    break;
                case "chapterStart":
                    blocks.push({
                        type: "pageBreak"
                    });
                    blocks.push({
                        type: "chapterHeading",
                        text: section.title ??
                            section.content,
                        chapterNumber: section.chapterNumber
                    });
                    break;
                case "recovery":
                    blocks.push({
                        type: "recoveryMarker",
                        text: section.content,
                        chapterNumber: section.chapterNumber
                    });
                    break;
                case "openingQuestion":
                    blocks.push({
                        type: "openingQuestion",
                        text: section.content
                    });
                    break;
                case "chapterContent":
                    for (const paragraph of section.content
                        .split(/\n\s*\n/)
                        .filter(Boolean)) {
                        blocks.push({
                            type: "paragraph",
                            text: paragraph.trim()
                        });
                    }
                    break;
                default:
                    blocks.push({
                        type: "paragraph",
                        text: section.content
                    });
            }
        }
        return {
            blocks
        };
    }
}
//# sourceMappingURL=LayoutEngine.js.map