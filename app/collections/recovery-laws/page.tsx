import Link from "next/link";

const records = [
  {
    id: "016",
    label: "REC-016",
    title: "Move Slowly Enough To Notice Life",
  },

  {
    id: "017",
    label: "REC-017",
    title: "Nothing Is Invented. Only Recovered.",
  },

  {
    id: "018",
    label: "REC-018",
    title: "Knowledge Has Weight.",
  },

  {
    id: "019",
    label: "REC-019",
    title: "The Wilds Are Never Fully Mapped.",
  },

  {
    id: "020",
    label: "REC-020",
    title: "Access May Be Recovered Through Many Paths. Belonging Can Only Be Earned.",
  },
];

export default function RecoveryLawsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          COLLECTION_003
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          The Recovery Laws
        </h1>

        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">

          <p>
            The Archive is guided by a small number of foundational laws.
          </p>

          <p>
            These laws govern observation, recovery,
            stewardship, humility, belonging,
            and participation.
          </p>

          <p>
            Read carefully.
          </p>

          <p>
            Some laws explain the Archive.
            Others explain life itself.
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
