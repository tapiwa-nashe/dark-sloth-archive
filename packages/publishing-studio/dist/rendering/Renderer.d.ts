import type { RenderTree } from "../pipeline/RenderTree.js";
export interface Renderer {
    render(tree: RenderTree): Promise<string>;
}
