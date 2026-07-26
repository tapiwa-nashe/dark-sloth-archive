export interface PublicationBlueprint {
    publicationId: string;
    title: string;
    chapters: {
        id: string;
        number: number;
        title: string;
    }[];
}
