import type {
  LayoutDocument
} from "@/lib/publishing/publishingStudio";


export type ArchivePage = {

  number:number;

  blocks:{
    type:string;
    content?:string;
    title?:string;
    entries?:{
      title:string;
      level:number;
    }[];
  }[];

};



export function composeArchivePages(
  document:LayoutDocument
):ArchivePage[] {


  const pages:ArchivePage[] = [];


  let currentPage:ArchivePage = {

    number:1,

    blocks:[]

  };


  for(
    const block of document.blocks
  ){

    if(
      block.type === "pageBreak"
    ){

      if(
        currentPage.blocks.length
      ){

        pages.push(
          currentPage
        );

      }


      currentPage = {

        number:
          pages.length + 1,

        blocks:[]

      };


      continue;

    }



    if(
      block.type === "toc"
    ){

      currentPage.blocks.push({

        type:"toc",

        title:block.title,

        entries:block.entries

      });


      continue;

    }



    if(
      block.type === "heading"
    ){

      currentPage.blocks.push({

        type:"heading",

        content:block.text

      });


      continue;

    }



    if(
      block.type === "paragraph"
    ){

      currentPage.blocks.push({

        type:"paragraph",

        content:block.text

      });

    }

  }



  if(
    currentPage.blocks.length
  ){

    pages.push(
      currentPage
    );

  }


  return pages;

}
