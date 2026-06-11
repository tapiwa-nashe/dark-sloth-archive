import Link from "next/link";

const records = [
  {
    id: "011",
    label: "REC-011",
    title: "Why Recovery Matters",
  },
  {
    id: "012",
    label: "REC-012",
    title: "The Meaning of Stewardship",
  },
  {
    id: "013",
    label: "REC-013",
    title: "Memory and Continuity",
  },
  {
    id: "014",
    label: "REC-014",
    title: "The Nature of Belonging",
  },
  {
    id: "015",
    label: "REC-015",
    title: "Why Civilization Requires Participation",
  },
];

export default function ArchivePhilosophyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-16">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          COLLECTION_002
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Archive Philosophy
        </h1>

        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">
          <p>History records what happened.</p>
          <p>Philosophy explores why it matters.</p>
          <p>
            The records contained within this collection examine recovery,
            stewardship, memory, belonging, and participation.
          </p>
          <p>Proceed carefully.</p>
          <p>Some questions cannot be unread.</p>
        </div>
      </header>

      <section className="grid gap-5">
        {records.map((record) => (
          <Link
            key={record.id}
            href={`/records/${record.id}`}
            className="group border border-zinc-800 p-6 transition hover:border-zinc-500"
          >
            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              {record.label}
            </p>

            <h2 className="text-2xl font-semibold">
              {record.title}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
