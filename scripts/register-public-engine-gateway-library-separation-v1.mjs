import { lkrAuthenticatedFetch } from "../../dark-sloth-living-knowledge-engine/scripts/lkr-authenticated-fetch.mjs";

const endpoint = "http://127.0.0.1:3010/api/lkr/database/recoveries";
const payload = {
  workspace: "DARK_SLOTH_ARCHIVE_WEBSITE_AND_LIBRARY",
  eventType: "PUBLIC_ENGINE_GATEWAY_AND_LIBRARY_SEPARATION_HARDENED",
  title: "Archive Website — Public Engine Gateway and Library Separation; PDF Edition QR Embedding",
  description: "Confirmed and implemented the institutional boundary: the public Archive Website is the discovery gateway for The Expedition, HELMR HUGR and the wider engine directory; the Library remains dedicated to books, editions, discovery and reading. Removed The Expedition and HELMR HUGR navigation links from the Library while preserving its Archive Platform link and protected reader identity gate. Preserved the public website's dedicated /engines, /expedition and /helmr-hugr routes, improved the engine directory's explanation of standalone versus Platform-connected systems, and hardened hosted bridge destinations to require HTTPS while allowing loopback only in development. Public QR references are now embedded as a dedicated final page in downloadable PDF editions at request time, resolving BOOK-{editionId} through the public edition registry; missing canonical-origin configuration or QR-generation errors fail open to the original PDF with an explicit response header and never generate a production preview QR. The website and Library TypeScript checks passed; targeted ESLint and diff checks passed. No production deployment was attempted because the production Platform and HELMR origins and deployment release configuration still require confirmation.",
  sourceReference: "dark-sloth-archive-website/public-engine-gateway-library-separation-and-pdf-qr/2026-11-17",
  idempotencyKey: "archive-public-engine-gateway-library-separation-pdf-qr-2026-11-17-v1",
  subjectType: "INSTITUTIONAL_ARCHITECTURE",
  subjectId: "archive-website-engine-gateway-library-boundary",
  status: "RECOVERED",
  sourceType: "DARK_SLOTH_SOFTWARE_MILESTONE",
  canonicalStatus: "CANDIDATE",
  significance: "MILESTONE",
  provenance: {
    websiteEngineDirectory: "PRESERVED",
    publicExpeditionBridge: "PRESERVED_AND_HTTPS_HARDENED",
    publicHelmrHugrBridge: "PRESERVED_AND_HTTPS_HARDENED",
    libraryExpeditionNavigation: "REMOVED",
    libraryHelmrHugrNavigation: "REMOVED",
    libraryPlatformNavigation: "PRESERVED",
    readerIdentityGate: "PRESERVED",
    downloadablePdfQrPage: "IMPLEMENTED",
    bookReferenceResolver: "/r/BOOK-{editionId}",
    publicEditionRegistry: "SOURCE_OF_TRUTH",
    canonicalProductionQrOrigin: "https://darkslotharchive.com",
    canonicalOriginEnvironmentVariable: "NEXT_PUBLIC_ARCHIVE_CANONICAL_URL",
    archiveWebsiteTypeScript: "PASS",
    libraryTypeScript: "PASS",
    targetedEslint: "PASS",
    diffCheck: "PASS",
    publicPdfFixtureAcceptance: "PENDING",
    productionDeployment: "BLOCKED_ON_CONFIRMED_HOSTED_ORIGINS_AND_RELEASE_ACCESS"
  },
  metadata: {
    milestone: "PUBLIC_ENGINE_GATEWAY_LIBRARY_SEPARATION_AND_PDF_QR",
    assessmentDate: "2026-11-17",
    canonicalPrinciple: "Nothing is invented. Only recovered."
  }
};

const response = await lkrAuthenticatedFetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
  cache: "no-store",
  signal: AbortSignal.timeout(20000)
});
const body = await response.json().catch(() => ({}));
if (!response.ok || body.authority?.authority !== "LOCAL_SQLITE" || body.authority?.writesEnabled !== true) {
  throw new Error(`LKR registration failed: HTTP ${response.status} ${JSON.stringify(body)}`);
}
const recoveryId = body.recovery?.recoveryId;
if (!recoveryId) throw new Error("LKR did not return an allocator-generated Recovery ID.");
const read = await lkrAuthenticatedFetch(`${endpoint}?id=${encodeURIComponent(recoveryId)}`, {
  cache: "no-store",
  signal: AbortSignal.timeout(20000)
});
const readBody = await read.json().catch(() => ({}));
if (!read.ok || readBody.authority?.authority !== "LOCAL_SQLITE" ||
    readBody.recovery?.recoveryId !== recoveryId ||
    readBody.recovery?.sourceReference !== payload.sourceReference) {
  throw new Error(`LKR read-back verification failed for ${recoveryId}`);
}
console.log(JSON.stringify({
  status: "REGISTERED_AND_READBACK_VERIFIED",
  authority: readBody.authority.authority,
  recoveryId,
  title: readBody.recovery.title
}));
