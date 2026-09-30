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
  return new ArchiveService({
    session: createSession(),
  });
}

export async function GET(request: NextRequest) {
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
    return NextResponse.json({
      operation: "findEntity",
      result: service.findEntity(id) ?? null,
    });
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


export async function POST(request: NextRequest) {
  const service = createService();
  const body = await request.json();

  const source = body?.source;
  const options = body?.options ?? {};

  if (source === undefined || source === null) {
    return NextResponse.json(
      {
        operation: "publish",
        error: "Missing required request field: source",
      },
      { status: 400 }
    );
  }

  try {
    const result = await service.publish(source, options);

    return NextResponse.json({
      operation: "publish",
      result,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Publication failed.";

    if (
      message ===
      "Library publication requires explicit source.series and source.volume."
    ) {
      return NextResponse.json(
        {
          operation: "publish",
          error: message,
        },
        { status: 400 }
      );
    }

    throw error;
  }
}
