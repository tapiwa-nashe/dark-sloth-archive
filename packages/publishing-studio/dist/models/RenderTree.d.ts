export interface RenderNode {
    id: string;
    type: "page" | "text" | "heading";
    content?: string;
}
export interface RenderTree {
    nodes: RenderNode[];
}
