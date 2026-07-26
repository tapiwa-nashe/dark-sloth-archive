import {
  ArchiveEditionProfile
} from "../profiles/archiveEdition";


export function renderArchiveMarkdown(
  document:{
    title:string;

    author:string;

    metadata:{
      recoveryRecord?:string;
      status?:string;
      classification?:string;
    };

    chapters:{
      title:string;
      content:string;
    }[];
  }
){

  let output = "";



  // Title Page

  if (
    ArchiveEditionProfile.titlePage.showTitle
  ) {

    output +=
`
# ${document.title}

`;

  }



  if (
    ArchiveEditionProfile.titlePage.showAuthor
  ) {

    output +=
`
${document.author}

`;

  }



  output +=
`
${ArchiveEditionProfile.chapter.separator}

`;



  // Metadata

  output +=
`
## ${ArchiveEditionProfile.metadata.label}

`;



  if (
    document.metadata.recoveryRecord
  ) {

    output +=
`
${document.metadata.recoveryRecord}

`;

  }


  if (
    document.metadata.status
  ) {

    output +=
`
${document.metadata.status}

`;

  }


  if (
    document.metadata.classification
  ) {

    output +=
`
${document.metadata.classification}

`;

  }



  // Chapters

  document.chapters.forEach(
    (chapter,index)=>{


      output +=
`

${ArchiveEditionProfile.chapter.separator}


# ${ArchiveEditionProfile.chapter.prefix} ${index + 1}

## ${chapter.title}


${chapter.content}


`;

    }
  );



  return output.trim();

}
