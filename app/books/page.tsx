import Image from "next/image";

export default function BooksPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <header className="mb-20">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          ARCHIVE LIBRARY
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Recovered Texts
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          Recovered texts preserved within the Archive.
          Each volume reveals a different layer of the system.
          History. Language. Meaning.
          The Archive reveals itself in layers.
        </p>

      </header>

      <section className="space-y-24">

        <article className="grid gap-10 lg:grid-cols-[350px_1fr]">

          <div>
            <Image
              src="/books/book-1.jpg"
              alt="The Dissolution Cycle"
              width={700}
              height={1050}
              className="w-full border border-zinc-800"
              priority
            />
          </div>

          <div>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              VOLUME_001
            </p>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              BOOK I
            </p>

            <h2 className="mb-3 text-4xl font-bold">
              THE DISSOLUTION CYCLE
            </h2>

            <p className="mb-8 text-zinc-500">
              Field Logs of Systems That Dissolve Themselves
            </p>

            <div className="mb-8 space-y-2 text-sm text-zinc-400">
              <p>STATUS: PUBLISHED</p>
              <p>CLASSIFICATION: PUBLIC RECORD</p>
              <p>SERIES: DARK SLOTH CODEX</p>
              <p>VOLUME: I</p>
            </div>

            <p className="mb-10 max-w-3xl leading-relaxed text-zinc-300">
              The first recovered volume of the Dark Sloth Codex.
              Through one hundred field log entries, The Dissolution Cycle
              examines the recurring patterns through which individuals,
              institutions, civilizations, and belief systems dissolve
              themselves. The work is not a prediction.
              It is an observation.
            </p>

            <a
              href="https://www.amazon.com/dp/B0GX7P1MKJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-6 py-3 text-sm tracking-wider transition hover:bg-white hover:text-black"
            >
              RECOVER VOLUME
            </a>

          </div>

        </article>

        <article className="grid gap-10 lg:grid-cols-[350px_1fr]">

          <div>
            <Image
              src="/books/book-2.jpg"
              alt="The Language of Recovery"
              width={700}
              height={1050}
              className="w-full border border-zinc-800"
            />
          </div>

          <div>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              VOLUME_002
            </p>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              BOOK II
            </p>

            <h2 className="mb-3 text-4xl font-bold">
              THE LANGUAGE OF RECOVERY
            </h2>

            <p className="mb-8 text-zinc-500">
              Archive Key
            </p>

            <div className="mb-8 space-y-2 text-sm text-zinc-400">
              <p>STATUS: PUBLISHED</p>
              <p>CLASSIFICATION: ARCHIVE KEY</p>
              <p>SERIES: DARK SLOTH CODEX</p>
              <p>VOLUME: II</p>
            </div>

            <p className="mb-10 max-w-3xl leading-relaxed text-zinc-300">
              The second recovered volume of the Dark Sloth Codex.
              Where The Dissolution Cycle examines collapse,
              The Language of Recovery explores reconstruction.
              The volume introduces the Four Circles of Recovery
              and the Twenty-Four Core Runes that form the symbolic
              language of the Archive.
            </p>

            <a
              href="https://www.amazon.com/dp/B0GX7P1MKJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-6 py-3 text-sm tracking-wider transition hover:bg-white hover:text-black"
            >
              RECOVER VOLUME
            </a>

          </div>

        </article>

        <article className="grid gap-10 lg:grid-cols-[350px_1fr]">

          <div>
            <Image
              src="/books/book-3.jpg"
              alt="The Whispering Wilds"
              width={700}
              height={1050}
              className="w-full border border-zinc-800"
            />
          </div>

          <div>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              VOLUME_003
            </p>

            <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">
              BOOK III
            </p>

            <h2 className="mb-3 text-4xl font-bold">
              THE WHISPERING WILDS
            </h2>

            <p className="mb-8 text-zinc-500">
              Recovered Mythology
            </p>

            <div className="mb-8 space-y-2 text-sm text-zinc-400">
              <p>STATUS: PUBLISHED</p>
              <p>CLASSIFICATION: PUBLIC RECORD</p>
              <p>SERIES: DARK SLOTH CODEX</p>
              <p>VOLUME: III</p>
            </div>

            <p className="mb-10 max-w-3xl leading-relaxed text-zinc-300">
              The third recovered volume of the Dark Sloth Codex.

              The Whispering Wilds documents territories beyond the mapped
              boundaries of the Archive. Through recovered fragments,
              expeditions, anomalies, sentinels, forgotten histories,
              and encounters with the unknown, the volume explores the
              oldest layer of Dark Sloth mythology.

              Not every place wishes to be found.
              Not every recovery wishes to be remembered.
            </p>

            <a
              href="https://www.amazon.com/dp/B0GX7P1MKJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white px-6 py-3 text-sm tracking-wider transition hover:bg-white hover:text-black"
            >
              RECOVER VOLUME
            </a>

          </div>

        </article>

      </section>

      <section className="mt-24 border-t border-zinc-800 pt-10">

        <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">
          ARCHIVE NOTICE
        </p>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          Artifacts preserve fragments.
          Books preserve pathways.
          The Archive reveals itself through progressive recovery.
          Begin wherever you choose.
          The pathway remains the same.
        </p>

      </section>

    </main>
  );
}
