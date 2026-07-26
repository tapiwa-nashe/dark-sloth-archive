import { join } from "node:path";
import { outputPath } from "../util/outputPath.js";
import { publicationFilename } from "../util/filename.js";
export class PublicationOutput {
    markdown;
    docx;
    pdf;
    report;
    log;
    constructor(markdown, docx, pdf, report, log) {
        this.markdown = markdown;
        this.docx = docx;
        this.pdf = pdf;
        this.report = report;
        this.log = log;
    }
    static from(publication) {
        const name = publicationFilename(publication.metadata.title);
        const folder = outputPath(publication.metadata.title);
        return new PublicationOutput(folder.then(path => join(path, `${name}.md`)), folder.then(path => join(path, `${name}.docx`)), folder.then(path => join(path, `${name}.pdf`)), folder.then(path => join(path, "publication.json")), folder.then(path => join(path, "publish.log")));
    }
}
//# sourceMappingURL=PublicationOutput.js.map