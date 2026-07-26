export interface DocumentNode {
    id: string;
    type: "document" | "chapter" | "section" | "paragraph";
    children?: DocumentNode[];
    content?: string;
}
export interface DocumentTree {
    root: DocumentNode;
}
