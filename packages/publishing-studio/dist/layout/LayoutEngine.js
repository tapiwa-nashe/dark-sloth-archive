export class LayoutEngine {
    build(book) {
        const blocks = [];
        for (const section of book.sections) {
            switch (section.type) {
                case "title":
                    if (section.title) {
                        blocks.push({
                            type: "heading",
                            level: 1,
                            text: section.title
                        });
                    }
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
                            .map(title => ({
                            title,
                            level: 1
                        }))
                    });
                    break;
                case "chapter":
                    if (section.title) {
                        blocks.push({
                            type: "heading",
                            level: 1,
                            text: section.title
                        });
                    }
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
                        type: "heading",
                        level: 1,
                        text: section.type
                    });
                    blocks.push({
                        type: "paragraph",
                        text: section.content
                    });
            }
            blocks.push({
                type: "pageBreak"
            });
        }
        return {
            blocks
        };
    }
}
//# sourceMappingURL=LayoutEngine.js.map