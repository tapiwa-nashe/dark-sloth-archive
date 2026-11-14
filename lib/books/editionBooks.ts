import { getPublicEditionRegistry } from "@/lib/publishing/registry";

export type ArchiveBook = {
  id: string;
  title: string;
  collection: string;
  status: string;
  engine: string;
  records: any[];
  outputs: string[];
};

export function getArchiveBooks(): ArchiveBook[] {
  return getPublicEditionRegistry().map(edition => ({
    id: edition.id,
    title: edition.title,
    collection: edition.collection,
    status: edition.status,
    engine: edition.engine,
    records: edition.records,
    outputs: edition.outputs,
  }));
}
