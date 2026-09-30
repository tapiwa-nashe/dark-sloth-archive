import type {
  ArchiveDocument
} from "../models/document";


export function formatArchiveEdition(
  manuscript:{
    title:string;
    content:string;
  }
):ArchiveDocument {


  const content =
    manuscript.content
      .replace(
        /^Title:.*$/im,
        ""
      )
      .trim();



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



  const chapterSections =
    content
      .split(
        /(?=^CHAPTER\s+\d+)/im
      )
      .filter(
        section =>
          section.trim()
      );



  const chapters =
    chapterSections.map(
      (section,index)=>{


        const lines =
          section
            .trim()
            .split("\n")
            .map(
              line =>
                line.trim()
            )
            .filter(Boolean);



        const chapterLine =
          lines.shift()
          ??
          `CHAPTER ${index + 1}`;



        const number =
          Number(
            chapterLine
              .match(/\d+/)?.[0]
          )
          ||
          index + 1;



        const recoveryIndex =
          lines.findIndex(
            line =>
              /^#+\s*Recovery\s+/i.test(line)
          );



        const recovery =
          recoveryIndex >= 0
            ? lines[recoveryIndex]
            : undefined;



        if(recoveryIndex >= 0){

          lines.splice(
            recoveryIndex,
            1
          );

        }



        const titleIndex =
          lines.findIndex(
            line =>
              /^#+\s*(?!Recovery|Opening Question)/i.test(line)
          );



        const title =
          titleIndex >= 0
            ? lines[titleIndex]
                .replace(/^#+\s*/,"")
            : "Untitled Chapter";



        if(titleIndex >= 0){

          lines.splice(
            titleIndex,
            1
          );

        }



        const openingIndex =
          lines.findIndex(
            line =>
              /^#+\s*Opening Question/i.test(line)
          );



        let openingQuestion:string|undefined;



        if(openingIndex >= 0){

          openingQuestion =
            lines
              .slice(
                openingIndex + 1,
                openingIndex + 2
              )
              .join("");

          lines.splice(
            openingIndex,
            2
          );

        }



        return {

          number,

          title,

          recovery,

          openingQuestion,

          content:
            lines.join("\n\n")

        };


      }
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
