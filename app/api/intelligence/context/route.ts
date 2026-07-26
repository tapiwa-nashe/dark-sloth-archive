import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  reconstructContext
} from "@/lib/intelligence/archiveGraphBridge";



export async function GET(
  request: NextRequest
) {


  const { searchParams } =
    new URL(
      request.url
    );


  const canonicalId =
    searchParams.get(
      "canonicalId"
    );



  if (!canonicalId) {

    return NextResponse.json({

      error:
        "canonicalId required"

    });

  }



  const context =
    reconstructContext(
      canonicalId
    );



  return NextResponse.json(
    context
  );

}
