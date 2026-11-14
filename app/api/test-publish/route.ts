import { NextResponse } from "next/server";

/** Test publication endpoint intentionally disabled on the public application. */
export async function GET() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}
