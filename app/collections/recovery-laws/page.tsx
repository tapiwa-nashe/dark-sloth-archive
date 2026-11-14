import CollectionDetail from "@/components/CollectionDetail";
import { collections } from "@/lib/collections";

const collection = collections.find((item) => item.id === "COLLECTION_003")!;

export default function RecoveryLawsPage() {
  return <CollectionDetail {...collection} />;
}
