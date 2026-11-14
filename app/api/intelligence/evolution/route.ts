import {
  NextResponse
} from "next/server";


import {
  getEvolutionHistory
} from "@/lib/intelligence/evolution";


export async function GET(
  request:Request
) {
  if (process.env.NODE_ENV === "production") {
    return new Response(null, { status: 404 });
  }



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
    {
      subject,

      history:
        getEvolutionHistory(
          subject
        )
    }
  );

}
