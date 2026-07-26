import type { Publication } from "../models/Publication.js";
import type { BookDocument } from "../book/BookDocument.js";
import type { LayoutDocument } from "../layout/LayoutDocument.js";
import type { RenderTree } from "../pipeline/RenderTree.js";
import type { PublicationOutput } from "../output/PublicationOutput.js";
import type { ExportProfile } from "../profile/ExportProfile.js";
export interface PublicationPackage {
    publication: Publication;
    book: BookDocument;
    layout: LayoutDocument;
    renderTree: RenderTree;
    markdown: string;
    output: PublicationOutput;
    profile: ExportProfile;
}
