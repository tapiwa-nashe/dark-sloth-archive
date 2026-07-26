import type {
  ArchiveDocument
} from "../models/document";


export function buildArchiveTree(
  document:ArchiveDocument
){

  return {

    nodes:[

      {
        type:"heading",
        content:
          document.title
      },


      {
        type:"text",
        content:
          document.author
      },


      {
        type:"part",
        content:
          "ARCHIVE RECORD"
      },


      {
        type:"text",
        content:
          document.metadata.classification ?? ""
      },


      ...document.chapters.flatMap(
        chapter => [

          {
            type:"part",

            content:
              chapter.title

          },


          {
            type:"text",

            content:
              chapter.content

          }

        ]
      )

    ]

  };

}
