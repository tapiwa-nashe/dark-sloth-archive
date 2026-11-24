import fs from "node:fs";
import path from "node:path";

import { getPublicEditionRegistry } from "./registry";
import { resolveCollectionRecords } from "./provenance";

const outputRoot = path.join(process.cwd(), "output");

export function getEdition(edition: string) {
  const release = getPublicEditionRegistry().find(
    (item) => item.id === edition || item.title === edition,
  );
  if (!release) return null;

  const directory = path.join(outputRoot, release.directory);
  const resolvedDirectory = path.resolve(directory);
  if (!resolvedDirectory.startsWith(path.resolve(outputRoot) + path.sep)) return null;
  if (!fs.existsSync(directory) || !fs.statSync(directory).isDirectory()) return null;

  const metadataPath = path.join(directory, "publication.json");
  if (!fs.existsSync(metadataPath)) return null;

  try {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
    const manifestPath = path.join(directory, "manifest.json");
    const manifest = fs.existsSync(manifestPath)
      ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
      : null;

    const declaredOutputs = Array.isArray(metadata.publicOutputs)
      ? metadata.publicOutputs.filter((file: unknown): file is string =>
          typeof file === "string" &&
          ["pdf", "docx", "md"].includes(path.extname(file).slice(1).toLowerCase()),
        )
      : [];

    const files = declaredOutputs.filter((file: string) => {
      const resolved = path.resolve(directory, file);
      return resolved.startsWith(resolvedDirectory + path.sep) &&
        fs.existsSync(resolved) &&
        fs.statSync(resolved).isFile();
    });

    return {
      title: metadata.title,
      files,
      metadata,
      manifest,
      collection: metadata.collection ?? edition,
      records: resolveCollectionRecords(metadata.collection ?? edition),
    };
  } catch {
    return null;
  }
}
