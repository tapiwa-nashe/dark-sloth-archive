import Link from "next/link";

const relatedRecords = [
  { id: "016", label: "REC-016", title: "Move Slowly Enough To Notice Life", type: "Recovery Law" },
  { id: "021", label: "RUNE-001", title: "Presence", type: "Core Rune" },
  { id: "040", label: "REC-040", title: "The Cost of Distraction", type: "Rune Recovery Record" },
  { id: "046", label: "REC-046", title: "The Discipline of Attention", type: "Rune Recovery Record" },
  { id: "023", label: "RUNE-003", title: "Silence", type: "Core Rune" },
  { id: "048", label: "REC-048", title: "Listening Beneath Noise", type: "Rune Recovery Record" },
  { id: "024", label: "RUNE-004", title: "Discernment", type: "Core Rune" },
];

export default function ObserverDossierPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          DOSSIER-001
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          The Observer
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          A foundational investigation into attention, presence,
          silence, discernment, and the first discipline of recovery.
        </p>

      </header>

      <section className="mb-16 grid gap-4 md:grid-cols-2">

        <div className="border border-zinc-800 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
            CLASSIFICATION
          </p>
          <p className="font-semibold">
            FOUNDATIONAL DOSSIER
          </p>
        </div>

        <div className="border border-zinc-800 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
            PRIMARY THEME
          </p>
          <p className="font-semibold">
            OBSERVATION
          </p>
        </div>

        <div className="border border-zinc-800 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
            RELATED RUNES
          </p>
          <p className="font-semibold">
            Presence / Silence / Discernment
          </p>
        </div>

        <div className="border border-zinc-800 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
            ARCHIVE STATUS
          </p>
          <p className="font-semibold">
            ACTIVE
          </p>
        </div>

      </section>

      <section className="mb-16 max-w-3xl space-y-5 text-zinc-400 leading-relaxed">

        <h2 className="text-2xl font-semibold text-white">
          Overview
        </h2>

        <p>
          Every recovery begins with observation.
        </p>

        <p>
          Before meaning can be recovered,
          attention must arrive.
        </p>

        <p>
          The Observer dossier gathers records concerned with the first
          discipline of recovery: noticing what is present before attempting
          to interpret it.
        </p>

        <p>
          Presence opens the field.
          Silence clears the field.
          Discernment teaches the observer what carries weight inside it.
        </p>

        <p>
          The Archive does not treat observation as passive.
          Observation is the beginning of participation.
        </p>

      </section>

      <section className="mb-16">

        <h2 className="mb-6 text-2xl font-semibold">
          Suggested Reading Order
        </h2>

        <div className="grid gap-4">

          {relatedRecords.map((record, index) => (
            <Link
              key={record.id}
              href={`/records/${record.id}`}
              className="group border border-zinc-800 p-5 transition hover:border-zinc-500"
            >
              <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
                STEP {String(index + 1).padStart(2, "0")} // {record.type}
              </p>

              <h3 className="mb-2 text-xl font-semibold">
                {record.label} — {record.title}
              </h3>

              <p className="text-zinc-400">
                Open related record.
              </p>
            </Link>
          ))}

        </div>

      </section>

      <section className="border border-zinc-800 p-6">

        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">
          ARCHIVE NOTE
        </p>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          This dossier functions as an introductory pathway into the Archive.
          It should be reviewed before deeper investigations into recovery,
          belonging, memory, or dissolution.
        </p>

      </section>

    </main>
  );
}
