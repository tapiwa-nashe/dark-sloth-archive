import Link from "next/link";
import { records } from "@/lib/records";

type Props = {
  id: string;
  title: string;
  description: string;
  recordCollection: string;
};

export default function CollectionDetail({ id, title, description, recordCollection }: Props) {
  const collectionRecords = records.filter((record) => record.collection === recordCollection);

  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-14">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">{id}</p>
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>
        <p className="max-w-3xl text-zinc-400 leading-8">{description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-y border-zinc-800 py-4">
          <span className="text-xs tracking-[0.2em] text-zinc-500">
            {String(collectionRecords.length).padStart(3, "0")} CATALOGUED RECORDS
          </span>
          <span className="text-xs tracking-[0.2em] text-zinc-600">SOURCE CATALOGUE</span>
        </div>
      </header>

      <section aria-label={`${title} records`} className="grid gap-4">
        {collectionRecords.length > 0 ? collectionRecords.map((record) => (
          <Link
            key={record.id}
            href={`/records/${record.id}`}
            className="group grid gap-4 border border-zinc-800 p-5 transition hover:border-zinc-500 md:grid-cols-[7rem_1fr_auto] md:items-center md:p-6"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-zinc-500">REC-{record.id}</span>
            <span>
              <span className="block text-lg font-semibold text-zinc-100 transition group-hover:text-white">{record.title}</span>
              <span className="mt-2 block text-xs tracking-[0.14em] text-zinc-500">{record.classification}</span>
            </span>
            <span className="text-xs tracking-[0.18em] text-zinc-500 transition group-hover:text-zinc-200">OPEN RECORD →</span>
          </Link>
        )) : (
          <div className="border border-zinc-800 p-8">
            <p className="text-sm text-zinc-300">No records are currently catalogued under this collection.</p>
            <p className="mt-2 text-sm leading-7 text-zinc-500">The collection remains listed without inventing entries. New records will appear when they are added to the public catalogue.</p>
          </div>
        )}
      </section>

      <footer className="mt-14 border-t border-zinc-800 pt-6">
        <Link href="/collections" className="text-xs tracking-[0.2em] text-zinc-500 transition hover:text-zinc-200">← ALL COLLECTIONS</Link>
      </footer>
    </main>
  );
}
