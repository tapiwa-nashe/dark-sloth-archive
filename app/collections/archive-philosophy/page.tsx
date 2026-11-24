import CollectionDetail from "@/components/CollectionDetail";
import { collections } from "@/lib/collections";

const collection = collections.find((item) => item.id === "COLLECTION_002")!;

export default function ArchivePhilosophyPage() {
  return <CollectionDetail {...collection} />;
}
