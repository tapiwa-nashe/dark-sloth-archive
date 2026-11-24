import Link from "next/link";

const sourceEntries = [
  {
    group: "PATHFINDER HISTORY",
    id: "PF-001",
    name: "Arlen Vale",
    designation: "First Pathfinder",
    classification: "PATHFINDER DOSSIER",
    source: "Book III · Chapter 006",
    note: "The surviving records disagree about his birthplace, occupation, and age. The dossier identifies his work as the first known attempt to connect disconnected Wilds incidents. The following chapter is marked as a partial recovery.",
    status: "UNCERTAINTY RETAINED",
  },
  {
    group: "ARCHIVE HISTORY",
    id: "EC-001",
    name: "Elias Crowe",
    designation: "First Archivist",
    classification: "PRIMARY HISTORICAL FIGURE",
    source: "Book III · Chapter 019",
    note: "The dossier describes Crowe's defining work as preservation: connecting fragmented maps, expedition journals, artifact recoveries, and witness accounts into a continuity of record.",
    status: "DOSSIER RECOVERED",
  },
  {
    group: "ARCHIVE HISTORY",
    id: "NM-001",
    name: "Nala Mbeki",
    designation: "The Listener",
    classification: "PRIMARY HISTORICAL FIGURE",
    source: "Book III · Chapter 027",
    note: "The dossier records her attention to pauses, weather, silence, repeated dreams, animal behaviour, and inconsistencies in witness accounts. Her approach complemented, and sometimes challenged, Crowe's.",
    status: "DOSSIER RECOVERED",
  },
  {
    group: "WILDS ENTITIES",
    id: "MQ-001",
    name: "Mara Quell",
    designation: "The Unfinished Queen",
    classification: "PRIMARY ENTITY",
    source: "Book III · Chapter 038",
    note: "The dossier marks this entity ACTIVE and ARCHIVE PRIORITY CRITICAL. The designation emerged generations later; the Archive records that it does not know whether Mara accepts that title.",
    status: "ACTIVE · TITLE ACCEPTANCE UNKNOWN",
  },
  {
    group: "WILDS ENTITIES",
    id: "AG-001",
    name: "The Ageless",
    designation: "Continuities · provisional classification",
    classification: "AGELESS DOSSIER",
    source: "Book III · Chapter 017",
    note: "The source explicitly avoids classifying the Ageless as a species, ghosts, or immortals. “Continuities” is the Archive's provisional term for what remains present while history moves around it.",
    status: "CANONICAL · CLASSIFICATION PROVISIONAL",
  },
  {
    group: "WILDS ENTITIES",
    id: "SF-001",
    name: "The Sentinel",
    designation: "Sentinel Fragment 001",
    classification: "SENTINEL RECORD",
    source: "Book III · Chapter 004; Chapter 035",
    note: "The earliest fragment is attributed to an unidentified recovery and marked DISPUTED. A separate Chapter 035 entry from the Vale Pursuit Journal is marked AUTHENTICATED. These source states are deliberately kept distinct.",
    status: "MIXED EVIDENCE · DO NOT COLLAPSE",
  },
] as const;

const groups = ["PATHFINDER HISTORY", "ARCHIVE HISTORY", "WILDS ENTITIES"] as const;

export default function WhisperingWildsPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-14">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">COLLECTION_007 · SOURCE INDEX</p>
        <h1 className="mb-6 text-5xl font-bold">Whispering Wilds</h1>
        <div className="max-w-3xl space-y-5 text-zinc-400 leading-relaxed">
          <p>Not all recoveries originate within the Archive. Some arrive from the Wilds.</p>
          <p>
            This index is grounded in Book III of the Dark Sloth Codex. It points to
            recovered dossiers and source records; it does not turn every account,
            designation, or disputed fragment into an independently verified fact.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/books" className="border border-zinc-700 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-zinc-400">
            Open the Codex Library →
          </Link>
          <Link href="/entities" className="border border-zinc-700 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-zinc-400">
            Approved Public Entity Register →
          </Link>
        </div>
      </header>

      <section className="mb-10 border border-zinc-800 p-6">
        <p className="text-xs tracking-[0.3em] text-zinc-500">READING THE INDEX</p>
        <p className="mt-3 max-w-4xl text-sm leading-7 text-zinc-400">
          Reference identifiers and source classifications are reproduced from the
          recovered volume. “Recovered”, “authenticated”, “canonical”, and “disputed”
          are not interchangeable. Where the source preserves uncertainty, this index
          preserves it too. These entries are collection references, not separate
          public-release dossiers.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group} className="mb-14">
          <div className="mb-6 border-b border-zinc-800 pb-4">
            <p className="text-xs tracking-[0.3em] text-zinc-500">{group}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {sourceEntries.filter((entry) => entry.group === group).map((entry) => (
              <article key={entry.id} className="border border-zinc-800 p-6 transition hover:border-zinc-600">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs tracking-[0.25em] text-zinc-500">{entry.id}</span>
                  <span className="text-[10px] tracking-[0.18em] text-zinc-500">{entry.status}</span>
                </div>
                <h2 className="text-2xl font-semibold">{entry.name}</h2>
                <p className="mt-2 text-sm text-zinc-300">{entry.designation}</p>
                <p className="mt-4 text-[10px] tracking-[0.2em] text-zinc-500">{entry.classification}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{entry.note}</p>
                <p className="mt-5 border-t border-zinc-800 pt-4 text-[10px] tracking-[0.18em] text-zinc-500">
                  SOURCE · {entry.source}
                </p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="border-t border-zinc-800 pt-8">
        <p className="text-xs tracking-[0.3em] text-zinc-500">RECOVERY REMAINS OPEN</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
          This source index is not a substitute for the underlying volume. New entries
          require traceable source material, and public entity profiles remain subject
          to the Archive's separate approval and release process.
        </p>
      </footer>
    </main>
  );
}
