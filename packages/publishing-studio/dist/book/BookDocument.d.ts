export interface BookSection {
    type: "title" | "copyright" | "dedication" | "preface" | "toc" | "chapter" | "acknowledgements" | "aboutAuthor";
    title?: string;
    content: string;
}
export interface BookDocument {
    sections: BookSection[];
}
