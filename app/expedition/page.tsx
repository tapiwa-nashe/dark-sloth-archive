import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

function safeDestination(value: string | undefined): string | null {
  if (!value?.trim()) return null;
  try {
    const url = new URL(value.trim());
    if (url.username || url.password || url.hash) return null;
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

function safeOrigin(value: string | undefined): string | null {
  const destination = safeDestination(value);
  if (!destination) return null;
  return new URL(destination).origin;
}

export default function ExpeditionBridgePage() {
  const platformOrigin = safeOrigin(process.env.NEXT_PUBLIC_ARCHIVE_PLATFORM_URL);
  const configuredExpedition = safeDestination(process.env.NEXT_PUBLIC_EXPEDITION_URL);
  const destination = configuredExpedition || platformOrigin;
  const href = destination
    ? destination + (configuredExpedition ? "" : "/expedition")
    : null;

  return (
    <main className="archive-derived-page archive-page-v2">
      <header className="archive-page-hero">
        <p className="archive-page-kicker">DARK SLOTH / INTERACTIVE RECOVERY</p>
        <h1>THE EXPEDITION</h1>
        <p className="archive-page-lede">
          An interactive journey through the recovery world of The Whispering Wilds.
          The public Archive introduces the experience; the Platform preserves
          participant identity, world continuity and authorised participation.
        </p>
      </header>
      <section className="archive-platform-intro">
        <div>
          <p className="archive-page-kicker">ARCHIVE / EXPEDITION BRIDGE</p>
          <h2>Enter with continuity.</h2>
        </div>
        <p>
          An active Archive Identity is required to preserve a world and carry its
          memory between visits. Visitors without an identity can discover the
          experience but cannot create participant progress.
        </p>
      </section>
      <section className="archive-page-section rounded-xl border border-neutral-800 bg-black/40 p-7">
        <Compass size={26}/>
        {href ? (
          <a href={href} className="mt-5 inline-flex items-center gap-3 border border-neutral-600 px-5 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black">
            Enter the Expedition <ArrowUpRight size={15}/>
          </a>
        ) : (
          <p className="mt-4 text-sm text-neutral-400">
            The hosted Expedition or Archive Platform destination has not been
            configured. The bridge remains closed rather than exposing a local
            development address.
          </p>
        )}
        <p className="mt-5 text-xs text-neutral-500">
          Sign-in and identity checks occur in the Platform. The public Archive
          does not create or grant identity access.
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
