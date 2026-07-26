import {
  NextRequest,
  NextResponse
} from "next/server";

import fs from "node:fs";
import path from "node:path";


export async function GET(
  request: NextRequest,
  context: {
    params: Promise<{
      edition: string;
      file: string;
    }>
  }
) {

  const {
    edition,
    file
  } =
    await context.params;


  const decodedEdition =
    decodeURIComponent(
      edition
    );


  const decodedFile =
    decodeURIComponent(
      file
    );


  const filePath =
    path.join(
      process.cwd(),
      "output",
      decodedEdition,
      decodedFile
    );


  if (!fs.existsSync(filePath)) {

    return NextResponse.json(
      {
        error: "Artifact not found"
      },
      {
        status: 404
      }
    );

  }


  const buffer =
    fs.readFileSync(
      filePath
    );


  let contentType =
    "application/octet-stream";


  if (
    decodedFile.endsWith(".pdf")
  ) {

    contentType =
      "application/pdf";

  }


  if (
    decodedFile.endsWith(".md")
  ) {

    contentType =
      "text/markdown";

  }


  if (
    decodedFile.endsWith(".docx")
  ) {

    contentType =
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  }


  return new NextResponse(
    buffer,
    {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition":
          `inline; filename="${decodedFile}"`
      }
    }
  );

}
