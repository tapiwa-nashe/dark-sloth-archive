import type {
  ArchiveDocument
} from "../models/document";


export function renderArchivePdfData(
  document:ArchiveDocument
){

  return {

    title:
      document.title,


    author:
      document.author,


    chapters:
      document.chapters.length,


    pages:

      document.chapters.map(
        chapter=>({

          title:
            chapter.title,

          content:
            chapter.content

        })
      )

  };

}
