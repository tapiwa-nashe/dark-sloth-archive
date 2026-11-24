import CollectionDetail from "@/components/CollectionDetail";
import { collections } from "@/lib/collections";

const collection = collections.find((item) => item.id === "COLLECTION_001")!;

export default function FoundationalHistoryPage() {
  return <CollectionDetail {...collection} />;
}
