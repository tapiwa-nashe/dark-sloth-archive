export interface RenderNode {
    id: string;
    type: "page" | "part" | "heading" | "text";
    content?: string;
}
export interface RenderTree {
    nodes: RenderNode[];
}
