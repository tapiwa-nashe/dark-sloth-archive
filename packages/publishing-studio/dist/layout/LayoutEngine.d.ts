import type { BookDocument } from "../book/BookDocument.js";
import type { LayoutDocument } from "./LayoutDocument.js";
export declare class LayoutEngine {
    build(book: BookDocument): LayoutDocument;
}
