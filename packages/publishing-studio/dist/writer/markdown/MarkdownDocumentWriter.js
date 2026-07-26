export class MarkdownDocumentWriter {
    lines = [];
    begin() { }
    end() { }
    tableOfContents(title, entries) {
        this.heading(title, 1);
        for (const entry of entries) {
            this.paragraph("  ".repeat(Math.max(0, entry.level - 1)) + entry.title);
        }
    }
    pageBreak() {
        this.lines.push("\n---\n");
    }
    heading(text, level) {
        this.lines.push(`${"#".repeat(level)} ${text}`);
        this.lines.push("");
    }
    paragraph(text) {
        this.lines.push(text);
        this.lines.push("");
    }
    quote(text, attribution) {
        this.lines.push("> " + text);
        if (attribution) {
            this.lines.push("> — " + attribution);
        }
        this.lines.push("");
    }
    image(src, caption) {
        this.lines.push(`![${caption ?? ""}](${src})`);
        this.lines.push("");
    }
    table(headers, rows) {
        this.lines.push("| " + headers.join(" | ") + " |");
        this.lines.push("|" +
            headers.map(() => "---").join("|") +
            "|");
        for (const row of rows) {
            this.lines.push("| " + row.join(" | ") + " |");
        }
        this.lines.push("");
    }
    code(language, text) {
        this.lines.push("```" + (language ?? ""));
        this.lines.push(text);
        this.lines.push("```");
        this.lines.push("");
    }
    toString() {
        return this.lines.join("\n");
    }
}
//# sourceMappingURL=MarkdownDocumentWriter.js.map