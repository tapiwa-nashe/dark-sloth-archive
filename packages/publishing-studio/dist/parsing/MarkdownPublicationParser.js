import { randomUUID } from "node:crypto";
export class MarkdownPublicationParser {
    parse(content) {
        const lines = content.split(/\r?\n/);
        const chapters = [];
        let currentTitle = "Introduction";
        let currentPart;
        let buffer = [];
        let number = 1;
        const pushChapter = () => {
            const body = buffer.join("\n").trim();
            if (body.length === 0 &&
                currentTitle === "Introduction") {
                return;
            }
            chapters.push({
                id: `chapter-${number}`,
                number,
                part: currentPart,
                title: currentTitle,
                content: body,
                words: body
                    .split(/\s+/)
                    .filter(Boolean)
                    .length
            });
            number++;
            buffer = [];
        };
        for (const line of lines) {
            if (line.startsWith("## ")) {
                currentPart =
                    line.substring(3).trim();
                continue;
            }
            if (line.startsWith("# ")) {
                pushChapter();
                currentTitle =
                    line.substring(2).trim();
                continue;
            }
            buffer.push(line);
        }
        pushChapter();
        return {
            id: randomUUID(),
            metadata: {
                title: chapters[0]?.title ??
                    "Untitled Publication",
                author: "Unknown",
                edition: "1.0",
                language: "en",
                current: "draft",
                publisher: undefined,
                description: undefined,
                keywords: []
            },
            chapters
        };
    }
}
//# sourceMappingURL=MarkdownPublicationParser.js.map