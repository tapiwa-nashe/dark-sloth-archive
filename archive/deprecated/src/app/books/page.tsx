export default function BooksPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-16">
          <p className="mb-3 text-sm tracking-[0.3em] text-zinc-500">
            ARCHIVE LIBRARY
          </p>

          <h1 className="mb-6 text-5xl font-bold">
            Recovered Texts
          </h1>

          <p className="max-w-3xl text-zinc-400 leading-relaxed">
            Recovered texts preserved within the Archive.
            Each volume reveals a different layer of the system.
            History. Language. Meaning.
            Proceed carefully.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          <article className="border border-zinc-800 bg-zinc-950 p-8">
            <div className="aspect-[2/3] w-full border border-zinc-800 bg-zinc-900 mb-6 flex items-center justify-center">
              <span className="text-zinc-600">
                BOOK I COVER
              </span>
            </div>

            <p className="text-xs tracking-[0.25em] text-zinc-500 mb-2">
              BOOK I
            </p>

            <h2 className="text-3xl font-bold mb-2">
              THE DISSOLUTION CYCLE
            </h2>

            <p className="text-zinc-500 mb-6">
              Field Logs of Systems That Dissolve Themselves
            </p>

            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <p>
                <strong>Status:</strong> Published
              </p>

              <p>
                <strong>Classification:</strong> Public Record
              </p>
            </div>

            <p className="leading-relaxed text-zinc-300 mb-8">
              The first recovered volume of the Dark Sloth Codex.
              Through one hundred field log entries, The Dissolution Cycle
              examines the recurring patterns through which individuals,
              institutions, civilizations, and belief systems undermine
              themselves.
              The work is not a prediction.
              It is an observation.
            </p>

            <a
              href="#"
              className="inline-block border border-white px-5 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              RECOVER COPY
            </a>
          </article>

          <article className="border border-zinc-800 bg-zinc-950 p-8">
            <div className="aspect-[2/3] w-full border border-zinc-800 bg-zinc-900 mb-6 flex items-center justify-center">
              <span className="text-zinc-600">
                BOOK II COVER
              </span>
            </div>

            <p className="text-xs tracking-[0.25em] text-zinc-500 mb-2">
              BOOK II
            </p>

            <h2 className="text-3xl font-bold mb-2">
              THE LANGUAGE OF RECOVERY
            </h2>

            <p className="text-zinc-500 mb-6">
              Archive Key
            </p>

            <div className="space-y-3 text-sm text-zinc-400 mb-6">
              <p>
                <strong>Status:</strong> Published
              </p>

              <p>
                <strong>Classification:</strong> Archive Key
              </p>
            </div>

            <p className="leading-relaxed text-zinc-300 mb-8">
              The second recovered volume of the Dark Sloth Codex.
              Where The Dissolution Cycle examines collapse,
              The Language of Recovery explores reconstruction.
              The volume introduces the Four Circles of Recovery
              and the Twenty-Four Core Runes that form the symbolic
              language of the Archive.
            </p>

            <a
              href="#"
              className="inline-block border border-white px-5 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              RECOVER COPY
            </a>
          </article>

        </div>

        <div className="mt-20 border-t border-zinc-800 pt-10">
          <p className="text-zinc-500 leading-relaxed">
            ARCHIVE NOTICE
          </p>

          <p className="mt-4 text-zinc-300">
            Artifacts preserve fragments.
            Books preserve pathways.
            The Archive reveals itself in layers.
          </p>
        </div>

      </div>
    </main>
  );
}
