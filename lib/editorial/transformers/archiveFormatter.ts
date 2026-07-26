import type {
  ArchiveDocument
} from "../models/document";


export function formatArchiveEdition(
  manuscript:{
    title:string;
    content:string;
  }
):ArchiveDocument {


  let content =
    manuscript.content
      .replace(
        /^Title:.*$/im,
        ""
      )
      .trim();



  const lines =
    content.split("\n");



  const recoveryRecord =
    content.match(
      /^Recovery Record:.*$/im
    )?.[0];



  const status =
    content.match(
      /^STATUS:.*$/im
    )?.[0];



  const classification =
    content.match(
      /^CLASSIFICATION:.*$/im
    )?.[0];



  const chapterMatches =
    content.split(
      /(?=^CHAPTER\s|^Chapter\s)/im
    );



  const chapters =
    chapterMatches
      .map(
        section => {

          const sectionLines =
            section
              .trim()
              .split("\n");


          const title =
            sectionLines.shift()
              ?.trim()
            ??
            "Untitled Chapter";


          return {

            title,

            content:
              sectionLines
                .join("\n")
                .trim()

          };

        }
      )
      .filter(
        chapter =>
          chapter.content.length > 0
      );



  return {

    title:
      manuscript.title
        .replace(
          /^Title:\s*/i,
          ""
        )
        .trim(),


    author:
      "Tapiwa Ndoro",


    metadata:{

      recoveryRecord,

      status,

      classification

    },


    chapters

  };

}
