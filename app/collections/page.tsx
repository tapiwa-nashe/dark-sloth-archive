import Link from "next/link";
import { collections } from "@/lib/collections";

export default function CollectionsPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-16">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">ARCHIVE COLLECTIONS</p>
        <h1 className="mb-6 text-5xl font-bold">Collections</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          The Archive reveals itself through ordered collections. Each collection preserves a different layer of recovered meaning.
        </p>
        <p className="mt-5 text-xs tracking-[0.25em] text-zinc-500">{collections.length} CATALOGUED COLLECTIONS</p>
      </header>
      <section className="grid gap-6 md:grid-cols-2">
        {collections.map((collection) => (
          <Link key={collection.id} href={collection.href} className="group border border-zinc-800 p-6 transition hover:border-zinc-500">
            <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">{collection.id}</p>
            <h2 className="mb-4 text-2xl font-semibold">{collection.title}</h2>
            <p className="text-zinc-400 leading-relaxed">{collection.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
