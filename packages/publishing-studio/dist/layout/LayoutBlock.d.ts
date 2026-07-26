export type LayoutBlock = {
    type: "heading";
    level: 1 | 2;
    text: string;
} | {
    type: "paragraph";
    text: string;
} | {
    type: "quote";
    text: string;
    attribution?: string;
} | {
    type: "image";
    src: string;
    caption?: string;
    alt?: string;
} | {
    type: "code";
    language?: string;
    text: string;
} | {
    type: "table";
    headers: string[];
    rows: string[][];
} | {
    type: "toc";
    title: string;
    entries: {
        title: string;
        level: number;
    }[];
} | {
    type: "pageBreak";
};
