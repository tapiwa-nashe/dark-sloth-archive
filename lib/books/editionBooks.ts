import { getPublicEditionRegistry } from "@/lib/publishing/registry";

export type ArchiveBook = {
  id: string;
  title: string;
  status: string;
  engine: string;
  collection: string;
  records: unknown[];
  outputs: string[];
};

export function getArchiveBooks(): ArchiveBook[] {
  return getPublicEditionRegistry().map(edition => ({
    id: edition.id,
    title: edition.title,
    status: edition.status,
    engine: edition.engine,
    collection: edition.collection,
    records: edition.records,
    outputs: edition.outputs,
  }));
}
