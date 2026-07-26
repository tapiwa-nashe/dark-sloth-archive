import {
  publishArchiveCollection
} from "@/lib/publishing/archivePublisher";


export async function GET(
  request: Request,
  context: {
    params: Promise<{
      collection: string;
    }>;
  }
) {

  const {
    collection
  } = await context.params;


  const decoded =
    decodeURIComponent(
      collection
    );


  const outputs =
    await publishArchiveCollection(
      decoded
    );


  return Response.json({

    success: true,

    collection: decoded,

    outputs

  });

}
