import type { PublicationPackage } from "../package/PublicationPackage.js";
export interface Exporter {
    export(publication: PublicationPackage): Promise<unknown>;
}
