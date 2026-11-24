import { createHash } from "node:crypto";
function stableId(title) {
    return createHash("sha1")
        .update(title.trim().toLowerCase())
        .digest("hex")
        .slice(0, 12);
}
function wordCount(value) {
    return value.split(/\s+/).filter(Boolean).length;
}
export class MarkdownPublicationParser {
    parse(content) {
        const lines = content.split(/\r?\n/);
        const chapters = [];
        let chapterNumber = 0;
        let title = "Introduction";
        let recovery;
        let openingQuestion;
        let currentPart;
        let buffer = [];
        const pushChapter = () => {
            const body = buffer.join("\n").trim();
            if (chapterNumber > 0 &&
                (body || title)) {
                chapters.push({
                    id: `chapter-${String(chapterNumber).padStart(3, "0")}`,
                    number: chapterNumber,
                    title: title.trim() ||
                        `Chapter ${chapterNumber}`,
                    recovery,
                    openingQuestion,
                    content: body,
                    words: wordCount(body),
                    part: currentPart
                });
            }
            buffer = [];
            recovery = undefined;
            openingQuestion = undefined;
        };
        for (const rawLine of lines) {
            const line = rawLine.trim();
            const chapterMatch = line.match(/^(?:#{1,3}\s*)?CHAPTER\s+(\d+)(?:\s*[—–:-]\s*(.+))?$/i);
            if (chapterMatch) {
                pushChapter();
                chapterNumber =
                    Number(chapterMatch[1]);
                title =
                    chapterMatch[2]?.trim() ||
                        `Chapter ${chapterNumber}`;
                continue;
            }
            const partMatch = line.match(/^(?:#{1,3}\s*)?PART\s+(?:[IVXLCDM]+|\d+)(?:\s*[—–:-]\s*)?(.+)?$/i);
            if (partMatch &&
                chapterNumber === 0) {
                currentPart =
                    line
                        .replace(/^#{1,3}\s*/, "")
                        .trim();
                continue;
            }
            if (/^##\s+Recovery\b/i.test(line)) {
                recovery =
                    line
                        .replace(/^##\s+Recovery\s*[:—–-]?\s*/i, "")
                        .trim();
                continue;
            }
            if (/^###\s+Opening Question\b/i.test(line)) {
                continue;
            }
            if (chapterNumber > 0 &&
                line.startsWith("**") &&
                line.endsWith("**") &&
                !openingQuestion) {
                openingQuestion =
                    line
                        .replace(/^\*\*|\*\*$/g, "")
                        .trim();
                continue;
            }
            if (chapterNumber > 0 &&
                /^#\s+/.test(line)) {
                title =
                    line
                        .replace(/^#\s+/, "")
                        .trim();
                continue;
            }
            buffer.push(rawLine);
        }
        pushChapter();
        const titleFromContent = lines
            .map(line => line
            .replace(/^#{1,3}\s*/, "")
            .trim())
            .find(Boolean);
        const publicationTitle = titleFromContent ||
            "Untitled Publication";
        return {
            id: `pub-${stableId(publicationTitle)}`,
            metadata: {
                title: publicationTitle,
                author: "Unknown",
                edition: "1.0",
                language: "en",
                current: "draft",
                keywords: []
            },
            chapters
        };
    }
}
//# sourceMappingURL=MarkdownPublicationParser.js.map