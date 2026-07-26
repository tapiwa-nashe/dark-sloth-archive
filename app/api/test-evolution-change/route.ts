import {
  NextResponse
} from "next/server";


import {
  loadGraphSnapshot,
  saveGraphSnapshot
} from "@/lib/knowledge-graph/store/graphStore";


import {
  createRelationship
} from "@dark-sloth/types";



export async function GET() {


  const snapshot:any =
    loadGraphSnapshot();



  const entity =
    snapshot.entities.find(
      (item:any) =>
        item.canonicalId === "CONCEPT_000001"
    );



  if (!entity) {

    return NextResponse.json(
      {
        error:
          "Entity not found"
      },
      {
        status:404
      }
    );

  }



  const recovery =
    snapshot.entities.find(
      (item:any) =>
        item.type === "RECOVERY"
    );



  if (!recovery) {

    return NextResponse.json(
      {
        error:
          "Recovery not found"
      },
      {
        status:404
      }
    );

  }



  const relationship =
    createRelationship(
      entity.id,
      recovery.id,
      "REFERENCES",
      1
    );



  snapshot.relationships.push(
    relationship
  );



  saveGraphSnapshot(
    snapshot
  );



  return NextResponse.json(
    {
      changed:true,
      relationship
    }
  );

}
