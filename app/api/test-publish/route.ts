import {
  publishCollection
} from "@/lib/publishing/archivePublisher";

export async function GET() {

  const outputs =
    await publishCollection(
      "ARCHIVE PHILOSOPHY"
    );

  return Response.json({
    success: true,
    outputs
  });

}
