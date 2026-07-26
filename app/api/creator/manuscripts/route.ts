import {
  NextResponse
} from "next/server";

import fs from "node:fs";
import path from "node:path";


const manuscriptRoot =
  path.join(
    process.cwd(),
    "data",
    "manuscripts"
  );


function ensureStorage() {

  if (
    !fs.existsSync(manuscriptRoot)
  ) {

    fs.mkdirSync(
      manuscriptRoot,
      {
        recursive:true
      }
    );

  }

}


export async function POST(
  request: Request
) {

  ensureStorage();


  const body =
    await request.json();


  const title =
    body.title?.trim();


  const content =
    body.content?.trim();


  if (
    !title ||
    !content
  ) {

    return NextResponse.json(
      {
        error:
          "Title and manuscript content are required."
      },
      {
        status:400
      }
    );

  }


  const id =
    `MANUSCRIPT-${Date.now()}`;


  const manuscript = {

    id,

    title,

    status:
      "DRAFT",

    content,

    createdAt:
      new Date()
        .toISOString()

  };


  const filename =
    `${id}.json`;


  fs.writeFileSync(
    path.join(
      manuscriptRoot,
      filename
    ),
    JSON.stringify(
      manuscript,
      null,
      2
    )
  );


  return NextResponse.json(
    {
      success:true,
      manuscript
    }
  );

}
