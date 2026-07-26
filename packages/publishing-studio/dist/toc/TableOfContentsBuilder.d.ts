import type { Publication } from "../models/Publication.js";
import type { LayoutBlock } from "../layout/LayoutBlock.js";
export declare class TableOfContentsBuilder {
    build(publication: Publication): LayoutBlock;
}
