import type { LayoutBlock } from "../layout/LayoutBlock.js";
import type { RenderContext } from "./RenderContext.js";
export interface BlockRenderer {
    supports(block: LayoutBlock): boolean;
    render(block: LayoutBlock, context: RenderContext): void | Promise<void>;
}
