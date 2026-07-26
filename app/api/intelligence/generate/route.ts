import {
  NextResponse
} from "next/server";


import {
  generateIntelligence
} from "@/lib/intelligence/intelligenceOrchestrator";


export async function GET(
  request: Request
) {

  const {
    searchParams
  } =
    new URL(
      request.url
    );


  const canonicalId =
    searchParams.get(
      "canonicalId"
    );


  if (!canonicalId) {

    return NextResponse.json(
      {
        error:
          "canonicalId required"
      },
      {
        status:400
      }
    );

  }


  const result =
    await generateIntelligence(
      canonicalId
    );


  return NextResponse.json(
    {
      generated:
        result.length,

      interpretations:
        result

    }
  );

}
