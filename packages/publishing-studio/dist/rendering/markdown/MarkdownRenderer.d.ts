import type { Renderer } from "../Renderer.js";
import type { RenderTree } from "../../pipeline/RenderTree.js";
export declare class MarkdownRenderer implements Renderer {
    render(tree: RenderTree): Promise<string>;
}
