import Link from "next/link";

const records = [
  { id: "027", label: "DC-001", title: "The First Frame" },
  { id: "028", label: "DC-002", title: "Naming Protocol Activated" },
  { id: "029", label: "DC-003", title: "Boundary Assertion Event" },
  { id: "030", label: "DC-004", title: "Signal Without Context" },
  { id: "031", label: "DC-005", title: "Structure Hypothesis" },
  { id: "032", label: "DC-006", title: "Self-Reference Emergence" },
  { id: "033", label: "DC-007", title: "Stability Simulation" },
  { id: "034", label: "DC-008", title: "Recursive Labeling Begins" },
  { id: "035", label: "DC-009", title: "Meaning Compression" },
  { id: "036", label: "DC-010", title: "Early Drift Detected" },
];

export default function DissolutionCyclePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          COLLECTION_005
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          The Dissolution Cycle
        </h1>

        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">

          <p>
            Recovered records documenting the lifecycle of systems.
          </p>

          <p>
            Emergence.
            Structure.
            Drift.
            Collapse.
            Renewal.
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
