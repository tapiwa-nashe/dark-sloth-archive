import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  compareInterpretations
} from "@/lib/intelligence/interpretationEngine";


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


  return NextResponse.json(

    compareInterpretations(
      canonicalId
    )

  );

}
