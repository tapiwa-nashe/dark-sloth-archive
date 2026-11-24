import { writeFile } from "node:fs/promises";
import { Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";
import { publicationFilename } from "../../util/filename.js";
import { outputPath } from "../../util/outputPath.js";
import { LayoutEngine } from "../../layout/LayoutEngine.js";
export class DocxExporter {
    async export(publication) {
        const filename = `${publicationFilename(publication.publication.metadata.title)}.docx`;
        const folder = await outputPath(publication.publication.metadata.title);
        const layout = new LayoutEngine().build(publication.book);
        const paragraphs = [];
        for (const block of layout.blocks) {
            switch (block.type) {
                case "title":
                    paragraphs.push(new Paragraph({
                        heading: HeadingLevel.TITLE,
                        children: [
                            new TextRun({
                                text: block.text,
                                bold: true,
                                size: 36
                            })
                        ]
                    }));
                    break;
                case "chapterHeading":
                    paragraphs.push(new Paragraph({
                        pageBreakBefore: true,
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun({
                                text: block.text,
                                bold: true,
                                size: 32
                            })
                        ]
                    }));
                    break;
                case "recoveryMarker":
                    paragraphs.push(new Paragraph({
                        heading: HeadingLevel.HEADING_2,
                        children: [
                            new TextRun({
                                text: block.text,
                                bold: true,
                                size: 26
                            })
                        ]
                    }));
                    break;
                case "openingQuestion":
                    paragraphs.push(new Paragraph({
                        children: [
                            new TextRun({
                                text: block.text,
                                italics: true,
                                size: 24
                            })
                        ]
                    }));
                    break;
                case "paragraph":
                    paragraphs.push(new Paragraph({
                        children: [
                            new TextRun({
                                text: block.text,
                                size: 24
                            })
                        ]
                    }));
                    break;
                case "toc":
                    paragraphs.push(new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun({
                                text: block.title,
                                bold: true,
                                size: 32
                            })
                        ]
                    }));
                    for (const entry of block.entries) {
                        paragraphs.push(new Paragraph({
                            children: [
                                new TextRun({
                                    text: entry.title,
                                    size: 24
                                })
                            ]
                        }));
                    }
                    break;
                case "pageBreak":
                    paragraphs.push(new Paragraph({
                        pageBreakBefore: true
                    }));
                    break;
            }
        }
        const document = new Document({
            sections: [
                {
                    children: paragraphs
                }
            ]
        });
        const buffer = await Packer.toBuffer(document);
        const output = `${folder}/${filename}`;
        await writeFile(output, buffer);
        return output;
    }
}
//# sourceMappingURL=DocxExporter.js.map