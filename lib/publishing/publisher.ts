import {
  publishCollection
} from "./archivePublisher";


export async function publishArchiveCollection(
  collection: string
) {

  return publishCollection(
    collection
  );

}
