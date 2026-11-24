import { lkrAuthenticatedFetch } from "../../dark-sloth-living-knowledge-engine/scripts/lkr-authenticated-fetch.mjs";

const endpoint = "http://127.0.0.1:3010/api/lkr/database/recoveries";
const payload = {
  workspace: "DARK_SLOTH_ARCHIVE_WEBSITE",
  eventType: "EXPEDITION_BRIDGE_PATH_PRESERVATION_HARDENED",
  title: "Archive Website — Expedition Bridge Destination Path Preservation",
  description: "Corrected the public Expedition bridge URL resolver so a configured HTTPS or development-loopback destination retains its path instead of being reduced to the origin. This preserves explicit routes such as /expedition when the experience is hosted beneath the Archive Platform, while the Platform fallback continues to append /expedition to the validated Platform origin. URL credentials and fragments are rejected; production remains HTTPS-only and loopback remains development-only. Archive Website TypeScript validation and git diff checks passed. Hosted browser acceptance remains pending because the production Platform origin is not yet established.",
  sourceReference: "dark-sloth-archive-website/expedition-bridge-path-preservation/2026-11-17",
  idempotencyKey: "archive-website-expedition-bridge-path-preservation-2026-11-17-v1",
  subjectType: "INSTITUTIONAL_ARCHITECTURE",
  subjectId: "archive-website-expedition-bridge",
  status: "RECOVERED",
  sourceType: "DARK_SLOTH_SOFTWARE_MILESTONE",
  canonicalStatus: "CANDIDATE",
  significance: "MILESTONE",
  provenance: {
    configuredExpeditionPath: "PRESERVED",
    platformFallback: "VALIDATED_ORIGIN_PLUS_EXPEDITION_PATH",
    productionProtocol: "HTTPS_ONLY",
    developmentLoopback: "ALLOWED_ONLY_IN_DEVELOPMENT",
    credentialAndFragmentUrls: "REJECTED",
    websiteTypeScript: "PASS",
    diffCheck: "PASS",
    hostedBridgeAcceptance: "PENDING_CONFIRMED_PRODUCTION_PLATFORM_ORIGIN"
  },
  metadata: { milestone: "EXPEDITION_BRIDGE_PATH_PRESERVATION_V1", assessmentDate: "2026-11-17", canonicalPrinciple: "Nothing is invented. Only recovered." }
};
const response = await lkrAuthenticatedFetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload), cache: "no-store", signal: AbortSignal.timeout(20000) });
const body = await response.json().catch(() => ({}));
if (!response.ok || body.authority?.authority !== "LOCAL_SQLITE" || body.authority?.writesEnabled !== true) throw new Error(`LKR registration failed: HTTP ${response.status} ${JSON.stringify(body)}`);
const recoveryId = body.recovery?.recoveryId;
if (!recoveryId) throw new Error("LKR returned no allocator-generated Recovery ID.");
const read = await lkrAuthenticatedFetch(`${endpoint}?id=${encodeURIComponent(recoveryId)}`, { cache: "no-store", signal: AbortSignal.timeout(20000) });
const readBody = await read.json().catch(() => ({}));
if (!read.ok || readBody.authority?.authority !== "LOCAL_SQLITE" || readBody.recovery?.recoveryId !== recoveryId || readBody.recovery?.sourceReference !== payload.sourceReference) throw new Error(`LKR read-back verification failed for ${recoveryId}`);
console.log(JSON.stringify({ status: "REGISTERED_AND_READBACK_VERIFIED", authority: readBody.authority.authority, recoveryId, title: readBody.recovery.title }));
