import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  createInterpretation
} from "@/lib/intelligence/interpretationBuilder";



export async function GET(
  request: NextRequest
) {
  if (process.env.NODE_ENV === "production") {
    return new Response(null, { status: 404 });
  }



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

    createInterpretation(
      canonicalId
    )

  );

}
