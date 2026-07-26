import { writeFile } from "node:fs/promises";
export class PublicationReporter {
    async write(publication, outputs) {
        await writeFile(await publication.output.report, JSON.stringify({
            title: publication.publication.metadata.title,
            author: publication.publication.metadata.author,
            outputs,
            publishedAt: new Date().toISOString()
        }, null, 2), "utf8");
    }
}
//# sourceMappingURL=PublicationReporter.js.map