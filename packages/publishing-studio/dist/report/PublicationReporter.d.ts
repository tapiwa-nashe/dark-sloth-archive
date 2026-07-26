import type { PublicationPackage } from "../package/PublicationPackage.js";
export declare class PublicationReporter {
    write(publication: PublicationPackage, outputs: string[]): Promise<void>;
}
