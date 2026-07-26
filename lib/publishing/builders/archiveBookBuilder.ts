import {
  ArchivePublicationProfile
} from "../profiles/archivePublication";


export function buildArchiveBook(
  publication:any
){

  return {

    publication,


    profile:{

      theme:
        ArchivePublicationProfile.theme

    },


    book:{

      sections:[

        {

          type:
            "title",

          title:
            publication.metadata.title,

          content:
            publication.metadata.author

        },


        ...publication.chapters.map(
          (chapter:any)=>({

            type:
              "chapter",

            title:
              chapter.title,

            content:
              chapter.content

          })
        )

      ]

    }

  };

}
