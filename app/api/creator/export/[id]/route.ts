import {
  NextResponse
} from "next/server";


import {
  manuscriptToPublication
} from "@/lib/manuscripts/adapter";


import {
  PublicationRunner,
  MemoryPublicationLoader,
  MarkdownRenderer,
  PublicationPipeline,
  ExportManager,
  MarkdownExporter,
  DocxExporter,
  PdfExporter
} from "publishing-studio";



export async function GET(
  request:Request,
  {
    params
  }:{
    params:Promise<{
      id:string
    }>
  }
) {

  const {
    id
  } =
    await params;


  const publication =
    manuscriptToPublication(
      id
    );




  if(!publication){

    return NextResponse.json(
      {
        error:"Manuscript not found"
      },
      {
        status:404
      }
    );

  }


  const pipeline =
    new PublicationPipeline(
      publication
    );




  const runner =
    new PublicationRunner(

      new MemoryPublicationLoader(
        publication
      ),

      new MarkdownRenderer(),

      new ExportManager([

        new MarkdownExporter(),

        new DocxExporter(),

        new PdfExporter()

      ])

    );


  const outputs =
    await runner.publish(
      publication.id
    );


  return NextResponse.json(
    {
      success:true,
      manuscript:id,
      outputs
    }
  );

}
