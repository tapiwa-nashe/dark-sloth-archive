import { writeFile } from "node:fs/promises";
export class PublishLogger {
    async write(publication, outputs) {
        const log = [
            "Dark Sloth Publishing Studio",
            "",
            `Title: ${publication.publication.metadata.title}`,
            `Author: ${publication.publication.metadata.author}`,
            `Published: ${new Date().toISOString()}`,
            "",
            "Outputs:",
            ...outputs.map(file => `- ${file}`)
        ].join("\n");
        await writeFile(await publication.output.log, log, "utf8");
    }
}
//# sourceMappingURL=PublishLogger.js.map