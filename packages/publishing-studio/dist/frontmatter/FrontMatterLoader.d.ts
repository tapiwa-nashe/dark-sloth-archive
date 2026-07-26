import type { FrontMatter } from "./FrontMatter.js";
export declare class FrontMatterLoader {
    load(root: string): Promise<FrontMatter>;
}
