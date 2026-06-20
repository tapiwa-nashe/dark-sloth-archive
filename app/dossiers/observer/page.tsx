import Link from "next/link";

const evidenceChain = [
  { id: "016", label: "REC-016", title: "Move Slowly Enough To Notice Life" },
  { id: "021", label: "RUNE-001", title: "Presence" },
  { id: "040", label: "REC-040", title: "The Cost of Distraction" },
  { id: "046", label: "REC-046", title: "The Discipline of Attention" },
  { id: "023", label: "RUNE-003", title: "Silence" },
  { id: "048", label: "REC-048", title: "Listening Beneath Noise" },
  { id: "024", label: "RUNE-004", title: "Discernment" },
];

export default function ObserverDossierPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          DOSSIER-001
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          THE OBSERVER EFFECT
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed mb-8">
          An active investigation into attention, presence, silence,
          discernment, and the foundational conditions required for Recovery.
        </p>

        <div className="grid gap-4 md:grid-cols-4">

          <div className="border border-zinc-800 p-4">
            <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
              ARCHIVE ID
            </p>
            <p className="font-semibold">DOS-001</p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
              EVIDENCE CHAINS
            </p>
            <p className="font-semibold">7</p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
              RELATED RECOVERIES
            </p>
            <p className="font-semibold">7</p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
              LAST REVIEW
            </p>
            <p className="font-semibold text-amber-400">ACTIVE</p>
          </div>

        </div>

      </header>

      <section className="mb-16 grid gap-4 md:grid-cols-4">

        <div className="border border-amber-700/50 bg-amber-950/20 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-amber-500">
            STATUS
          </p>
          <p className="font-semibold text-amber-300">
            ACTIVE INVESTIGATION
          </p>
        </div>

        <div className="border border-blue-700/50 bg-blue-950/20 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-blue-500">
            CLASSIFICATION
          </p>
          <p className="font-semibold text-blue-300">
            FOUNDATIONAL
          </p>
        </div>

        <div className="border border-amber-700/50 bg-amber-950/20 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-amber-500">
            VERIFICATION
          </p>
          <p className="font-semibold text-amber-300">
            PARTIAL
          </p>
        </div>

        <div className="border border-green-700/50 bg-green-950/20 p-5">
          <p className="mb-2 text-xs tracking-[0.3em] text-green-500">
            CONFIDENCE
          </p>
          <p className="font-semibold text-green-300">
            72%
          </p>
        </div>

      </section>

      <section className="mb-16 max-w-4xl">

        <h2 className="mb-6 text-3xl font-semibold">
          INVESTIGATION SUMMARY
        </h2>

        <div className="space-y-5 text-zinc-400 leading-relaxed">

          <p>Every recovery begins with observation.</p>

          <p>
            Before meaning can be recovered, attention must arrive.
          </p>

          <p>
            This dossier gathers evidence suggesting that attention,
            presence, silence, and discernment are not supporting
            practices but foundational conditions for Recovery itself.
          </p>

          <p>
            Multiple records indicate that failures of observation
            consistently precede failures of interpretation.
          </p>

          <p>Investigation remains active.</p>

        </div>

      </section>

      <section className="mb-20">

        <h2 className="mb-8 text-3xl font-semibold">
          EVIDENCE CHAIN
        </h2>

        <div className="overflow-x-auto">

          <div className="flex items-center gap-4 min-w-max pb-2">

            {evidenceChain.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4">

                <div className="w-[240px] border border-zinc-800 bg-black/40 p-4">
                  <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
                    EVIDENCE
                  </p>

                  <h3 className="text-lg font-semibold">
                    {item.label}
                  </h3>

                  <p className="text-zinc-400 mt-2 text-sm">
                    {item.title}
                  </p>
                </div>

                {index < evidenceChain.length - 1 && (
                  <div className="text-zinc-600 text-2xl">
                    →
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>

      </section>

      <section className="mb-16">

        <h2 className="mb-6 text-3xl font-semibold">
          RELATED DOSSIERS
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <Link
            href="#"
            className="border border-red-900/50 bg-red-950/20 p-5 transition hover:border-red-500"
          >
            <p className="text-xs tracking-[0.3em] text-red-500 mb-2">
              DOS-002
            </p>

            <h3 className="text-xl font-semibold">
              The Black Vault
            </h3>
          </Link>

          <Link
            href="#"
            className="border border-blue-900/50 bg-blue-950/20 p-5 transition hover:border-blue-500"
          >
            <p className="text-xs tracking-[0.3em] text-blue-500 mb-2">
              DOS-003
            </p>

            <h3 className="text-xl font-semibold">
              The Language Beneath The Runes
            </h3>
          </Link>

        </div>

      </section>

      <section className="mb-16">

        <h2 className="mb-6 text-3xl font-semibold">
          ARCHIVE ASSESSMENT
        </h2>

        <div className="grid gap-4 md:grid-cols-4">

          <div className="border border-zinc-800 p-5">
            <p className="text-zinc-500 text-xs mb-2">CONFIDENCE</p>
            <p className="text-3xl font-bold">72%</p>
          </div>

          <div className="border border-zinc-800 p-5">
            <p className="text-zinc-500 text-xs mb-2">RISK</p>
            <p className="text-3xl font-bold">LOW</p>
          </div>

          <div className="border border-zinc-800 p-5">
            <p className="text-zinc-500 text-xs mb-2">STATUS</p>
            <p className="text-2xl font-bold">PARTIAL</p>
          </div>

          <div className="border border-zinc-800 p-5">
            <p className="text-zinc-500 text-xs mb-2">TYPE</p>
            <p className="text-2xl font-bold break-words">
              FOUNDATIONAL
            </p>
          </div>

        </div>

      </section>

      <section className="border border-zinc-800 p-6">

        <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">
          FIELD NOTE
        </p>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          The pattern has now appeared across multiple independent recoveries.
          Correlation no longer appears accidental. Observation continues to
          emerge as a prerequisite for meaningful recovery.
        </p>

      </section>

    </main>
  );
}
