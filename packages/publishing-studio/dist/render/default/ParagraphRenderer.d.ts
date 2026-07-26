import type { LayoutBlock } from "../../layout/LayoutBlock.js";
import type { RenderContext } from "../RenderContext.js";
import type { BlockRenderer } from "../BlockRenderer.js";
export declare class ParagraphRenderer implements BlockRenderer {
    supports(block: LayoutBlock): boolean;
    render(block: LayoutBlock, context: RenderContext): void;
}
