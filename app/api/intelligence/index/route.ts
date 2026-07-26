import {
  NextResponse
} from "next/server";


import {
  getIntelligenceIndex
} from "@/lib/intelligence";


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


  return NextResponse.json(
    getIntelligenceIndex(
      subject ?? undefined
    )
  );

}
