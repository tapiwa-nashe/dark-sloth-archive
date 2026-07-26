import type { PublicationLoader } from "../input/PublicationLoader.js";
import type { Renderer } from "../rendering/Renderer.js";
import type { ExportManager } from "../export/ExportManager.js";
export declare class PublicationRunner {
    private readonly loader;
    private readonly renderer;
    private readonly exporter;
    private readonly reporter;
    private readonly logger;
    private readonly frontMatterLoader;
    private readonly manifestLoader;
    private readonly assembler;
    private readonly layoutEngine;
    constructor(loader: PublicationLoader, renderer: Renderer, exporter: ExportManager);
    publish(source: unknown): Promise<string[]>;
}
