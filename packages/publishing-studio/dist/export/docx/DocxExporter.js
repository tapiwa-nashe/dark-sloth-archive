import { writeFile } from "node:fs/promises";
import { Document, HeadingLevel, Packer, PageBreak, Paragraph, TextRun } from "docx";
import { publicationFilename } from "../../util/filename.js";
import { outputPath } from "../../util/outputPath.js";
export class DocxExporter {
    async export(publication) {
        const baseName = publicationFilename(publication.publication.metadata.title);
        const filename = `${baseName}.docx`;
        const folder = await outputPath(publication.publication.metadata.title);
        const sections = [];
        let first = true;
        for (const section of publication.book.sections) {
            if (!first) {
                sections.push(new Paragraph({
                    children: [
                        new PageBreak()
                    ]
                }));
            }
            first = false;
            switch (section.type) {
                case "title":
                    sections.push(new Paragraph({
                        heading: HeadingLevel.TITLE,
                        children: [
                            new TextRun({
                                text: section.title ?? "",
                                bold: publication.profile.theme.title.bold,
                                size: publication.profile.theme.title.size * 2
                            })
                        ]
                    }), new Paragraph({
                        children: [
                            new TextRun({
                                text: section.content,
                                size: publication.profile.theme.body.size * 2
                            })
                        ]
                    }));
                    break;
                case "chapter":
                    sections.push(new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun({
                                text: section.title ?? "",
                                bold: publication.profile.theme.title.bold,
                                size: publication.profile.theme.title.size * 2
                            })
                        ]
                    }), ...section.content
                        .split(/\n\s*\n/)
                        .filter(Boolean)
                        .map(paragraph => new Paragraph({
                        children: [
                            new TextRun({
                                text: paragraph.trim(),
                                size: publication.profile.theme.body.size * 2
                            })
                        ]
                    })));
                    break;
                default:
                    sections.push(new Paragraph({
                        heading: HeadingLevel.HEADING_1,
                        children: [
                            new TextRun(section.type
                                .charAt(0)
                                .toUpperCase() +
                                section.type.slice(1))
                        ]
                    }), ...section.content
                        .split(/\n\s*\n/)
                        .filter(Boolean)
                        .map(paragraph => new Paragraph({
                        children: [
                            new TextRun({
                                text: paragraph.trim(),
                                size: publication.profile.theme.body.size * 2
                            })
                        ]
                    })));
            }
        }
        const document = new Document({
            sections: [
                {
                    children: sections
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