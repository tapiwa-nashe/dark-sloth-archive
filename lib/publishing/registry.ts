import fs from "node:fs";
import path from "node:path";

import { evaluatePublicEligibility } from "@/lib/public-content/eligibility";
import type { PublicContentEnvelope } from "@/lib/public-content/contracts";
import { resolveCollectionRecords } from "./provenance";

const outputRoot = path.join(process.cwd(), "output");

export type EditionRecord = {
  title: string; collection: string; editionType: string; status: string;
  engine: string; chapters: number; records: any[]; outputs: string[];
};

export type PublicEditionRecord = {
  id: string; directory: string; title: string; collection: string; editionType: string;
  status: "PUBLISHED"; engine: string; chapters: number; records: any[];
  outputs: string[]; publishedAt: string;
};

function readPublicationMetadata(folder: string): Record<string, any> | null {
  const metadataPath = path.join(folder, "publication.json");
  if (!fs.existsSync(metadataPath)) return null;
  try {
    const parsed = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
  } catch { return null; }
}

/** Operational inventory only. Never use this as a public catalogue. */
export function getEditionRegistry(): EditionRecord[] {
  if (!fs.existsSync(outputRoot)) return [];
  return fs.readdirSync(outputRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const folder = path.join(outputRoot, entry.name);
      const metadata = readPublicationMetadata(folder) ?? {};
      const collection = metadata.collection ?? entry.name;
      return {
        title: metadata.title ?? entry.name, collection,
        editionType: "Archive Edition", status: metadata.status ?? "UNRELEASED",
        engine: "Publishing Studio V1", chapters: metadata.chapters ?? 0,
        records: resolveCollectionRecords(collection), outputs: fs.readdirSync(folder),
      };
    });
}

/** Legacy publishedAt-only manifests fail closed; explicit release envelope required. */
export function getPublicEditionRegistry(): PublicEditionRecord[] {
  if (!fs.existsSync(outputRoot)) return [];
  return fs.readdirSync(outputRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(entry => {
      const folder = path.join(outputRoot, entry.name);
      const metadata = readPublicationMetadata(folder);
      if (!metadata) return [];
      const eligibility = evaluatePublicEligibility(metadata as Partial<PublicContentEnvelope>);
      if (!eligibility.eligible || metadata.contentType !== "BOOK") return [];

      const declaredOutputs = Array.isArray(metadata.publicOutputs)
        ? metadata.publicOutputs.filter((value: unknown): value is string =>
            typeof value === "string" && path.basename(value) === value &&
            ["pdf", "docx", "md"].includes(path.extname(value).slice(1).toLowerCase()))
        : [];

      const outputs = declaredOutputs.filter((file: string) => {
        const resolved = path.resolve(folder, file);
        return resolved.startsWith(path.resolve(folder) + path.sep) &&
          fs.existsSync(resolved) && fs.statSync(resolved).isFile();
      });

      return [{
        id: metadata.slug, directory: entry.name, title: metadata.title,
        collection: metadata.collection ?? entry.name,
        editionType: "Archive Edition", status: "PUBLISHED" as const,
        engine: metadata.engine ?? "Publishing Studio",
        chapters: Number.isFinite(metadata.chapters) ? metadata.chapters : 0,
        records: resolveCollectionRecords(metadata.collection ?? entry.name),
        outputs, publishedAt: metadata.publishedAt,
      }];
    });
}

export function isPublicEdition(edition: string): boolean {
  return getPublicEditionRegistry().some(item => item.title === edition || item.id === edition);
}
