import { NextRequest, NextResponse } from "next/server";

import { ArchiveService } from "@/lib/application/archiveService";
import type { AssistantSession } from "@dark-sloth/types";

function createSession(): AssistantSession {
  const now = new Date();
  return {
    id: "archive-api-session",
    createdAt: now,
    startedAt: now,
    updatedAt: now,
    journey: "archive-api",
    role: "observer",
  } as AssistantSession;
}

function createService() {
  return new ArchiveService({ session: createSession() });
}

function unavailableInProduction() {
  return NextResponse.json({ error: "Not found" }, { status: 404 });
}

/** Operational diagnostics are development-only; the public site is not the Platform API. */
export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") return unavailableInProduction();

  const service = createService();
  const { searchParams } = request.nextUrl;
  const id = searchParams.get("id");
  const type = searchParams.get("type");
  const intelligence = searchParams.get("intelligence");
  const publishing = searchParams.get("publishing");

  if (intelligence) {
    return NextResponse.json({
      operation: "intelligence",
      subject: intelligence,
      result: service.recallIntelligence(intelligence),
    });
  }

  if (publishing === "health") {
    const applicationHealth = service.health();
    return NextResponse.json({
      operation: "publishing-health",
      application: {
        running: service.application.isRunning(),
        engines: service.application.getEngineCount(),
        capabilities: service.application.getCapabilityCount(),
      },
      publishing: applicationHealth.publishing,
    });
  }

  if (id) {
    return NextResponse.json({ operation: "findEntity", result: service.findEntity(id) ?? null });
  }

  if (type) {
    return NextResponse.json({
      operation: "findByType",
      result: service.findByType(type as Parameters<typeof service.findByType>[0]),
    });
  }

  return NextResponse.json({
    operation: "health",
    application: {
      running: service.application.isRunning(),
      engines: service.application.getEngineCount(),
      capabilities: service.application.getCapabilityCount(),
    },
    health: service.health(),
  });
}

/** Writes are not accepted by the public Archive application, even in development. */
export async function POST() {
  return NextResponse.json(
    { error: "Publishing and operational writes belong to the authenticated Archive Platform." },
    { status: 404 },
  );
}
