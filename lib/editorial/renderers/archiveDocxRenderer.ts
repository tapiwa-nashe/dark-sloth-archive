import type {
  ArchiveDocument
} from "../models/document";


export function renderArchiveDocxData(
  document:ArchiveDocument
){

  return {

    title:
      document.title,


    author:
      document.author,


    metadata:
      document.metadata,


    chapters:
      document.chapters.map(
        (chapter,index)=>({

          number:
            index + 1,

          title:
            chapter.title,

          content:
            chapter.content

        })
      )

  };

}
