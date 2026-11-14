import Link from "next/link";

export default function IdentityPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">ARCHIVE IDENTITY SYSTEM</p>
        <h1 className="mb-6 text-5xl font-bold">Identity</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          Archive Identity is the participant identity layer. It preserves a participant’s verified relationship with the Archive, including authorised contributions, witnessing, and progression.
        </p>
      </header>
      <section className="mb-8 border border-zinc-800 p-7">
        <p className="text-xs tracking-[0.3em] text-zinc-500">PUBLIC / PRIVATE BOUNDARY</p>
        <h2 className="mt-4 text-2xl font-semibold">Participant identities are not public catalogue records.</h2>
        <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">
          Personal identity records, dossiers, and participation history belong to the authenticated Archive Platform. This public website does not expose participant identity data or present a sample identity as a verified person.
        </p>
      </section>
      <Link href="/platform" className="inline-flex border border-zinc-700 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-zinc-400">Enter the Archive Platform →</Link>
    </main>
  );
}
