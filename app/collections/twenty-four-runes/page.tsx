import Link from "next/link";
import { records } from "../../../lib/records";

const runeRecords = records.filter((record) => Number(record.id) >= 21 && Number(record.id) <= 26);
const recoveryRecords = records.filter((record) => Number(record.id) >= 40 && Number(record.id) <= 51);

export default function TwentyFourRunesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-16">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">COLLECTION_004</p>
        <h1 className="mb-6 text-5xl font-bold">The Twenty-Four Runes</h1>
        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">
          <p>The canonical rune records and their recovered studies are preserved together in this collection.</p>
          <p>The six rune records currently represented here are followed by twelve recovery records that examine their principles.</p>
          <p>The collection title preserves the complete canonical system; this catalogue does not imply that all twenty-four rune records have been published here.</p>
        </div>
      </header>
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Canonical rune records</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {runeRecords.map((record) => (
            <Link key={record.id} href={`/records/${record.id}`} className="group border border-zinc-800 p-6 transition hover:border-zinc-500">
              <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">RUNE-{String(Number(record.id) - 20).padStart(3, "0")}</p>
              <h3 className="text-xl font-semibold">{record.title}</h3>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Rune recovery records</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {recoveryRecords.map((record) => (
            <Link key={record.id} href={`/records/${record.id}`} className="group border border-zinc-800 p-6 transition hover:border-zinc-500">
              <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">REC-{record.id}</p>
              <h3 className="text-xl font-semibold">{record.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
