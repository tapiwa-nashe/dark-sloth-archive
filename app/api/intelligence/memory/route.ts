import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  queryInterpretations
} from "@/lib/intelligence/interpretationQuery";


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



  const interpretations =
    queryInterpretations(
      canonicalId ?? undefined
    );



  return NextResponse.json({

    count:
      interpretations.length,

    interpretations

  });

}
