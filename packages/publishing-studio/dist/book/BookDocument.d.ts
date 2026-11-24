export interface BookSection {
    type: "title" | "copyright" | "dedication" | "preface" | "toc" | "chapterStart" | "chapterContent" | "recovery" | "openingQuestion" | "acknowledgements" | "aboutAuthor";
    title?: string;
    content: string;
    chapterNumber?: number;
}
export interface BookDocument {
    sections: BookSection[];
}
