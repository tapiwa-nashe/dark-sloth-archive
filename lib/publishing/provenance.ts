import {
  records
} from "@/lib/records";


export function resolveCollectionRecords(
  collection: string
) {

  return records
    .filter(
      record =>
        record.collection === collection
    )
    .map(
      record => ({

        id:
          record.id,

        title:
          record.title,

        classification:
          record.classification,

        status:
          record.status

      })
    );

}
