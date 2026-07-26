import type { Publication } from "../models/Publication.js";
export declare class PublicationOutput {
    readonly markdown: Promise<string>;
    readonly docx: Promise<string>;
    readonly pdf: Promise<string>;
    readonly report: Promise<string>;
    readonly log: Promise<string>;
    constructor(markdown: Promise<string>, docx: Promise<string>, pdf: Promise<string>, report: Promise<string>, log: Promise<string>);
    static from(publication: Publication): PublicationOutput;
}
