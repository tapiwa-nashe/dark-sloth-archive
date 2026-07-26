import type { LayoutBlock } from "../layout/LayoutBlock.js";
import type { BlockRenderer } from "./BlockRenderer.js";
export declare class RendererRegistry {
    private readonly renderers;
    constructor(renderers: BlockRenderer[]);
    rendererFor(block: LayoutBlock): BlockRenderer;
}
