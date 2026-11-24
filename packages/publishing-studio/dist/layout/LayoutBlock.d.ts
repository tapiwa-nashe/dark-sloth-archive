export type LayoutBlock = {
    type: "title";
    text: string;
} | {
    type: "heading";
    level: 1 | 2;
    text: string;
} | {
    type: "chapterHeading";
    text: string;
    chapterNumber?: number;
} | {
    type: "recoveryMarker";
    text: string;
    chapterNumber?: number;
} | {
    type: "openingQuestion";
    text: string;
} | {
    type: "paragraph";
    text: string;
} | {
    type: "toc";
    title: string;
    entries: {
        title: string;
        level: number;
    }[];
} | {
    type: "quote";
    text: string;
    attribution?: string;
} | {
    type: "image";
    src: string;
    caption?: string;
} | {
    type: "table";
    headers: string[];
    rows: string[][];
} | {
    type: "code";
    language?: string;
    text: string;
} | {
    type: "pageBreak";
};
