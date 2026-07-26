export interface DocumentNode {
    id: string;
    type: "document" | "chapter" | "section" | "paragraph";
    content?: string;
    children?: DocumentNode[];
}
export interface DocumentTree {
    root: DocumentNode;
}
