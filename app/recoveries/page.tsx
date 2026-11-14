import Link from "next/link";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export const dynamic = "force-dynamic";

export default async function RecoveriesPage() {
  const feed = await getPublicArchiveFeed();

  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">RECOVERY RECORDS</p>
        <h1 className="mb-6 text-5xl font-bold">Living Memory</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          The recovery stream preserves observations, evidence, interpretations, and unresolved questions as they are verified and admitted into the Archive.
        </p>
        <p className="mt-5 text-xs tracking-[0.25em] text-zinc-500">{feed.connected ? `${feed.recoveries.length} APPROVED PUBLIC RECOVERIES` : "PUBLIC RECOVERY FEED AWAITING CONNECTION"}</p>
      </header>

      {feed.recoveries.length ? (
        <section className="grid gap-5 md:grid-cols-2">
          {feed.recoveries.map((recovery) => {
            const participation = feed.participationSummaries.find((item) => item.targetCanonicalId === recovery.canonicalId);
            const publicationDate = recovery.publishedAt ? new Date(recovery.publishedAt) : null;
            const publishedLabel =
              publicationDate && !Number.isNaN(publicationDate.getTime())
                ? publicationDate.toLocaleDateString("en-ZA")
                : "Publication date not supplied";
            return (
              <article key={recovery.canonicalId} className="border border-zinc-800 p-6">
                <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">{recovery.canonicalId}</p>
                <h2 className="mb-3 text-2xl font-semibold">{recovery.title}</h2>
                <p className="text-zinc-400 leading-relaxed">{recovery.summary}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-zinc-500">
                  <span>{recovery.recoveryType}</span>
                  {participation ? <span>{participation.witnessCount} witnesses</span> : null}
                  <span>Published {publishedLabel}</span>
                </div>
                {recovery.narrative ? <details className="mt-6"><summary className="cursor-pointer text-sm text-zinc-300">Read recovered narrative</summary><div className="mt-4 whitespace-pre-wrap text-sm leading-7 text-zinc-400">{recovery.narrative}</div></details> : null}
              </article>
            );
          })}
        </section>
      ) : (
        <section className="border border-zinc-800 p-7">
          <p className="text-xs tracking-[0.3em] text-zinc-500">{feed.connected ? "NO APPROVED PUBLIC RELEASES" : "PUBLIC READ MODEL NOT CONNECTED"}</p>
          <h2 className="mt-4 text-2xl font-semibold">{feed.connected ? "The public recovery catalogue is awaiting its first approved release." : "The public recovery feed is being connected."}</h2>
          <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
            {feed.connected
              ? "The Platform connection is responding, but no recovery has passed the explicit public release process. Records will appear here only after approval, provenance, visibility, and publication status are confirmed."
              : "The website will display only records released through the Archive Platform's explicit publication manifest. No operational or private records are shown as placeholders."}
          </p>
          <Link href="/records" className="mt-7 inline-flex border border-zinc-700 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-zinc-400">Browse Archive Records →</Link>
        </section>
      )}
    </main>
  );
}
