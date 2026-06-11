import Link from "next/link";

const dossiers = [
  {
    id: "DOSSIER-001",
    title: "The Observer",
    description:
      "Attention, Presence, Silence, Discernment, and the foundations of recovery.",
    href: "/dossiers/observer",
  },
];

export default function DossiersPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          ARCHIVE DOSSIERS
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Dossiers
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          Structured investigations assembled from multiple records,
          recoveries, and observations.
        </p>

      </header>

      <section className="grid gap-6">

        {dossiers.map((dossier) => (
          <Link
            key={dossier.id}
            href={dossier.href}
            className="group border border-zinc-800 p-6 transition hover:border-zinc-500"
          >
            <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">
              {dossier.id}
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              {dossier.title}
            </h2>

            <p className="text-zinc-400">
              {dossier.description}
            </p>

          </Link>
        ))}

      </section>

    </main>
  );
}
