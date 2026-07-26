import { writeFile } from "node:fs/promises";
import { MarkdownDocumentWriter } from "../../writer/markdown/MarkdownDocumentWriter.js";
export class MarkdownExporter {
    async export(publication) {
        const output = await publication.output.markdown;
        const writer = new MarkdownDocumentWriter();
        writer.begin();
        for (const block of publication.layout.blocks) {
            switch (block.type) {
                case "heading":
                    writer.heading(block.text, block.level);
                    break;
                case "paragraph":
                    writer.paragraph(block.text);
                    break;
                case "quote":
                    writer.quote(block.text, block.attribution);
                    break;
                case "image":
                    writer.image(block.src, block.caption);
                    break;
                case "table":
                    writer.table(block.headers, block.rows);
                    break;
                case "code":
                    writer.code(block.language, block.text);
                    break;
                case "toc":
                    writer.heading(block.title, 1);
                    for (const entry of block.entries) {
                        writer.paragraph(entry.title);
                    }
                    break;
                case "pageBreak":
                    writer.pageBreak();
                    break;
            }
        }
        writer.end();
        await writeFile(output, writer.toString(), "utf8");
        return output;
    }
}
//# sourceMappingURL=MarkdownExporter.js.map