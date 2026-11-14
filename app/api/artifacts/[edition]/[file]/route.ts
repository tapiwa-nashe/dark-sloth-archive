import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getPublicEditionRegistry } from "@/lib/publishing/registry";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ edition: string; file: string }> },
) {
  const { edition, file } = await context.params;
  const decodedEdition = decodeURIComponent(edition);
  const decodedFile = decodeURIComponent(file);

  const publication = getPublicEditionRegistry().find(item =>
    item.title === decodedEdition || item.id === decodedEdition
  );
  if (!publication || !publication.outputs.includes(decodedFile)) {
    return NextResponse.json({ error: "Artifact not found" }, { status: 404 });
  }

  const editionDirectory = path.resolve(process.cwd(), "output", publication.directory);
  const filePath = path.resolve(editionDirectory, decodedFile);
  if (
    !filePath.startsWith(editionDirectory + path.sep) ||
    !fs.existsSync(filePath) ||
    !fs.statSync(filePath).isFile()
  ) {
    return NextResponse.json({ error: "Artifact not found" }, { status: 404 });
  }

  const contentType = decodedFile.endsWith(".pdf")
    ? "application/pdf"
    : decodedFile.endsWith(".md")
      ? "text/markdown; charset=utf-8"
      : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

  return new NextResponse(fs.readFileSync(filePath), {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${path.basename(decodedFile)}"`,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
    },
  });
}
