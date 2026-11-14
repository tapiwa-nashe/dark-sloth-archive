import Link from "next/link";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export const dynamic = "force-dynamic";

export default async function EntitiesPage() {
  const feed = await getPublicArchiveFeed();
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC ENTITY REGISTER</p>
        <h1 className="mb-6 text-5xl font-bold">People & Entities</h1>
        <p className="max-w-3xl text-zinc-400 leading-relaxed">Recovered characters and canonical entities are presented here only when their source material and public release have been explicitly approved.</p>
      </header>
      {feed.entities.length ? (
        <section className="grid gap-5 md:grid-cols-2">
          {feed.entities.map((entity) => (
            <Link key={entity.canonicalId} href={`/entities/${entity.slug}`} className="border border-zinc-800 p-6 transition hover:border-zinc-500">
              <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">{entity.canonicalId}</p>
              <h2 className="mb-3 text-2xl font-semibold">{entity.title}</h2>
              <p className="text-zinc-400 leading-relaxed">{entity.summary}</p>
              <p className="mt-5 text-xs tracking-[0.2em] text-zinc-500">{entity.entityType}</p>
            </Link>
          ))}
        </section>
      ) : (
        <section className="border border-zinc-800 p-7">
          <p className="text-xs tracking-[0.3em] text-zinc-500">{feed.connected ? "NO APPROVED PUBLIC ENTITY RELEASES" : "PUBLIC READ MODEL NOT CONNECTED"}</p>
          <h2 className="mt-4 text-2xl font-semibold">Recovered profiles will appear here after canon and publication review.</h2>
          <p className="mt-4 max-w-3xl text-zinc-400 leading-relaxed">Participant identities are separate from recovered characters and canonical entities. This register does not expose participant identity records.</p>
        </section>
      )}
    </main>
  );
}
