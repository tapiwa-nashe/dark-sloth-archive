import Link from "next/link";

const records = [
  { id: "021", label: "RUNE-001", title: "Presence" },
  { id: "022", label: "RUNE-002", title: "Patience" },
  { id: "023", label: "RUNE-003", title: "Silence" },
  { id: "024", label: "RUNE-004", title: "Discernment" },
  { id: "025", label: "RUNE-005", title: "Humility" },
  { id: "026", label: "RUNE-006", title: "Clarity" },

  { id: "040", label: "REC-040", title: "The Cost of Distraction" },
  { id: "041", label: "REC-041", title: "Remaining Long Enough" },
  { id: "042", label: "REC-042", title: "The Architecture of Noise" },
  { id: "043", label: "REC-043", title: "Significance and Weight" },
  { id: "044", label: "REC-044", title: "The Danger of Certainty" },
  { id: "045", label: "REC-045", title: "Clarity Without Certainty" },
];

export default function TwentyFourRunesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          COLLECTION_004
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          The Twenty-Four Runes
        </h1>

        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">

          <p>
            The Twenty-Four Runes form the symbolic language of recovery.
          </p>

          <p>
            Each rune preserves a principle,
            a shadow,
            and a lesson of recovery.
          </p>

          <p>
            Begin with observation.
          </p>

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
