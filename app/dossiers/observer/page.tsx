import Link from "next/link";
import { records } from "@/lib/records";

const relatedRecordIds = ["016", "021", "040", "046", "023", "048", "024"];
const relatedRecords = relatedRecordIds
  .map((id) => records.find((record) => record.id === id))
  .filter((record): record is (typeof records)[number] => Boolean(record));

function recordLabel(id: string) {
  const runeNumber = Number(id) - 20;
  return Number(id) >= 21 && Number(id) <= 26
    ? `RUNE-${String(runeNumber).padStart(3, "0")}`
    : `REC-${id}`;
}

export default function ObserverDossierPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">DOSSIER-001 // REFERENCE DOSSIER</p>
        <h1 className="mb-6 text-5xl font-bold">The Observer</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          A developing examination of attention, presence, silence, and discernment as conditions for careful observation and recovery.
        </p>
      </header>

      <section className="mb-12 grid gap-6 border-y border-zinc-800 py-7 md:grid-cols-3">
        <div>
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">STATUS</p>
          <p className="font-semibold">REFERENCE / REVIEW REQUIRED</p>
        </div>
        <div>
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">VERIFICATION</p>
          <p className="font-semibold">NOT ESTABLISHED</p>
        </div>
        <div>
          <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">RELATED RECORDS</p>
          <p className="font-semibold">{relatedRecords.length}</p>
        </div>
      </section>

      <section className="mb-14 max-w-4xl">
        <p className="mb-5 text-xs tracking-[0.3em] text-zinc-500">SOURCE FRAGMENT // REC-016</p>
        <blockquote className="border-l border-zinc-600 pl-6 text-3xl leading-tight text-zinc-200">
          “Move slowly enough to notice life.”
        </blockquote>
        <p className="mt-5 text-sm text-zinc-500">Presented as a source excerpt from the Recovery Laws collection.</p>
      </section>

      <section className="mb-14">
        <h2 className="mb-3 text-3xl font-semibold">Related records</h2>
        <p className="mb-6 max-w-3xl text-zinc-500">
          These records are gathered as a reading path for this dossier. Their inclusion indicates a topic relationship for examination, not proof of causation or a verified evidence chain.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {relatedRecords.map((record) => (
            <Link key={record.id} href={`/records/${record.id}`} className="border border-zinc-800 p-5 transition hover:border-zinc-500">
              <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">{recordLabel(record.id)}</p>
              <h3 className="text-xl font-semibold">{record.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{record.classification}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12 max-w-4xl">
        <h2 className="mb-5 text-3xl font-semibold">Investigation questions</h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>How does attention shape what an observer is able to notice?</p>
          <p>What distinctions do the records make between presence, patience, silence, and discernment?</p>
          <p>Which relationships are directly documented, and which remain interpretive?</p>
          <p>What additional source material is required before this dossier can be verified?</p>
        </div>
      </section>

      <section className="border border-zinc-800 p-6">
        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">ARCHIVE NOTE</p>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          This public dossier is a structured reading reference, not a completed verification finding. Its status must remain explicit until each proposed relationship is supported by traceable evidence and reviewed.
        </p>
      </section>
    </main>
  );
}
