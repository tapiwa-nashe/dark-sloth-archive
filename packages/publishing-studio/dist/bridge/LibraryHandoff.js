import { stat, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
function slugify(value) {
    return value
        .normalize("NFKD")
        .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
}
function readerProfileForSeries(series) {
    if (series ===
        "Dark Sloth Codex") {
        return "codex";
    }
    if (series ===
        "Dissolution Cycle Series") {
        return "field-log";
    }
    return "archive-document";
}
export async function createLibraryPublicationHandoff(publication, outputDirectory) {
    const series = publication.metadata.series?.trim();
    const volume = publication.metadata.volume?.trim();
    if (!series) {
        throw new Error(`Publication "${publication.metadata.title}" has no series. Add "series" to publication.json/metadata.json.`);
    }
    if (!volume) {
        throw new Error(`Publication "${publication.metadata.title}" has no volume. Add "volume" to publication.json/metadata.json.`);
    }
    if (publication.chapters.length === 0) {
        throw new Error("A publication must contain at least one chapter before it can enter the Library.");
    }
    const id = publication.metadata.id?.trim() ||
        slugify(publication.metadata.title);
    const sourceRoot = publication.source?.root;
    const cover = publication.metadata.cover;
    const coverSource = sourceRoot && cover
        ? resolve(sourceRoot, cover)
        : undefined;
    if (coverSource) {
        try {
            await stat(coverSource);
        }
        catch {
            throw new Error(`Cover file does not exist: ${coverSource}`);
        }
    }
    const handoff = {
        schemaVersion: "1.0",
        id,
        title: publication.metadata.title,
        series,
        volume,
        hierarchy: publication.metadata.hierarchy ??
            "standalone",
        parentId: publication.metadata.parentId,
        readerProfile: publication.metadata.readerProfile ??
            readerProfileForSeries(series),
        source: sourceRoot ??
            publication.metadata.title,
        coverSource,
        chapters: publication.chapters.map(chapter => ({
            id: chapter.id,
            title: chapter.title,
            kind: "chapter",
            content: chapter.content
        }))
    };
    const target = join(outputDirectory, "library-publication.json");
    await writeFile(target, JSON.stringify(handoff, null, 2) + "\n", "utf8");
    return target;
}
//# sourceMappingURL=LibraryHandoff.js.map