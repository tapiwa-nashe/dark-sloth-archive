import { lkrAuthenticatedFetch } from "../../dark-sloth-living-knowledge-engine/scripts/lkr-authenticated-fetch.mjs";

const endpoint = "http://127.0.0.1:3010/api/lkr/database/recoveries";
const payload = {
  workspace: "DARK_SLOTH_ARCHIVE_WEBSITE",
  eventType: "PUBLIC_BOOK_AND_RECOVERY_QR_REVELATION_ENABLED",
  title: "Archive Website — Public Book and Recovery QR Revelation",
  description: "Added a shared public QR card to approved public recovery listings and released Publishing Studio edition pages. Recovery QR addresses resolve through the canonical /r/{canonicalId} route. Published book editions use /r/BOOK-{editionId}, which is resolved against the public edition registry. QR generation uses the configured canonical HTTPS origin and only enables print/download on that exact origin; preview QR downloads remain disabled. The QR reveals public identity and metadata only and does not grant protected reading or private evidence access. ESLint and git diff checks passed for changed files. Hosted preview deployment and physical scan acceptance remain pending.",
  sourceReference: "dark-sloth-archive-website/public-book-recovery-qr-revelation/2026-11-17",
  idempotencyKey: "dark-sloth-archive-public-book-recovery-qr-revelation-2026-11-17-v1",
  subjectType: "PUBLIC_QR_RESOLUTION",
  subjectId: "archive-public-book-recovery-qr",
  status: "RECOVERED",
  sourceType: "DARK_SLOTH_SOFTWARE_MILESTONE",
  canonicalStatus: "CANDIDATE",
  significance: "MILESTONE",
  provenance: {
    changedFiles: [
      "components/PublicArchiveQrCard.tsx",
      "app/recoveries/page.tsx",
      "app/studios/publishing/[edition]/page.tsx"
    ],
    publicRecoveryQr: "ENABLED",
    publicBookEditionQr: "ENABLED",
    canonicalResolver: "/r/{canonicalId}",
    bookResolverPrefix: "BOOK-",
    publicEditionRegistry: "SOURCE_OF_TRUTH",
    canonicalHttpsOriginRequired: true,
    previewPrintDownload: "DISABLED",
    privateEvidenceExposure: "PROHIBITED",
    readerEntitlementGrant: "NONE",
    eslint: "PASS",
    diffCheck: "PASS",
    hostedDeployment: "PENDING",
    physicalScanAcceptance: "PENDING"
  },
  metadata: {
    milestone: "PUBLIC_BOOK_RECOVERY_QR_REVELATION",
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
