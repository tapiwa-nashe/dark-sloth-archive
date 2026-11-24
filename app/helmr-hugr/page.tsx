import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

function safeDestination(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol === "https:") return url.toString().replace(/\/$/, "");
    if (
      process.env.NODE_ENV !== "production" &&
      url.protocol === "http:" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    ) return url.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
  return null;
}

export default function HelmrHugrBridgePage() {
  const destination = safeDestination(process.env.NEXT_PUBLIC_HELMR_HUGR_URL);

  return (
    <main className="archive-derived-page archive-page-v2">
      <header className="archive-page-hero">
        <p className="archive-page-kicker">DARK SLOTH / VISUAL & GLYPHIC INTELLIGENCE</p>
        <h1>HELMR HUGR</h1>
        <p className="archive-page-lede">
          A standalone house of artifacts, glyphic structures, dispatches and
          recoveries. It is discoverable through the Archive and bridges back to
          canonical Archive records without duplicating their identity or authority.
        </p>
      </header>
      <section className="archive-platform-intro">
        <div>
          <p className="archive-page-kicker">CONNECTED APPLICATION</p>
          <h2>Another doorway into the Archive.</h2>
        </div>
        <p>
          HELMR HUGR reads canonical Archive references through its read-only
          bridge. Identity-dependent actions remain unavailable unless the Archive
          session is independently verified.
        </p>
      </section>
      <section className="archive-page-section rounded-xl border border-neutral-800 bg-black/40 p-7">
        <Sparkles size={26}/>
        {destination ? (
          <a href={destination} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 border border-neutral-600 px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black">
            Open HELMR HUGR <ArrowUpRight size={15}/>
          </a>
        ) : (
          <p className="mt-4 text-sm text-neutral-400">
            The standalone HELMR HUGR HTTPS destination has not been configured
            for this deployment. No local development address is exposed to
            public visitors.
          </p>
        )}
        <p className="mt-5 text-xs text-neutral-500">
          The application remains separate. Archive Identity and canonical records
          are not duplicated here.
        </p>
      </section>
      <p className="mt-10">
        <Link href="/engines" className="text-xs uppercase tracking-wider underline underline-offset-4">
          ← Return to Engines & Experiences
        </Link>
      </p>
    </main>
  );
}
