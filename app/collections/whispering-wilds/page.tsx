import Link from "next/link";

const records = [
  { id: "037", label: "WW-001", title: "Elias Crowe" },
  { id: "038", label: "WW-002", title: "The Black Vault" },
  { id: "039", label: "WW-003", title: "The Sentinel" },
];

export default function WhisperingWildsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          COLLECTION_007
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Whispering Wilds
        </h1>

        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">

          <p>
            Not all recoveries originate within the Archive.
          </p>

          <p>
            Some arrive from the Wilds.
          </p>

          <p>
            Some should perhaps have remained there.
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
