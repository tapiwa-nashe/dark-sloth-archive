import CollectionDetail from "@/components/CollectionDetail";
import { collections } from "@/lib/collections";

const collection = collections.find((item) => item.id === "COLLECTION_005")!;

export default function DissolutionCyclePage() {
  return <CollectionDetail {...collection} />;
}
