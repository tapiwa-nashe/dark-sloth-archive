export interface PublicationManifest {
    version: string;
    outputs: string[];
    frontMatter: boolean;
    copyright: boolean;
    dedication: boolean;
    preface: boolean;
}
