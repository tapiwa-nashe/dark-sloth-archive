import { NextResponse } from "next/server";
import { records } from "@/lib/records";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// This is a public discovery projection only. It intentionally excludes private
// evidence, participant data, dossiers, unreleased content and all write actions.
export async function GET() {
  const feed = await getPublicArchiveFeed();
  const catalogueEntities = records.map((record) => ({
    canonicalId: "REC-" + record.id,
    slug: "REC-" + record.id,
    title: record.title,
    summary: record.classification,
    contentType: "RECORD",
    catalogueStatus: record.status,
  }));
  const releasedEntities = feed.entities.map((entity) => ({
    canonicalId: entity.canonicalId,
    slug: entity.slug,
    title: entity.title,
    summary: entity.summary,
    contentType: "ENTITY",
    publicationStatus: entity.publicationStatus,
    visibility: entity.visibility,
  }));
  const recoveries = feed.recoveries.map((recovery) => ({
    canonicalId: recovery.canonicalId,
    slug: recovery.slug,
    title: recovery.title,
    summary: recovery.summary,
    recoveryType: recovery.recoveryType,
    publishedAt: recovery.publishedAt,
    sourceReferences: recovery.sourceReferences,
    verificationSummary: recovery.verificationSummary ?? null,
    contentType: "RECOVERY",
  }));

  return NextResponse.json(
    {
      schemaVersion: 1,
      readOnly: true,
      source: "DARK_SLOTH_ARCHIVE_WEBSITE",
      generatedAt: new Date().toISOString(),
      recoveryFeedConnected: feed.connected,
      recoveries,
      entities: [...catalogueEntities, ...releasedEntities],
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
        "X-Content-Type-Options": "nosniff",
      },
    },
  );
}
