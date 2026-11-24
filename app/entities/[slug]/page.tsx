import Link from "next/link";
import { notFound } from "next/navigation";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export default async function PublicEntityPage({ params }: Props) {
  const { slug } = await params;
  const feed = await getPublicArchiveFeed();
  const entity = feed.entities.find((item) => item.slug === slug);
  if (!entity) notFound();

  return (
    <main className="archive-derived-page mx-auto max-w-4xl px-6 py-16">
      <Link href="/entities" className="mb-10 inline-flex text-sm text-zinc-500 hover:text-zinc-200">← People & Entities</Link>
      <header className="mb-12">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">{entity.canonicalId}{" // "}{entity.entityType}</p>
        <h1 className="mb-6 text-5xl font-bold">{entity.title}</h1>
        <p className="text-xl leading-relaxed text-zinc-400">{entity.summary}</p>
      </header>
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-semibold">Recovered profile</h2>
        <p className="whitespace-pre-wrap leading-8 text-zinc-300">{entity.biography}</p>
      </section>
      {entity.aliases.length ? <section className="mb-10"><h2 className="mb-3 text-lg font-semibold">Recorded names</h2><p className="text-zinc-400">{entity.aliases.join(" · ")}</p></section> : null}
      <section className="border-t border-zinc-800 pt-6">
        <p className="mb-2 text-xs tracking-[0.3em] text-zinc-500">SOURCE AND CANON REFERENCES</p>
        <p className="text-sm text-zinc-400">{entity.canonReferences.length ? entity.canonReferences.join(" · ") : "No additional public canon references supplied."}</p>
        <p className="mt-4 text-xs text-zinc-600">Published {entity.publishedAt ? new Date(entity.publishedAt).toLocaleDateString("en-ZA") : "Date not supplied"}</p>
      </section>
    </main>
  );
}
