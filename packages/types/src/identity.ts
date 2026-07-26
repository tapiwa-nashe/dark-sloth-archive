export interface IdentityReference {

  value: string;

  sourceRecordId: string;

  createdAt: string;

}


export interface Identity {

  id: string;

  canonicalId: string;

  primaryName: string;

  aliases: string[];

  entityIds: string[];

  references: IdentityReference[];

  confidence: number;

  createdAt: string;

  updatedAt: string;

}
