export type EvidenceType = "DOCUMENT" | "USER" | "AI_EXTRACTION" | "IMPORT";
export interface Evidence {
    id: string;
    type: EvidenceType;
    source: string;
    confidence: number;
    createdAt: Date;
}
export declare function createEvidence(type: EvidenceType, source: string, confidence: number): Evidence;
