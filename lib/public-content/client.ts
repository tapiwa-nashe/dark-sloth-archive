import type { PublicEntity, PublicParticipationSummary, PublicRecovery } from "./contracts";
import { filterPubliclyEligible } from "./eligibility";

export interface PublicArchiveFeed {
  connected: boolean;
  generatedAt: string | null;
  recoveries: PublicRecovery[];
  entities: PublicEntity[];
  participationSummaries: PublicParticipationSummary[];
}

const emptyFeed: PublicArchiveFeed = {
  connected: false,
  generatedAt: null,
  recoveries: [],
  entities: [],
  participationSummaries: [],
};

function isObject(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function isPublicRecovery(value: unknown): value is PublicRecovery {
  return isObject(value) &&
    value.contentType === "RECOVERY" &&
    typeof value.recoveryType === "string" &&
    typeof value.narrative === "string" &&
    Array.isArray(value.sourceReferences) &&
    value.sourceReferences.every((item) => typeof item === "string");
}

function isPublicEntity(value: unknown): value is PublicEntity {
  return isObject(value) &&
    value.contentType === "ENTITY" &&
    (value.entityType === "RECOVERED_CHARACTER" || value.entityType === "CANONICAL_ENTITY" || value.entityType === "PUBLIC_CONTRIBUTOR") &&
    Array.isArray(value.aliases) && value.aliases.every((item) => typeof item === "string") &&
    typeof value.biography === "string" &&
    Array.isArray(value.canonReferences) && value.canonReferences.every((item) => typeof item === "string");
}

/** Server-only fetch. Never use a NEXT_PUBLIC variable for the Platform origin. */
export async function getPublicArchiveFeed(): Promise<PublicArchiveFeed> {
  const configuredOrigin = process.env.ARCHIVE_PLATFORM_PUBLIC_API_URL?.trim();
  if (!configuredOrigin) return emptyFeed;

  let origin: URL;
  try {
    origin = new URL(configuredOrigin);
    if (!(["https:", "http:"].includes(origin.protocol))) return emptyFeed;
    if (process.env.NODE_ENV === "production" && origin.protocol !== "https:") return emptyFeed;
  } catch {
    return emptyFeed;
  }

  try {
    const bypass = process.env.ARCHIVE_PLATFORM_PUBLIC_API_BYPASS;
    const headers: Record<string, string> = { Accept: "application/json" };
    if (bypass) headers["x-vercel-protection-bypass"] = bypass;
    const response = await fetch(new URL("/api/public/archive", origin), {
      method: "GET",
      headers,
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return emptyFeed;
    const payload: unknown = await response.json();
    if (!isObject(payload) || payload.schemaVersion !== 1 || payload.readOnly !== true || payload.source !== "DARK_SLOTH_ARCHIVE_PLATFORM") return emptyFeed;

    const recoveries = Array.isArray(payload.recoveries)
      ? filterPubliclyEligible(payload.recoveries.filter(isPublicRecovery))
      : [];
    const entities = Array.isArray(payload.entities)
      ? filterPubliclyEligible(payload.entities.filter(isPublicEntity))
      : [];
    const participationSummaries = Array.isArray(payload.participationSummaries)
      ? payload.participationSummaries.filter((item): item is PublicParticipationSummary =>
          isObject(item) && typeof item.targetCanonicalId === "string" &&
          Number.isInteger(item.witnessCount) && (item.witnessCount as number) >= 0 &&
          Array.isArray(item.approvedAnnotationExcerpts) && typeof item.asOf === "string",
        )
      : [];

    return {
      connected: true,
      generatedAt: typeof payload.generatedAt === "string" ? payload.generatedAt : null,
      recoveries,
      entities,
      participationSummaries,
    };
  } catch {
    return emptyFeed;
  }
}
