export interface TextStyle {
    font: string;
    size: number;
    bold?: boolean;
    italics?: boolean;
}
export interface Typography {
    title: TextStyle;
    heading1: TextStyle;
    heading2: TextStyle;
    body: TextStyle;
    toc: TextStyle;
}
