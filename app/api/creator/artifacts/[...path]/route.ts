import {
  NextResponse
} from "next/server";

import fs from "node:fs";
import path from "node:path";


export async function GET(
  request:Request,
  {
    params
  }:{
    params:Promise<{
      path:string[]
    }>
  }
){

  const {
    path:parts
  } =
    await params;


  const filePath =
    path.join(
      process.cwd(),
      "output",
      ...parts
    );


  if(!fs.existsSync(filePath)){

    return NextResponse.json(
      {
        error:"Artifact not found"
      },
      {
        status:404
      }
    );

  }


  const file =
    fs.readFileSync(
      filePath
    );


  return new NextResponse(
    file
  );

}
