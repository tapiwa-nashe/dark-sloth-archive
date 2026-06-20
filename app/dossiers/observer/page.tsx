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

      <header className="mb-10">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          DOSSIER-001
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          THE OBSERVER EFFECT
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          An active investigation into attention, presence, silence,
          discernment, and the foundational conditions required for Recovery.
        </p>

      </header>

      <section className="mb-12 grid gap-10 border-t border-b border-zinc-800 py-8 lg:grid-cols-[520px_1fr]">

        <div className="grid grid-cols-2 gap-x-12 gap-y-6">

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              ARCHIVE ID
            </p>
            <p className="text-lg font-semibold">DOS-001</p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              STATUS
            </p>
            <p className="font-semibold text-amber-400">
              ACTIVE INVESTIGATION
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              CLASSIFICATION
            </p>
            <p className="font-semibold text-blue-400">
              FOUNDATIONAL
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              VERIFICATION
            </p>
            <p className="font-semibold text-pink-400">
              PARTIAL
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              CONFIDENCE
            </p>
            <p className="font-semibold text-green-400">
              72%
            </p>
          </div>

          <div>
            <p className="mb-1 text-xs tracking-[0.35em] text-zinc-500">
              RELATED RECOVERIES
            </p>
            <p className="font-semibold">
              7
            </p>
          </div>

        </div>

        <div className="border border-zinc-800 p-6">

          <p className="mb-5 text-xs tracking-[0.35em] text-zinc-500">
            ARCHIVE FRAGMENT // REC-016
          </p>

          <blockquote className="text-3xl leading-tight text-zinc-200">
            "Move slowly enough to notice life."
          </blockquote>

          <p className="mt-6 text-sm text-zinc-500">
            Earliest known formulation of the Observer Principle.
            Recovery source remains under investigation.
          </p>

        </div>

      </section>

      <section className="mb-14">

        <h2 className="text-3xl font-semibold mb-2">
          EVIDENCE CHAIN
        </h2>

        <p className="text-zinc-500 mb-6">
          7 RELATED RECORDS
        </p>

        <div className="overflow-x-auto">

          <div className="flex items-center gap-4 min-w-max pb-2">

            {evidenceChain.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4">

                <div className="w-[260px] border border-zinc-800 p-5">

                  <p className="text-xs tracking-[0.3em] text-zinc-500 mb-2">
                    EVIDENCE
                  </p>

                  <h3 className="text-xl font-semibold">
                    {item.label}
                  </h3>

                  <p className="text-zinc-400 mt-2">
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

      <section className="mb-12">

        <h2 className="mb-6 text-3xl font-semibold">
          RELATED DOSSIERS
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-6">

          <Link
            href="#"
            className="block border-b border-zinc-800 pb-4 hover:border-zinc-500 transition"
          >
            <p className="text-red-400 text-sm tracking-[0.3em] mb-2">
              DOS-002
            </p>

            <h3 className="text-2xl font-semibold">
              The Black Vault
            </h3>

            <p className="text-red-400 text-sm mt-2">
              RESTRICTED
            </p>
          </Link>

          <Link
            href="#"
            className="block border-b border-zinc-800 pb-4 hover:border-zinc-500 transition"
          >
            <p className="text-blue-400 text-sm tracking-[0.3em] mb-2">
              DOS-003
            </p>

            <h3 className="text-2xl font-semibold">
              The Language Beneath The Runes
            </h3>

            <p className="text-blue-400 text-sm mt-2">
              FOUNDATIONAL
            </p>
          </Link>

        </div>

      </section>

      <section className="mb-12">

        <h2 className="mb-6 text-3xl font-semibold">
          ARCHIVE ASSESSMENT
        </h2>

        <div className="max-w-3xl space-y-2">

          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">Confidence</span>
            <span className="text-green-400 font-semibold">72%</span>
          </div>

          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">Risk</span>
            <span className="font-semibold">LOW</span>
          </div>

          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-500">Verification</span>
            <span className="text-pink-400 font-semibold">PARTIAL</span>
          </div>

          <div className="flex justify-between pb-2">
            <span className="text-zinc-500">Classification</span>
            <span className="text-blue-400 font-semibold">
              FOUNDATIONAL
            </span>
          </div>

        </div>

      </section>

      <section className="mb-12 max-w-4xl">

        <h2 className="mb-6 text-3xl font-semibold">
          INVESTIGATION REPORT
        </h2>

        <div className="space-y-4 text-zinc-400 leading-relaxed">

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

          <p>
            Investigation remains active.
          </p>

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
