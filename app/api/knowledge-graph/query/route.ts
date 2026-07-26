import {
  NextRequest,
  NextResponse
} from "next/server";

import {
  getGraphQueryEngine
} from "@/lib/knowledge-graph/runtimeQuery";



export async function GET(
  request: NextRequest
) {

  const engine =
    getGraphQueryEngine();


  const { searchParams } =
    new URL(
      request.url
    );


  const action =
    searchParams.get(
      "action"
    );



  if (
    action === "entity"
  ) {

    const id =
      searchParams.get(
        "id"
      );


    return NextResponse.json(

      engine.findEntity(
        id ?? ""
      )

    );

  }




  if (
    action === "connections"
  ) {

    const id =
      searchParams.get(
        "id"
      );


    return NextResponse.json(

      engine.findConnections(
        id ?? ""
      )

    );

  }




  if (
    action === "references"
  ) {

    const id =
      searchParams.get(
        "id"
      );


    return NextResponse.json(

      engine.findReferences(
        id ?? ""
      )

    );

  }




  if (
    action === "type"
  ) {

    const type =
      searchParams.get(
        "type"
      );


    return NextResponse.json(

      engine.findByType(
        type as any
      )

    );

  }




  if (
    action === "trace"
  ) {

    const canonicalId =
      searchParams.get(
        "canonicalId"
      );


    return NextResponse.json(

      engine.traceIdentity(
        canonicalId ?? ""
      )

    );

  }



  return NextResponse.json({

    availableActions: [

      "entity",

      "connections",

      "references",

      "type",

      "trace"

    ]

  });


}
