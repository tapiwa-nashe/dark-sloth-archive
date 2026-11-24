export interface Chapter {
    id: string;
    number: number;
    title: string;
    recovery?: string;
    openingQuestion?: string;
    content: string;
    words: number;
    part?: string;
}
