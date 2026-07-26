import { v4 as uuid } from "uuid";
import { generateCanonicalId } from "../ids/idGenerator.js";

export type EntityType =
  | "PERSON"
  | "ORGANIZATION"
  | "PROJECT"
  | "DOCUMENT"
  | "CONCEPT"
  | "PLACE"
  | "EVENT"
  | "ARTIFACT"
  | "BOOK"
  | "COLLECTION"
  | "NODE"
  | "RECOVERY";

export interface Entity {
  id: string;
  canonicalId: string;
  type: EntityType;
  name: string;
  aliases: string[];
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export function createEntity(
  type: EntityType,
  name: string,
  aliases: string[] = [],
  description?: string
): Entity {
  return {
    id: uuid(),
    canonicalId: generateCanonicalId(type),
    type,
    name,
    aliases,
    description,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
