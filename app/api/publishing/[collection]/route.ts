import { NextResponse } from "next/server";

/** Publishing is an authenticated Platform operation, never a public GET side effect. */
export async function GET() {
  return NextResponse.json(
    { error: "Publishing operations are available only in the authenticated Archive Platform." },
    { status: 404 },
  );
}
