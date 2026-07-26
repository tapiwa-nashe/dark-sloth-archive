export interface Identity {

  id: string;

  canonicalId: string;

  primaryName: string;

  aliases: string[];

  entityIds: string[];

  references: {
    value: string;
    sourceRecordId: string;
    createdAt: string;
  }[];

  confidence: number;

  createdAt: string;

  updatedAt: string;

}
