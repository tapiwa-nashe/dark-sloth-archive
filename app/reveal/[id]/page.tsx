import Link from "next/link";
import { notFound } from "next/navigation";
import { records } from "@/lib/records";
import { getRecordContent } from "@/lib/archive";
import { getRecordProvenance } from "@/lib/record-provenance";
import { getPublicArchiveFeed } from "@/lib/public-content/client";
import { getArchiveBooks } from "@/lib/books/editionBooks";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ id: string }> };
const kicker = "font-mono text-[10px] tracking-[0.24em] text-neutral-500 uppercase";

export default async function PublicRevealPage({ params }: Props) {
  const { id } = await params;
  const identifier = decodeURIComponent(id).trim();
  if (!identifier || identifier.length > 180) notFound();

  const recordId = identifier.toUpperCase().startsWith("REC-") ? identifier.slice(4) : identifier;
  const staticRecord = records.find((item) => item.id === recordId);
  if (staticRecord) {
    const { data } = getRecordContent(recordId);
    const provenance = getRecordProvenance(recordId);
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-white">
        <section className="border border-neutral-800 bg-black/70 p-6 sm:p-9">
          <p className={kicker}>Dark Sloth Archive / Public Record Reveal</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{data.title || staticRecord.title}</h1>
          <p className="mt-3 font-mono text-xs tracking-widest text-amber-200">REC-{staticRecord.id}</p>
          <dl className="mt-8 grid gap-5 border-y border-neutral-800 py-6 sm:grid-cols-2">
            <div><dt className={kicker}>Catalogue status</dt><dd className="mt-2 text-sm">{staticRecord.status}</dd></div>
            <div><dt className={kicker}>Classification</dt><dd className="mt-2 text-sm">{staticRecord.classification}</dd></div>
            <div><dt className={kicker}>Collection</dt><dd className="mt-2 text-sm">{staticRecord.collection}</dd></div>
            <div><dt className={kicker}>Provenance state</dt><dd className="mt-2 text-sm">{provenance?.provenanceStatus?.replace(/_/g, " ") ?? "Not separately registered"}</dd></div>
          </dl>
          <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-400">This reveal identifies a public Archive catalogue record. It does not grant access to private dossiers, participant activity or restricted material.</p>
          <Link href={`/records/${staticRecord.id}`} className="mt-7 inline-flex min-h-11 items-center border border-amber-700 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-amber-900/20">Open public record <span className="ml-3">↗</span></Link>
        </section>
      </main>
    );
  }

  const feed = await getPublicArchiveFeed();
  const recovery = feed.recoveries.find((item) => item.canonicalId === identifier || item.slug === identifier);
  if (recovery) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-white">
        <section className="border border-neutral-800 bg-black/70 p-6 sm:p-9">
          <p className={kicker}>Dark Sloth Archive / Public Recovery Reveal</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{recovery.title}</h1>
          <p className="mt-3 font-mono text-xs tracking-widest text-amber-200">{recovery.canonicalId}</p>
          <dl className="mt-8 grid gap-5 border-y border-neutral-800 py-6 sm:grid-cols-2">
            <div><dt className={kicker}>Release status</dt><dd className="mt-2 text-sm">{recovery.publicationStatus}</dd></div>
            <div><dt className={kicker}>Classification</dt><dd className="mt-2 text-sm">{recovery.recoveryType}</dd></div>
            <div><dt className={kicker}>Published</dt><dd className="mt-2 text-sm">{recovery.publishedAt ? new Date(recovery.publishedAt).toLocaleDateString("en-ZA") : "Date not supplied"}</dd></div>
            <div><dt className={kicker}>Source references</dt><dd className="mt-2 text-sm">{recovery.sourceReferences.length}</dd></div>
          </dl>
          <p className="mt-6 text-sm leading-7 text-neutral-300">{recovery.summary}</p>
          {recovery.verificationSummary && <p className="mt-4 border-l-2 border-amber-700 pl-4 text-sm leading-7 text-neutral-400">{recovery.verificationSummary}</p>}
          {recovery.narrative ? <section className="mt-8 border-t border-neutral-800 pt-6"><h2 className={kicker}>Publicly released narrative</h2><p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-neutral-300">{recovery.narrative}</p></section> : <p className="mt-6 text-xs leading-6 text-neutral-500">The full recovery narrative is not part of this public release. This page remains available as a public reference.</p>}
        </section>
      </main>
    );
  }

  const entity = feed.entities.find((item) => item.canonicalId === identifier || item.slug === identifier);
  if (entity) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-white">
        <section className="border border-neutral-800 bg-black/70 p-6 sm:p-9">
          <p className={kicker}>Dark Sloth Archive / Public Entity Reveal</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{entity.title}</h1>
          <p className="mt-3 font-mono text-xs tracking-widest text-amber-200">{entity.canonicalId}</p>
          <p className="mt-6 text-sm leading-7 text-neutral-300">{entity.summary}</p>
          <div className="mt-8 border-t border-neutral-800 pt-6"><h2 className={kicker}>Public biography</h2><p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-neutral-400">{entity.biography}</p></div>
          {entity.canonReferences.length > 0 && <p className="mt-6 text-xs text-neutral-500">Canon references: {entity.canonReferences.join(", ")}</p>}
        </section>
      </main>
    );
  }

  const edition = feed.editions.find((item) => item.publicationId === identifier);
  if (edition) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-white">
        <section className="border border-neutral-800 bg-black/70 p-6 sm:p-9">
          <p className={kicker}>Dark Sloth Archive / Public Publication Reveal</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{edition.title}</h1>
          <p className="mt-3 font-mono text-xs tracking-widest text-amber-200">{edition.publicationId}</p>
          <dl className="mt-8 grid gap-5 border-y border-neutral-800 py-6 sm:grid-cols-2">
            <div><dt className={kicker}>Publication status</dt><dd className="mt-2 text-sm">{edition.publicationStatus}</dd></div>
            <div><dt className={kicker}>Visibility</dt><dd className="mt-2 text-sm">{edition.visibility}</dd></div>
          </dl>
          <p className="mt-6 text-sm leading-7 text-neutral-400">
            This public reveal confirms the publication record. It does not grant access to the full manuscript, reader or download. Those permissions remain governed separately by the Library and Archive Platform.
          </p>
        </section>
      </main>
    );
  }

  const book = getArchiveBooks().find((item) => item.id === identifier && item.status === "PUBLISHED");
  if (book) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-16 text-white">
        <section className="border border-neutral-800 bg-black/70 p-6 sm:p-9">
          <p className={kicker}>Dark Sloth Archive / Public Edition Reveal</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{book.title}</h1>
          <p className="mt-3 font-mono text-xs tracking-widest text-amber-200">{book.id}</p>
          <dl className="mt-8 grid gap-5 border-y border-neutral-800 py-6 sm:grid-cols-2">
            <div><dt className={kicker}>Publication status</dt><dd className="mt-2 text-sm">{book.status}</dd></div>
            <div><dt className={kicker}>Publishing engine</dt><dd className="mt-2 text-sm">{book.engine}</dd></div>
            <div><dt className={kicker}>Collection</dt><dd className="mt-2 text-sm">{book.collection}</dd></div>
            <div><dt className={kicker}>Public formats</dt><dd className="mt-2 text-sm">{book.outputs.length ? book.outputs.join(", ") : "No public download files declared"}</dd></div>
          </dl>
          <p className="mt-6 text-sm leading-7 text-neutral-400">This reveal confirms the public edition identity and release information. It does not bypass separate reading or download permissions.</p>
          <Link href="/books" className="mt-7 inline-flex min-h-11 items-center border border-amber-700 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-amber-900/20">Browse the public Library <span className="ml-3">↗</span></Link>
        </section>
      </main>
    );
  }

  notFound();
}
