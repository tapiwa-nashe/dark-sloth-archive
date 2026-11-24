import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Fingerprint, Network, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

const engines = [
  { name: "HELMR HUGR", category: "VISUAL & GLYPHIC INTELLIGENCE", description: "A standalone visual and glyphic environment, discoverable through the Archive and connected to its canonical records.", icon: Sparkles, href: "/helmr-hugr", action: "Open HELMR HUGR" },
  { name: "The Expedition", category: "INTERACTIVE RECOVERY", description: "Enter the interactive recovery environment. Identity-bound journeys continue through the Archive Platform and its Expedition bridge.", icon: Compass, href: "/expedition", action: "Enter the Expedition" },
  { name: "Reading Engine", category: "CANONICAL READING", description: "The dedicated participant reading environment for books, chapters, reading continuity and associated reader tools.", icon: BookOpen },
  { name: "Knowledge Graph Engine", category: "STRUCTURED KNOWLEDGE", description: "Explore the structured knowledge system that organises entities, concepts, records and explicitly supported relationships.", icon: Network },
  { name: "Recovery Stream", category: "EVIDENCE & RECOVERY", description: "The evidence-led recovery environment for source material, submissions, review and preservation workflows.", icon: ScrollText },
  { name: "Publishing Studio", category: "MANUSCRIPT & EDITIONS", description: "The participant workspace for manuscript development, verification, edition preparation and authorised publication.", icon: BookOpen },
  { name: "Living Knowledge Runtime", category: "REGISTRY & CONTROL ROOM", description: "The operational runtime for recovery registration, institutional memory, verification and system oversight.", icon: ShieldCheck },
  { name: "Commons & Marketplace", category: "CIVILIZATIONAL PARTICIPATION", description: "The developing partnership and participation environment, governed by the Commons Constitution and its admission rules.", icon: Fingerprint },
];

export default function EnginesPage() {
  return (
    <main className="archive-derived-page archive-page-v2">
      <header className="archive-page-hero">
        <p className="archive-page-kicker">DARK SLOTH / CONNECTED SYSTEMS</p>
        <h1>Engines & Experiences</h1>
        <p className="archive-page-lede">A public directory of the engines that extend the Archive. Discover each system here, then enter its own environment or continue into the Archive Platform where participant access is required.</p>
        <div className="archive-page-meta"><span>PUBLIC DISCOVERY</span><span>PLATFORM ACCESS FOR INTERACTIVE USE</span></div>
      </header>
      <section className="archive-platform-intro">
        <div><p className="archive-page-kicker">ONE INSTITUTION / CONNECTED ENGINES</p><h2>Discover the systems. Continue the work inside the Platform.</h2></div>
        <p>The public Archive is the discovery gateway for the wider engine ecosystem. The Expedition continues through the Archive Platform; HELMR HUGR remains a standalone connected application; other participant engines open through their authorised Platform workspaces. Canonical identity, permissions and institutional records remain governed by the Platform.</p>
      </section>
      <section className="archive-page-section grid gap-4 md:grid-cols-2">
        {engines.map((engine, index) => {
          const Icon = engine.icon;
          return <article key={engine.name} className="rounded-xl border border-neutral-800 bg-black/50 p-6 md:p-7">
            <div className="mb-6 flex items-center justify-between"><Icon size={24} strokeWidth={1.4}/><span className="font-mono text-xs text-neutral-600">0{index + 1}</span></div>
            <p className="archive-page-kicker">{engine.category}</p>
            <h2 className="mt-2 text-2xl font-semibold">{engine.name}</h2>
            <p className="mt-3 min-h-20 text-sm leading-7 text-neutral-400">{engine.description}</p>
            <Link href={"href" in engine && engine.href ? engine.href : "/platform"} className="mt-6 inline-flex items-center gap-2 border border-neutral-700 px-4 py-3 text-xs font-semibold uppercase tracking-[.14em] transition hover:border-neutral-400 hover:bg-white hover:text-black">{"action" in engine && engine.action ? engine.action : "Access through the Platform"} <ArrowUpRight size={15}/></Link>
          </article>;
        })}
      </section>
      <section className="archive-platform-footer">
        <div><p className="archive-page-kicker">PARTICIPANT ACCESS</p><h2>Continue in the Archive Platform.</h2><p>Create or use your Archive Identity to enter participant experiences and protected workspaces.</p></div>
        <Link href="/platform">Explore the Platform <ArrowUpRight size={16}/></Link>
      </section>
    </main>
  );
}
