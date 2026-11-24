import {
  MarkdownPublicationParser,
  BookAssembler,
  LayoutEngine,
  PaginationEngine,
} from "@/lib/publishing/publishingStudio";


export function createArchiveBookPreview(
  manuscript:{
    id:string;
    title:string;
    content:string;
    status:string;
    createdAt:string;
  }
){

  const parser =
    new MarkdownPublicationParser();


  const publication =
    parser.parse(
      manuscript.content
    );


  publication.id =
    manuscript.id;


  publication.metadata.title =
    manuscript.title;


  publication.metadata.current =
    manuscript.status;



  const bookAssembler =
    new BookAssembler();


  const book =
    bookAssembler.assemble(
      publication,
      {
        titlePage:true,
        copyright:false,
        dedication:false,
        preface:false,
        acknowledgements:false,
        tableOfContents:true,
        headers:false,
        pageNumbers:true,
        appendix:false,
        glossary:false,
        aboutAuthor:false
      },
      {
        copyright:"",
        dedication:"",
        preface:""
      }
    );



  const layoutEngine =
    new LayoutEngine();


  const layout =
    layoutEngine.build(
      book
    );



  const paginationEngine =
    new PaginationEngine();


  return paginationEngine.paginate(
    layout
  );

}
