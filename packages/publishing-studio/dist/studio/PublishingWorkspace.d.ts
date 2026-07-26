import type { Publication } from "../models/Publication.js";
export declare class PublishingWorkspace {
    private publication;
    constructor(publication: Publication);
    getPublication(): Publication;
    updateTitle(title: string): this;
    updateChapter(id: string, content: string): this;
}
