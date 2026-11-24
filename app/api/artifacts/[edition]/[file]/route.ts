import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import { getPublicEditionRegistry } from "@/lib/publishing/registry";

function pdfSafe(value: string): string {
  return value.normalize("NFKD")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/[^\x20-\xFF]/g, "?");
}

function publicArchiveOrigin(): string {
  const configured = process.env.PUBLIC_ARCHIVE_URL?.trim();
  if (!configured) {
    if (process.env.NODE_ENV === "development") return "http://localhost:3000";
    throw new Error("PUBLIC_ARCHIVE_URL_REQUIRED");
  }

  const parsed = new URL(configured);
  const localDevelopmentHost =
    process.env.NODE_ENV === "development" &&
    (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1");

  if (parsed.protocol === "https:" || localDevelopmentHost) return parsed.origin;
  throw new Error("PUBLIC_ARCHIVE_URL_MUST_USE_HTTPS");
}

async function appendPublicRevealPage(
  source: Buffer,
  edition: { id: string; title: string },
): Promise<Uint8Array> {
  const origin = publicArchiveOrigin();
  const revealUrl = new URL(
    "/reveal/" + encodeURIComponent(edition.id),
    origin,
  ).toString();

  const pdf = await PDFDocument.load(source);
  const qrPng = await QRCode.toBuffer(revealUrl, {
    type: "png",
    width: 480,
    margin: 4,
    errorCorrectionLevel: "H",
    color: { dark: "#171614", light: "#ffffff" },
  });
  const qrImage = await pdf.embedPng(qrPng);
  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const page = pdf.addPage([595.28, 841.89]);

  page.drawText("DARK SLOTH ARCHIVE", {
    x: 64,
    y: 758,
    size: 10,
    font: bold,
    color: rgb(0.42, 0.39, 0.33),
  });
  page.drawLine({
    start: { x: 64, y: 738 },
    end: { x: 531, y: 738 },
    thickness: 1,
    color: rgb(0.69, 0.54, 0.24),
  });
  page.drawText("PUBLIC EDITION RECORD", {
    x: 64,
    y: 682,
    size: 9,
    font: bold,
    color: rgb(0.55, 0.47, 0.31),
  });

  const safeTitle = pdfSafe(edition.title);
  const title = safeTitle.length > 64
    ? safeTitle.slice(0, 61) + "..."
    : safeTitle;
  page.drawText(title, {
    x: 64,
    y: 638,
    size: 21,
    font: serif,
    color: rgb(0.12, 0.12, 0.11),
    maxWidth: 467,
  });
  page.drawText("This page identifies the public edition and links to its Archive reveal.", {
    x: 64,
    y: 594,
    size: 10,
    font: regular,
    color: rgb(0.35, 0.34, 0.31),
    maxWidth: 467,
  });
  page.drawImage(qrImage, {
    x: 197.5,
    y: 322,
    width: 200,
    height: 200,
  });
  page.drawText("SCAN TO REVEAL THIS EDITION", {
    x: 175,
    y: 294,
    size: 9,
    font: bold,
    color: rgb(0.42, 0.39, 0.33),
  });
  page.drawText(edition.id, {
    x: 64,
    y: 92,
    size: 8,
    font: regular,
    color: rgb(0.52, 0.49, 0.44),
  });
  page.drawText("A public reveal does not grant access to restricted reading or downloads.", {
    x: 64,
    y: 72,
    size: 7,
    font: regular,
    color: rgb(0.52, 0.49, 0.44),
    maxWidth: 467,
  });

  return pdf.save();
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ edition: string; file: string }> },
) {
  try {
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

    const normalizedFile = decodedFile.toLowerCase();
    const contentType = normalizedFile.endsWith(".pdf")
      ? "application/pdf"
      : normalizedFile.endsWith(".md")
        ? "text/markdown; charset=utf-8"
        : "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    const original = fs.readFileSync(filePath);
    const content = decodedFile.toLowerCase().endsWith(".pdf")
      ? Buffer.from(await appendPublicRevealPage(original, {
          id: publication.id,
          title: publication.title,
        }))
      : original;

    return new NextResponse(content, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `inline; filename="${path.basename(decodedFile)}"`,
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      },
    });
  } catch (error) {
    console.error("[PUBLIC_EDITION_ARTIFACT] Delivery failed:", error);
    return NextResponse.json(
      { error: "Public artifact delivery unavailable" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
