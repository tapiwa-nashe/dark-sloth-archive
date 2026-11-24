import Link from "next/link";
import { ArrowUpRight, Fingerprint, Network, ShieldCheck, Users } from "lucide-react";

const experiences = [
  { label: "HELMR HUGR", path: "/helmr-hugr" },
  { label: "The Expedition", path: "/expedition" },
  { label: "Participant Library & Reader", path: "/library" },
  { label: "Commons", path: "/commons" },
  { label: "Publishing Studio", path: "/publishing" },
  { label: "Knowledge Graph", path: "/graph" },
];

export default function PlatformPage() {
  const configuredBase = process.env.NEXT_PUBLIC_ARCHIVE_PLATFORM_URL?.trim();
  const platformBase = configuredBase
    ? configuredBase.replace(/\/+$/, "")
    : process.env.NODE_ENV === "development"
      ? "http://localhost:3004"
      : null;

  return (
    <main className="archive-derived-page archive-page-v2">
      <header className="archive-page-hero">
        <p className="archive-page-kicker">DARK SLOTH / PARTICIPATION LAYER</p>
        <h1>Archive Platform</h1>
        <p className="archive-page-lede">The operational and participatory environment of Dark Sloth. It extends the public institution without replacing or absorbing the public Archive.</p>
        <div className="archive-page-meta"><span>SEPARATE INSTITUTIONAL SYSTEM</span><span>AUTHORISED PARTICIPATION</span></div>
      </header>

      <section className="archive-platform-intro">
        <div><p className="archive-page-kicker">THE TWO LAYERS</p><h2>The Archive is where knowledge is discovered. The Platform is where authorised participation takes place.</h2></div>
        <p>The public website remains independently accessible. The Platform supports participant identity, contribution workflows, private dossiers, witnessing, annotations, full book reading and institutional operations under their own permissions and governance.</p>
      </section>

      <section className="archive-page-section archive-platform-grid">
        <article><Fingerprint/><p className="archive-page-kicker">01 / IDENTITY</p><h3>Participant identity</h3><p>Identity ownership, participation history and progression are handled in the authenticated environment, not exposed as public catalogue data.</p></article>
        <article><Users/><p className="archive-page-kicker">02 / PARTICIPATION</p><h3>Contribution & witness</h3><p>Authorised participants engage with recovery records, annotations, witnessing and verification workflows according to their permissions.</p></article>
        <article><Network/><p className="archive-page-kicker">03 / INSTITUTIONAL SYSTEMS</p><h3>Connected engines</h3><p>Operational tools support publishing, reading, knowledge organisation and other institutional processes. Their internal controls are not public website features.</p></article>
        <article><ShieldCheck/><p className="archive-page-kicker">04 / BOUNDARIES</p><h3>Controlled public release</h3><p>Only approved public projections cross from Platform systems to the public Archive through explicit release boundaries.</p></article>
      </section>

      <section id="connected-engines" className="archive-page-section rounded-xl border border-neutral-800 bg-black/40 p-6 md:p-8">
        <p className="archive-page-kicker">CONNECTED PARTICIPANT EXPERIENCES</p>
        <h2 className="mb-3 text-2xl font-semibold">Enter the engines</h2>
        <p className="mb-6 max-w-3xl text-sm leading-7 text-neutral-400">These destinations open inside the separate Archive Platform. Access remains subject to the relevant identity, membership and system permissions.</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => platformBase ? (
            <a key={experience.path} className="flex items-center justify-between border border-neutral-800 p-4 transition hover:border-neutral-500" href={`${platformBase}${experience.path}`}>
              {experience.label}<ArrowUpRight size={15}/>
            </a>
          ) : (
            <div key={experience.path} aria-disabled="true" className="flex items-center justify-between border border-neutral-900 p-4 text-neutral-600">
              {experience.label}<span className="text-[9px] uppercase tracking-wider">Destination pending</span>
            </div>
          ))}
        </div>
        {!platformBase && <p className="mt-5 text-xs leading-6 text-neutral-500">The production Platform URL has not yet been configured. Engine links are intentionally inactive rather than sending visitors to localhost or an unverified address. Set NEXT_PUBLIC_ARCHIVE_PLATFORM_URL when the canonical Platform address is confirmed.</p>}
        <p className="mt-5 text-xs text-neutral-500">For the wider directory, <Link className="underline underline-offset-4" href="/engines">browse all Archive engines on the public website</Link>.</p>
      </section>

      <section className="archive-platform-footer">
        <div><p className="archive-page-kicker">PUBLIC INSTITUTION</p><h2>Continue exploring the Archive.</h2><p>Collections, records, books and public research remain available without requiring participant access.</p></div>
        <Link href="/atlas">Explore the Archive Atlas <ArrowUpRight size={16}/></Link>
      </section>
    </main>
  );
}
