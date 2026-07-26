import type { Exporter } from "../Exporter.js";
import type { PublicationPackage } from "../../package/PublicationPackage.js";
export declare class DocxExporter implements Exporter {
    export(publication: PublicationPackage): Promise<string>;
}
