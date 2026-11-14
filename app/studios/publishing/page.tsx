import Link from "next/link";
import { getPublicEditionRegistry } from "@/lib/publishing/registry";

export default function PublishingStudioPage() {
  const editions = getPublicEditionRegistry();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.35em] text-neutral-500 uppercase mb-6">
          DARK SLOTH // STUDIOS
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          PUBLISHED EDITIONS
        </h1>
        <p className="max-w-3xl text-neutral-400 leading-8 mb-12">
          The public catalogue of editions formally released by the Archive.
          Publishing and production operations are conducted within the Archive Platform.
        </p>

        {editions.length === 0 ? (
          <div className="border border-neutral-800 rounded-lg p-8 text-neutral-500">
            No generated editions currently meet the public release requirements.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            {editions.map(edition => (
              <Link
                href={`/studios/publishing/${encodeURIComponent(edition.title)}`}
                key={edition.id}
                className="block border border-neutral-800 bg-neutral-950 rounded-lg p-6 hover:border-neutral-500 transition"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-3">
                  Released Edition
                </p>
                <h2 className="text-xl font-semibold mb-3">{edition.title}</h2>
                <p className="text-sm text-neutral-400">
                  Published {new Date(edition.publishedAt).toLocaleDateString()}
                </p>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 border border-neutral-800 rounded-lg p-8">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-neutral-500 mb-3">
            Production workspace
          </p>
          <h2 className="text-2xl font-semibold mb-3">Publishing Studio</h2>
          <p className="text-neutral-400 leading-7">
            Edition generation, manuscript preparation, verification and release controls
            are Platform operations and are not exposed through this public catalogue.
          </p>
          <Link href="/platform" className="inline-flex mt-6 border border-neutral-700 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition">
            Explore the Archive Platform →
          </Link>
        </div>
      </section>
    </main>
  );
}
