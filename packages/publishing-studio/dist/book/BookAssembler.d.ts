import type { Publication } from "../models/Publication.js";
import type { FrontMatter } from "../frontmatter/FrontMatter.js";
import type { BookManifest } from "../manifest/BookManifest.js";
import type { BookDocument } from "./BookDocument.js";
export declare class BookAssembler {
    private readonly tocBuilder;
    assemble(publication: Publication, manifest: BookManifest, frontMatter: FrontMatter): BookDocument;
}
