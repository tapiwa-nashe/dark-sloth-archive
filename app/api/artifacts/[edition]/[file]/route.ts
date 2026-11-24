import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { getPublicEditionRegistry } from "@/lib/publishing/registry";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";

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

  let fileBytes = fs.readFileSync(filePath);
  let qrStatus = "not-applicable";

  if (decodedFile.toLowerCase().endsWith(".pdf")) {
    const configuredCanonical = process.env.NEXT_PUBLIC_ARCHIVE_CANONICAL_URL?.trim();
    let canonicalOrigin = "";
    try {
      const canonical = new URL(configuredCanonical || "");
      if (canonical.protocol === "https:") canonicalOrigin = canonical.origin;
      else if (
        process.env.NODE_ENV !== "production" &&
        canonical.protocol === "http:" &&
        (canonical.hostname === "localhost" || canonical.hostname === "127.0.0.1")
      ) canonicalOrigin = canonical.origin;
    } catch {
      canonicalOrigin = "";
    }

    if (canonicalOrigin) {
      try {
        const referenceId = `BOOK-${publication.id}`;
        const referenceUrl = new URL(`/r/${encodeURIComponent(referenceId)}`, canonicalOrigin).toString();
        const qrDataUrl = await QRCode.toDataURL(referenceUrl, {
          errorCorrectionLevel: "H",
          margin: 2,
          width: 420,
        });
        const qrBytes = Buffer.from(qrDataUrl.slice(qrDataUrl.indexOf(",") + 1), "base64");
        const pdf = await PDFDocument.load(fileBytes);
        const page = pdf.addPage([595.28, 841.89]);
        const font = await pdf.embedFont(StandardFonts.Helvetica);
        const boldFont = await pdf.embedFont(StandardFonts.HelveticaBold);
        const qrImage = await pdf.embedPng(qrBytes);
        const qrSize = 220;
        const centerX = page.getWidth() / 2;
        page.drawText("DARK SLOTH ARCHIVE", {
          x: 72, y: 720, size: 11, font: boldFont,
          color: rgb(0.35, 0.35, 0.35),
        });
        page.drawText("PUBLIC EDITION REFERENCE", {
          x: 72, y: 665, size: 21, font: boldFont,
          color: rgb(0.08, 0.08, 0.08),
        });
        page.drawText(publication.title, {
          x: 72, y: 625, size: 13, font,
          color: rgb(0.25, 0.25, 0.25), maxWidth: 450,
        });
        page.drawImage(qrImage, {
          x: centerX - qrSize / 2,
          y: 330,
          width: qrSize,
          height: qrSize,
        });
        page.drawText(referenceId, {
          x: 72, y: 290, size: 12, font: boldFont,
          color: rgb(0.12, 0.12, 0.12),
        });
        page.drawText(referenceUrl, {
          x: 72, y: 267, size: 8, font,
          color: rgb(0.25, 0.25, 0.25), maxWidth: 450,
        });
        page.drawText("Scan to reveal the public edition identity and approved catalogue metadata.", {
          x: 72, y: 220, size: 9, font,
          color: rgb(0.3, 0.3, 0.3), maxWidth: 450,
        });
        page.drawText("This reference does not grant reading, download, or private evidence access.", {
          x: 72, y: 202, size: 9, font,
          color: rgb(0.3, 0.3, 0.3), maxWidth: 450,
        });
        fileBytes = Buffer.from(await pdf.save());
        qrStatus = "embedded";
      } catch {
        qrStatus = "embedding-failed-original-served";
      }
    } else {
      qrStatus = "canonical-origin-not-configured-original-served";
    }
  }

  return new NextResponse(fileBytes, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `inline; filename="${path.basename(decodedFile)}"`,
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      "X-Archive-Public-QR": qrStatus,
    },
  });
}
