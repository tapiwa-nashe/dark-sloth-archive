import { FilePublicationLoader } from "../input/FilePublicationLoader.js";
import { MarkdownRenderer } from "../rendering/markdown/MarkdownRenderer.js";
import { ExportManager } from "../export/ExportManager.js";
import { MarkdownExporter } from "../export/markdown/MarkdownExporter.js";
import { DocxExporter } from "../export/docx/DocxExporter.js";
import { PdfExporter } from "../export/pdf/PdfExporter.js";
import { PublicationRunner } from "../studio/PublicationRunner.js";
export function createPublicationRunner() {
    return new PublicationRunner(new FilePublicationLoader(), new MarkdownRenderer(), new ExportManager([
        new MarkdownExporter(),
        new DocxExporter(),
        new PdfExporter()
    ]));
}
//# sourceMappingURL=createPublicationRunner.js.map