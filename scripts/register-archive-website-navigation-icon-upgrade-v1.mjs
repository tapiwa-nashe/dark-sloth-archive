import { lkrAuthenticatedFetch } from "../../../projects/dark-sloth-living-knowledge-engine/scripts/lkr-authenticated-fetch.mjs";

const endpoint = (process.env.LKR_RECOVERIES_ENDPOINT || "http://127.0.0.1:3010/api/lkr/database/recoveries").replace(/\/$/, "");
const sourceReference = "dark-sloth-archive-v2-preview/navigation-icon-upgrade-v1/2026-11-17";
const payload = {
  workspace: "DARK_SLOTH_ARCHIVE_WEBSITE",
  eventType: "ARCHIVE_WEBSITE_NAVIGATION_ICON_UPGRADE_V1",
  title: "Dark Sloth Archive Website — V2 Navigation Icon Upgrade and Local Production Validation",
  description: [
    "The public Archive website V2 preview navigation panel was upgraded from Unicode glyphs to a consistent Lucide line-icon system. The existing Discover, Institution, and Participate groups, all navigation destinations, responsive open/close state, and menu interaction were preserved. The menu trigger now switches between Menu and X icons.",
    "The change is isolated to the public website V2 worktree; the Archive Platform navigation was not modified.",
    "Validation passed: targeted ESLint, full TypeScript check, Next.js 16.2.7 production build with 45 static pages, and local production smoke checks for the homepage, records, books, engines, knowledge graph, platform gateway, reader, sitemap, robots, record resolver behavior, and production 404 containment for development-only graph test routes.",
    "The local public website production server returned HTTP 200, as did the Archive Platform, Library, and Control Room.",
    "Hosted deployment remains blocked by missing Vercel project linkage and authorization plus outstanding production configuration. No DNS or production routing was changed."
  ].join(" "),
  status: "RECOVERED",
  sourceType: "DARK_SLOTH_SOFTWARE_MILESTONE",
  sourceReference,
  subjectType: "WEBSITE",
  subjectId: "dark-sloth-archive-v2-preview",
  canonicalStatus: "CANDIDATE",
  significance: "MILESTONE",
  idempotencyKey: "archive-website-v2-navigation-icon-upgrade-2026-11-17",
  provenance: {
    repository: "dark-sloth-archive",
    branch: "archive-website-v2-preview",
    iconLibrary: "lucide-react@1.17.0",
    navigationGroups: ["DISCOVER", "INSTITUTION", "PARTICIPATE"],
    navigationItemsPreserved: 17,
    platformNavigationModified: false,
    targetedEslint: "PASS",
    typescript: "PASS",
    productionBuild: "PASS",
    nextVersion: "16.2.7",
    staticPagesGenerated: 45,
    productionSmoke: "PASS",
    productionSmokeRoutes: {
      "/": 200, "/records": 200, "/books": 200, "/engines": 200,
      "/knowledge-graph": 200, "/platform": 200, "/read/demo": 200,
      "/sitemap.xml": 200, "/robots.txt": 200,
      "/r/REC-001": 308, "/r/REC-999": 404,
      "/api/test-graph": 404, "/api/test-graph-runtime": 404, "/api/test-graph-reload": 404
    },
    localServices: {
      publicWebsite: { port: 3012, http: 200 },
      archivePlatform: { port: 3004, http: 200 },
      library: { port: 3001, http: 200 },
      controlRoom: { port: 3010, http: 200 }
    },
    hostedDeployment: "BLOCKED",
    vercelProjectLinked: false,
    vercelAuthorizationAvailable: false,
    productionDnsChanged: false,
    sharedDomainRouting: "NOT_CONFIGURED",
    publicCanonicalDomain: "https://darkslotharchive.com",
    platformPathPrefix: "/workspace"
  },
  metadata: {
    milestone: "ARCHIVE_WEBSITE_NAVIGATION_ICON_UPGRADE_V1",
    assessmentDate: "2026-11-17",
    canonicalPrinciple: "Nothing is invented. Only recovered.",
    deploymentState: "BUILD_VALID_HOSTED_DEPLOYMENT_ACCESS_REQUIRED"
  }
};

const response = await lkrAuthenticatedFetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload),
  cache: "no-store",
  signal: AbortSignal.timeout(20000),
});
const body = await response.json().catch(() => ({}));
if (!response.ok) throw new Error(`LKR registration failed: HTTP ${response.status} ${JSON.stringify(body)}`);
if (body.authority?.authority !== "LOCAL_SQLITE" || body.authority?.writesEnabled !== true) throw new Error("LKR did not confirm writable LOCAL_SQLITE authority.");
const recoveryId = body.recovery?.recoveryId;
if (!recoveryId) throw new Error("LKR returned no allocator-generated Recovery ID.");

const readResponse = await lkrAuthenticatedFetch(`${endpoint}?id=${encodeURIComponent(recoveryId)}`, {
  cache: "no-store",
  signal: AbortSignal.timeout(20000),
});
const readBody = await readResponse.json().catch(() => ({}));
if (!readResponse.ok || readBody.authority?.authority !== "LOCAL_SQLITE" ||
    readBody.recovery?.recoveryId !== recoveryId ||
    readBody.recovery?.sourceReference !== sourceReference ||
    readBody.recovery?.provenance?.staticPagesGenerated !== 45 ||
    readBody.recovery?.provenance?.platformNavigationModified !== false) {
  throw new Error("LKR navigation-upgrade read-back verification failed.");
}

console.log(JSON.stringify({
  status: "LKR_REGISTERED_AND_READBACK_VERIFIED",
  authority: readBody.authority.authority,
  recoveryId,
  title: readBody.recovery.title,
  sourceReference,
  build: "PASS",
  tests: "ESLint + TypeScript + 45-page production build + local production smoke",
  platformNavigationModified: readBody.recovery.provenance.platformNavigationModified,
  hostedDeployment: readBody.recovery.provenance.hostedDeployment
}, null, 2));
