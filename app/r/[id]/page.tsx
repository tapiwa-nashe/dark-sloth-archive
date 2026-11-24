import Link from "next/link";
import { notFound } from "next/navigation";
import { records } from "@/lib/records";
import { getArchiveBooks } from "@/lib/books/editionBooks";
import { getRecordProvenance } from "@/lib/record-provenance";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

type Props = { params: Promise<{ id: string }> };

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function PublicRecordRevealPage({ params }: Props) {
  const { id: rawId } = await params;
  const lookup = decodeURIComponent(rawId).trim().toUpperCase();
  const recordId = lookup.replace(/^REC-/, "");
  const record = records.find((item) => item.id === recordId);

  if (record) {
    const provenance = getRecordProvenance(record.id);
    if (!provenance) notFound();
    return (
      <main className="archive-derived-page mx-auto min-h-screen max-w-4xl px-6 py-16">
        <nav className="record-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">THE ARCHIVE</Link><span>/</span><Link href="/records">PUBLIC RECORDS</Link><span>/</span><span>REC-{record.id}</span>
        </nav>
        <header className="record-detail-header mt-10">
          <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC RECORD REVELATION // REC-{record.id}</p>
          <h1 className="record-title">{record.title}</h1>
          <p className="record-detail-classification">{record.classification}</p>
        </header>
        <section className="record-dossier mt-10" aria-label="Public record summary">
          <div><span>CANONICAL IDENTIFIER</span><p>REC-{record.id}</p></div>
          <div><span>CATALOGUE STATUS</span><p>{record.status}</p></div>
          <div><span>COLLECTION</span><p>{record.collection}</p></div>
          <div><span>RECOVERED FROM</span><p>{record.recovered}</p></div>
        </section>
        <section className="record-evidence-panel mt-8" aria-labelledby="public-revelation-heading">
          <div className="record-evidence-heading">
            <div><p>PUBLIC REVEAL / CANONICAL LOOKUP</p><h2 id="public-revelation-heading">Record identity revealed</h2></div>
            <span className="record-evidence-state">PUBLIC CATALOGUE</span>
          </div>
          <div className="record-evidence-grid">
            <div><span>PROVENANCE STATE</span><p>{provenance.provenanceStatus.replace(/_/g, " ")}</p><small>This is an evidence assessment, not an invented verification claim.</small></div>
            <div><span>VERIFICATION STATE</span><p>{provenance.verificationStatus.replace(/_/g, " ")}</p><small>Catalogue status and evidence verification remain distinct.</small></div>
            <div><span>SOURCE DOCUMENT</span><p>{provenance.sourceDocumentIdentifier ?? "Not separately identified"}</p><small>Only source metadata cleared for public display is shown here.</small></div>
            <div><span>LKR REGISTRATION</span><p>{provenance.lkrRegistrationId ?? "Not linked in the public catalogue"}</p><small>No registration is inferred from a milestone or catalogue label.</small></div>
          </div>
          <div className="record-evidence-caveat">
            <p>This QR destination is a permanent public discovery surface. It reveals the record&apos;s canonical identity and public catalogue metadata without requiring access to the complete dossier, full recovered text, private evidence or participant workspace.</p>
            <p>Full record material remains subject to its own publication and access permissions. A public QR code does not grant those permissions.</p>
          </div>
        </section>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={"/records/" + record.id} className="inline-flex min-h-11 items-center border border-neutral-500 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black">Explore full record <span aria-hidden="true" className="ml-3">↗</span></Link>
          <Link href="/records" className="inline-flex min-h-11 items-center border border-neutral-800 px-5 text-xs font-semibold uppercase tracking-wider">Browse public records</Link>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">DARK SLOTH ARCHIVE / PERMANENT RECORD ADDRESS / REC-{record.id}</p>
      </main>
    );
  }

  if (lookup.startsWith("BOOK-")) {
    const bookId = lookup.slice(5);
    const book = getArchiveBooks().find((item) => item.id.toUpperCase() === bookId);
    if (book) {
      return (
        <main className="archive-derived-page mx-auto min-h-screen max-w-4xl px-6 py-16">
          <nav className="record-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">THE ARCHIVE</Link><span>/</span><Link href="/books">BOOKS</Link><span>/</span><span>{book.id}</span>
          </nav>
          <header className="record-detail-header mt-10">
            <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC BOOK REVELATION // BOOK-{book.id}</p>
            <h1 className="record-title">{book.title}</h1>
            <p className="record-detail-classification">{book.collection}</p>
          </header>
          <section className="record-dossier mt-10" aria-label="Public book metadata">
            <div><span>CANONICAL BOOK IDENTIFIER</span><p>BOOK-{book.id}</p></div>
            <div><span>PUBLICATION STATUS</span><p>{book.status}</p></div>
            <div><span>EDITION ENGINE</span><p>{book.engine}</p></div>
            <div><span>CHAPTERS</span><p>{book.records.length ? "Catalogue linked" : "Not separately listed"}</p></div>
          </section>
          <section className="record-evidence-panel mt-8">
            <div className="record-evidence-heading">
              <div><p>PUBLIC EDITION / CANONICAL LOOKUP</p><h2>Book identity revealed</h2></div>
              <span className="record-evidence-state">PUBLIC EDITION</span>
            </div>
            <div className="record-evidence-caveat">
              <p>This QR destination confirms the public edition&apos;s identity and catalogue metadata. It does not contain the book&apos;s full text or grant a download or reading entitlement.</p>
              <p>Reading and distribution permissions remain governed by the Archive Platform and Library access controls.</p>
            </div>
          </section>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/books" className="inline-flex min-h-11 items-center border border-neutral-500 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black">Browse the public books <span aria-hidden="true" className="ml-3">↗</span></Link>
            <Link href="/platform" className="inline-flex min-h-11 items-center border border-neutral-800 px-5 text-xs font-semibold uppercase tracking-wider">Open the Archive Platform</Link>
          </div>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">DARK SLOTH ARCHIVE / PUBLIC EDITION / BOOK-{book.id}</p>
        </main>
      );
    }
  }

  const feed = await getPublicArchiveFeed();
  const recovery = feed.recoveries.find((item) =>
    item.canonicalId.toUpperCase() === lookup || item.slug.toUpperCase() === lookup
  );
  if (recovery) {
    return (
      <main className="archive-derived-page mx-auto min-h-screen max-w-4xl px-6 py-16">
        <nav className="record-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">THE ARCHIVE</Link><span>/</span><Link href="/recoveries">PUBLIC RECOVERIES</Link><span>/</span><span>{recovery.canonicalId}</span>
        </nav>
        <header className="record-detail-header mt-10">
          <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC RECOVERY REVELATION // {recovery.canonicalId}</p>
          <h1 className="record-title">{recovery.title}</h1>
          <p className="record-detail-classification">{recovery.recoveryType}</p>
        </header>
        <section className="record-dossier mt-10" aria-label="Public recovery metadata">
          <div><span>CANONICAL IDENTIFIER</span><p>{recovery.canonicalId}</p></div>
          <div><span>PUBLICATION STATUS</span><p>{recovery.publicationStatus}</p></div>
          <div><span>VISIBILITY</span><p>{recovery.visibility}</p></div>
          <div><span>PUBLISHED</span><p>{recovery.publishedAt ? new Date(recovery.publishedAt).toLocaleDateString("en-ZA") : "Date not supplied"}</p></div>
        </section>
        <section className="record-evidence-panel mt-8" aria-labelledby="public-recovery-heading">
          <div className="record-evidence-heading">
            <div><p>PUBLIC RELEASE / APPROVED SUMMARY</p><h2 id="public-recovery-heading">Recovery revealed</h2></div>
            <span className="record-evidence-state">APPROVED PUBLIC RELEASE</span>
          </div>
          <div className="record-evidence-grid">
            <div><span>PUBLIC SUMMARY</span><p>{recovery.summary || "No public summary supplied."}</p></div>
            <div><span>PUBLIC SOURCE REFERENCES</span><p>{recovery.sourceReferences.length ? recovery.sourceReferences.join(" · ") : "No public source references supplied."}</p></div>
            <div><span>VERIFICATION SUMMARY</span><p>{recovery.verificationSummary || "No public verification summary supplied."}</p></div>
          </div>
          <div className="record-evidence-caveat">
            <p>This QR destination resolves only recoveries admitted through the Platform&apos;s explicit public-release manifest. It shows the approved public summary and provenance references.</p>
            <p>The recovered narrative, full evidence dossier, private annotations and participant records are not exposed by this QR reveal. Access to them remains independently controlled.</p>
          </div>
        </section>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/recoveries" className="inline-flex min-h-11 items-center border border-neutral-500 px-5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black">Browse public recoveries <span aria-hidden="true" className="ml-3">↗</span></Link>
          <Link href="/records" className="inline-flex min-h-11 items-center border border-neutral-800 px-5 text-xs font-semibold uppercase tracking-wider">Browse Archive records</Link>
        </div>
        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600">DARK SLOTH ARCHIVE / PUBLIC RELEASE / {recovery.canonicalId}</p>
      </main>
    );
  }

  const entity = feed.entities.find((item) =>
    item.canonicalId.toUpperCase() === lookup || item.slug.toUpperCase() === lookup
  );
  if (entity) {
    return (
      <main className="archive-derived-page mx-auto min-h-screen max-w-4xl px-6 py-16">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">PUBLIC ENTITY REVELATION // {entity.canonicalId}</p>
        <h1 className="record-title">{entity.title}</h1>
        <section className="record-evidence-panel mt-8">
          <h2>Public entity summary</h2>
          <p className="mt-4 text-neutral-300">{entity.summary || "No public summary supplied."}</p>
          <p className="mt-6 text-xs text-neutral-500">This public reference does not grant access to private identity or verification material.</p>
        </section>
        <Link href="/entities" className="mt-10 inline-flex border border-neutral-700 px-5 py-3 text-xs uppercase tracking-wider">Browse public entities</Link>
      </main>
    );
  }

  notFound();
}
