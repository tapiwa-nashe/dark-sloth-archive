import type {
  ArchiveDocument
} from "../models/document";


import {
  ArchiveEditionProfile
} from "../profiles/archiveEdition";



export function archiveDocumentToPublication(
  document:ArchiveDocument
){

  const archiveMetadata = [

    `Recovery Record: ${
      document.metadata.recoveryRecord ??
      "UNASSIGNED"
    }`,


    `STATUS: ${
      document.metadata.status ??
      "UNCLASSIFIED"
    }`,


    `CLASSIFICATION: ${
      document.metadata.classification ??
      "ARCHIVE RECORD"
    }`

  ]
    .join("\n");



  const closingRecord =

    ArchiveEditionProfile.closing.enabled

      ? "END OF ARCHIVE RECORD"

      : "";



  const chapters = [

    {

      id:
        "archive-record",


      number:
        0,


      part:
        ArchiveEditionProfile.metadata.label,


      title:
        ArchiveEditionProfile.metadata.label,


      content:
        archiveMetadata,


      words:
        archiveMetadata
          .split(/\s+/)
          .filter(Boolean)
          .length

    },


    ...document.chapters.map(
      (
        chapter,
        index
      ) => ({

        id:
          `chapter-${index + 1}`,


        number:
          index + 1,


        part:
          ArchiveEditionProfile.chapter.prefix,


        title:
          chapter.title,


        content:
          chapter.content,


        words:
          chapter.content
            .split(/\s+/)
            .filter(Boolean)
            .length

      })
    ),


    {

      id:
        "closing-record",


      number:
        document.chapters.length + 1,


      part:
        "CLOSING",


      title:
        "FINAL RECOVERY NOTE",


      content:
        closingRecord,


      words:
        closingRecord
          .split(/\s+/)
          .filter(Boolean)
          .length

    }

  ];



  return {

    id:
      document.title
        .toLowerCase()
        .replace(/\s+/g,"-"),


    metadata:{

      title:
        document.title,


      author:
        document.author,


      edition:
        ArchiveEditionProfile.version,


      language:
        "en",


      current:
        "true"

    },


    chapters

  };

}
