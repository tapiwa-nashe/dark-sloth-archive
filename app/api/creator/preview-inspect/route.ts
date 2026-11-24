import { NextResponse } from "next/server";

import {
  createPublishingPreview
} from "@/lib/creator/publishingPreview";


export async function GET(){
  if (process.env.NODE_ENV === "production") {
    return new Response(null, { status: 404 });
  }


  const sample = {

    id:"preview-test",

    title:"THE ARCHIVE TRANSCENDENCE SYSTEM",

    status:"draft",

    createdAt:"2026",

    content:`
# CHAPTER ONE
# THE MEANING OF TRANSCENDENCE

Transcendence represents movement beyond a previous state.

# ARTICLE I
# THE TRANSCENDENCE PRINCIPLE

The Archive shall recognize transcendence as the continuous expansion of civilization.

# INTERPRETATION

Transcendence is continuous becoming.
`

  };


  const tree =
    createPublishingPreview(
      sample
    );


  return NextResponse.json(
    tree
  );

}
