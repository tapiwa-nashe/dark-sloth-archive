import { readFile, stat } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import mammoth from "mammoth";
import { MarkdownPublicationParser } from "../parsing/MarkdownPublicationParser.js";
function decodeHtml(value) {
    return value
        .replace(/&nbsp;/gi, " ")
        .replace(/&amp;/gi, "&")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, '"')
        .replace(/&#39;/gi, "'");
}
function htmlToManuscript(html) {
    return decodeHtml(html
        .replace(/<h1[^>]*>(.*?)<\/h1>/gis, "# $1\n")
        .replace(/<h2[^>]*>(.*?)<\/h2>/gis, "## $1\n")
        .replace(/<h3[^>]*>(.*?)<\/h3>/gis, "### $1\n")
        .replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, "> $1\n")
        .replace(/<p[^>]*>(.*?)<\/p>/gis, "$1\n")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<li[^>]*>(.*?)<\/li>/gis, "- $1\n")
        .replace(/<[^>]+>/g, "")
        .replace(/\r/g, "")
        .replace(/[ \t]+\n/g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim());
}
async function firstExisting(paths) {
    for (const candidate of paths) {
        try {
            await stat(candidate);
            return candidate;
        }
        catch { }
    }
    return undefined;
}
async function loadJson(file) {
    if (!file) {
        return undefined;
    }
    return JSON.parse(await readFile(file, "utf8"));
}
export class RawManuscriptLoader {
    parser = new MarkdownPublicationParser();
    async load(source) {
        const sourceStat = await stat(source);
        const root = sourceStat.isDirectory()
            ? source
            : dirname(source);
        const manuscriptPath = sourceStat.isDirectory()
            ? await firstExisting([
                join(source, "manuscript.md"),
                join(source, "manuscript.docx"),
                join(source, "manuscript.txt")
            ])
            : source;
        if (!manuscriptPath) {
            throw new Error(`No manuscript found in ${source}. Expected manuscript.md, manuscript.docx, or manuscript.txt.`);
        }
        const stem = basename(manuscriptPath, extname(manuscriptPath));
        const metadataPath = await firstExisting([
            join(root, "publication.json"),
            join(root, "metadata.json"),
            join(root, `${stem}.publication.json`),
            join(root, `${stem}.json`)
        ]);
        const metadata = await loadJson(metadataPath);
        const manifest = await loadJson(await firstExisting([
            join(root, "manifest.json")
        ]));
        const extension = extname(manuscriptPath).toLowerCase();
        let manuscript;
        if (extension === ".docx") {
            const result = await mammoth.convertToHtml({
                path: manuscriptPath
            });
            manuscript =
                htmlToManuscript(result.value);
        }
        else {
            manuscript =
                await readFile(manuscriptPath, "utf8");
        }
        const publication = this.parser.parse(manuscript);
        publication.metadata = {
            ...publication.metadata,
            ...(metadata ?? {})
        };
        publication.source = {
            root
        };
        publication.manifest =
            manifest;
        if (!publication.metadata.title ||
            publication.metadata.title ===
                "Untitled Publication") {
            publication.metadata.title =
                stem
                    .replace(/[-_]+/g, " ")
                    .trim();
        }
        return publication;
    }
}
//# sourceMappingURL=RawManuscriptLoader.js.map