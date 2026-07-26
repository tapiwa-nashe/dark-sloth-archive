export function publicationFilename(title) {
    return title
        .trim()
        .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
        .replace(/\s+/g, "-");
}
//# sourceMappingURL=filename.js.map