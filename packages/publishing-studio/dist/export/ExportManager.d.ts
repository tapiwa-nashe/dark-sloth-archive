import type { Exporter } from "./Exporter.js";
import type { PublicationPackage } from "../package/PublicationPackage.js";
export declare class ExportManager {
    private readonly exporters;
    constructor(exporters: Exporter[]);
    export(publication: PublicationPackage): Promise<string[]>;
}
