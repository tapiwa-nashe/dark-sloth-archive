import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getPublicEditionRegistry } from "@/lib/publishing/registry";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: parts } = await params;
  if (!Array.isArray(parts) || parts.length !== 2) {
    return NextResponse.json({ error: "Artifact not found" }, { status: 404 });
  }

  const [edition, file] = parts.map(decodeURIComponent);
  const publication = getPublicEditionRegistry().find(item =>
    item.title === edition || item.id === edition
  );
  if (!publication || !publication.outputs.includes(file)) {
    return NextResponse.json({ error: "Artifact not found" }, { status: 404 });
  }

  const root = path.resolve(process.cwd(), "output", publication.title);
  const filePath = path.resolve(root, file);
  if (
    !filePath.startsWith(root + path.sep) ||
    !fs.existsSync(filePath) ||
    !fs.statSync(filePath).isFile()
  ) {
    return NextResponse.json({ error: "Artifact not found" }, { status: 404 });
  }

  return new NextResponse(fs.readFileSync(filePath), {
    headers: {
      "Content-Type": file.endsWith(".pdf") ? "application/pdf" :
        file.endsWith(".md") ? "text/markdown; charset=utf-8" :
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": `inline; filename="${path.basename(file)}"`,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
