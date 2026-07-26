import {
  NextResponse
} from "next/server";


import {
  recallIntelligence
} from "@/lib/intelligence/recall";


export async function GET(
  request:Request
) {


  const {
    searchParams
  } =
    new URL(
      request.url
    );


  const subject =
    searchParams.get(
      "subject"
    );


  if (!subject) {

    return NextResponse.json(
      {
        error:
          "subject required"
      },
      {
        status:400
      }
    );

  }



  return NextResponse.json(
    recallIntelligence(
      subject
    )
  );

}
