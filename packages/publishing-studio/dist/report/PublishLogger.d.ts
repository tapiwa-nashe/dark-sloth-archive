import type { PublicationPackage } from "../package/PublicationPackage.js";
export declare class PublishLogger {
    write(publication: PublicationPackage, outputs: string[]): Promise<void>;
}
