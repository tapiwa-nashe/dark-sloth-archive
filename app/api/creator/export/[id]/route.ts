import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ error: "Creator publishing is not available on the public website." }, { status: 404 });
}
