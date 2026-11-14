import Link from "next/link";

export default function DossierPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">ARCHIVE DOSSIER SYSTEM</p>
        <h1 className="mb-6 text-5xl font-bold">Dossiers</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          A dossier is an organised investigation that brings records, recoveries, relationships, observations, and open questions into a traceable evidence structure.
        </p>
      </header>
      <section className="mb-8 border border-zinc-800 p-7">
        <p className="text-xs tracking-[0.3em] text-zinc-500">DOSSIER PRINCIPLE</p>
        <h2 className="mt-4 text-2xl font-semibold">A connection is not automatically a conclusion.</h2>
        <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
          Public dossiers distinguish source records from interpretation and unresolved questions. Participant-specific and restricted dossiers remain within the authenticated Platform.
        </p>
      </section>
      <Link href="/dossiers" className="inline-flex border border-zinc-700 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-zinc-400">Browse public dossiers →</Link>
    </main>
  );
}
