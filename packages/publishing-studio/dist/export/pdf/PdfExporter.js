import { writeFile } from "node:fs/promises";
import { PDFDocument } from "pdf-lib";
import { PdfDocumentWriter } from "../../writer/pdf/PdfDocumentWriter.js";
import { LayoutRenderer } from "../../rendering/LayoutRenderer.js";
export class PdfExporter {
    renderer = new LayoutRenderer();
    async export(publication) {
        const output = await publication.output.pdf;
        const pdf = await PDFDocument.create();
        const writer = new PdfDocumentWriter(pdf, publication.profile);
        await writer.begin();
        this.renderer.render(publication.layout, writer);
        const bytes = await pdf.save();
        await writeFile(output, bytes);
        return output;
    }
}
//# sourceMappingURL=PdfExporter.js.map