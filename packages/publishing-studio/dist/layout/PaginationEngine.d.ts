import type { LayoutDocument } from "./LayoutDocument.js";
import type { PageDocument } from "./PageDocument.js";
export declare class PaginationEngine {
    private readonly maxBlocksPerPage;
    paginate(document: LayoutDocument): PageDocument[];
}
