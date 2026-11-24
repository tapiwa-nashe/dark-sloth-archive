import { records } from "../../lib/records";
import { collections } from "../../lib/collections";
import RecordsCatalogue from "../../components/RecordsCatalogue";

export default function RecordsPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC CATALOGUE // RECORDS</p>
        <h1 className="mb-6 text-5xl font-bold">Archive Records</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          A searchable catalogue of recovered records represented in the public Archive.
          Explore by classification or collection while retaining each record’s canonical identifier.
        </p>
        <p className="mt-5 text-xs tracking-[0.25em] text-zinc-500">
          {records.length} INDEXED RECORDS · {new Set(records.map((record) => record.classification)).size} CLASSIFICATIONS
        </p>
      </header>
      <RecordsCatalogue records={records} collections={collections} />
    </main>
  );
}
