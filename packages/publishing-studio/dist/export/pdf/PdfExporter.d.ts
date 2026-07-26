import type { Exporter } from "../Exporter.js";
import type { PublicationPackage } from "../../package/PublicationPackage.js";
export declare class PdfExporter implements Exporter {
    private readonly renderer;
    export(publication: PublicationPackage): Promise<string>;
}
