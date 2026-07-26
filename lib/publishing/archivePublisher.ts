import {
  createPublicationRunner,
  MemoryPublicationLoader,
  MarkdownRenderer,
  ExportManager,
  MarkdownExporter,
  DocxExporter,
  PdfExporter,
  PublicationRunner,
} from "publishing-studio";

import {
  records
} from "@/lib/records";

import {
  getRecordContent
} from "@/lib/archive";

import {
  writeEditionManifest
} from "./writeManifest";


export async function publishCollection(
  collection: string
) {

  const collectionRecords =
    records.filter(
      record =>
        record.collection === collection
    );


  const publication = {

    id:
      `collection-${collection
        .toLowerCase()
        .replace(/\s+/g, "-")}`,

    metadata: {

      title:
        collection,

      author:
        "Dark Sloth Archive",

      edition:
        "1.0",

      language:
        "en",

      current:
        "true"

    },

    chapters:
      collectionRecords.map(
        (record, index) => {

          const source =
            getRecordContent(
              record.id
            );


          return {

            id:
              `record-${record.id}`,

            number:
              index + 1,

            title:
              record.title,

            content:
              source.content,

            words:
              source.content
                .split(/\s+/)
                .filter(Boolean)
                .length

          };

        }
      )

  };


  console.log("Publication chapters:", publication.chapters.length);

  console.log(
    "Publication title:",
    publication.metadata.title
  );

  const runner =
    new PublicationRunner(

      new MemoryPublicationLoader(
        publication
      ),

      new MarkdownRenderer(),

      new ExportManager([

        new MarkdownExporter(),

        new DocxExporter(),

        new PdfExporter()

      ])

    );


  const outputs =
    await runner.publish(
      publication.id
    );


  writeEditionManifest(

    collection,

    collection,

    collectionRecords.map(
      record =>
        record.id
    ),

    outputs

  );


  return outputs;

}


export async function publishArchiveCollection(
  collection: string
) {

  return publishCollection(
    collection
  );

}
