import {
  PublishingStudio,
  MarkdownPublicationParser
} from "@/lib/publishing/publishingStudio";


type ArchiveManuscript = {

  id:string;

  title:string;

  status:string;

  createdAt:string;

  content:string;

};


export function createPublishingPreview(
  manuscript:ArchiveManuscript
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


  const studio =
    new PublishingStudio(
      publication
    );


  return studio.renderTree();

}
