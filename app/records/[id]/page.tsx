import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

import { records } from "../../../lib/records";
import { collections } from "../../../lib/collections";
import { getRecordContent } from "../../../lib/archive";
import { getRecordProvenance } from "../../../lib/record-provenance";

export default async function RecordPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recordIndex = records.findIndex((item) => item.id === id);

  if (recordIndex === -1) notFound();

  const record = records[recordIndex];
  const { data, content } = getRecordContent(id);
  const provenance = getRecordProvenance(id);
  if (!provenance) notFound();

  const collection = collections.find(
    (item) => item.recordCollection === record.collection,
  );
  const previous = recordIndex > 0 ? records[recordIndex - 1] : null;
  const next = recordIndex < records.length - 1 ? records[recordIndex + 1] : null;

  const citedRecordIds = [...new Set(content.match(/\bREC-\d{3}\b/g) ?? [])]
    .filter((reference) => reference !== `REC-${record.id}`)
    .map((reference) => records.find((item) => item.id === reference.slice(4)))
    .filter((item): item is (typeof records)[number] => Boolean(item));

  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">
      <nav className="record-breadcrumb" aria-label="Breadcrumb">
        <Link href="/records">RECORDS CATALOGUE</Link>
        <span>/</span>
        {collection ? (
          <Link href={collection.href}>{collection.title.toUpperCase()}</Link>
        ) : (
          <span>{record.collection}</span>
        )}
      </nav>

      <header className="record-detail-header">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          ARCHIVE RECORD // REC-{record.id}
        </p>
        <h1 className="record-title">{data.title || record.title}</h1>
        <p className="record-detail-classification">{record.classification}</p>
      </header>

      <section className="record-dossier" aria-label="Record information">
        <div>
          <span>CANONICAL IDENTIFIER</span>
          <p>REC-{record.id}</p>
        </div>
        <div>
          <span>CATALOGUE STATUS</span>
          <p>{record.status}</p>
        </div>
        <div>
          <span>COLLECTION</span>
          {collection ? (
            <p><Link href={collection.href}>{record.collection}</Link></p>
          ) : <p>{record.collection}</p>}
        </div>
        <div>
          <span>CLASSIFICATION</span>
          <p>{record.classification}</p>
        </div>
      </section>

      <section className="record-evidence-panel" aria-labelledby="record-evidence-title">
        <div className="record-evidence-heading">
          <div>
            <p>TRACEABILITY // RECORD PROVENANCE REGISTRY V1</p>
            <h2 id="record-evidence-title">Evidence &amp; Provenance</h2>
          </div>
          <span className="record-evidence-state">
            {provenance.provenanceStatus.replace(/_/g, " ")}
          </span>
        </div>

        <div className="record-evidence-grid">
          <div>
            <span>CATALOGUE SOURCE LABEL</span>
            <p>{provenance.catalogueSourceLabel ?? "Not specified in the catalogue"}</p>
            <small>Index attribution only; not a registered source reference.</small>
          </div>
          <div>
            <span>SOURCE DOCUMENT</span>
            <p>{provenance.sourceFile}</p>
            <small>Current source file used to render this public record.</small>
          </div>
          <div>
            <span>DOCUMENT IDENTIFIER</span>
            <p>{provenance.sourceDocumentIdentifier ?? "No separate identifier recorded"}</p>
            <small>The canonical Archive identifier remains {provenance.canonicalId}.</small>
          </div>
          <div>
            <span>SOURCE METADATA</span>
            <p>{provenance.sourceMetadataFields.length ? provenance.sourceMetadataFields.join(", ") : "No frontmatter metadata"}</p>
            <small>Descriptive fields do not establish provenance or verification.</small>
          </div>
          <div>
            <span>SOURCE REVISION</span>
            <p>{provenance.sourceRevision ?? "Not registered"}</p>
            <small>No immutable source revision is currently recorded.</small>
          </div>
          <div>
            <span>LKR REGISTRATION</span>
            <p>{provenance.lkrRegistrationId ?? "Record-specific registration not linked"}</p>
            <small>Milestone registrations do not substitute for individual record registrations.</small>
          </div>
          <div>
            <span>VERIFICATION</span>
            <p>{provenance.verificationStatus.replace(/_/g, " ")}</p>
            <small>{provenance.verificationEvidence.length ? provenance.verificationEvidence.join("; ") : "No inspectable verification evidence is linked."}</small>
          </div>
        </div>

        <div className="record-evidence-caveat">
          <p>
            Catalogue status <strong>{provenance.catalogueStatus}</strong> is kept separate
            from this evidence assessment. This record is not presented as independently
            verified until its source registration, revision, record-specific LKR entry and
            inspectable verification evidence have been reviewed.
          </p>
          <p>
            Outstanding provenance requirements: {provenance.missingRequirements.length}.
          </p>
          <ul>
            {provenance.missingRequirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </div>
      </section>

      {citedRecordIds.length > 0 && (
        <section className="record-cross-reference" aria-labelledby="record-cross-reference-title">
          <div className="record-reading-heading">
            <p id="record-cross-reference-title">RECORD IDENTIFIERS CITED IN THIS TEXT</p>
            <span>{citedRecordIds.length} INDEXED REFERENCES</span>
          </div>
          <div className="record-cross-reference-list">
            {citedRecordIds.map((referenced) => (
              <Link key={referenced.id} href={`/records/${referenced.id}`}>
                <span>REC-{referenced.id}</span>
                <strong>{referenced.title}</strong>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <p className="record-cross-reference-note">
            These links are generated only from explicit REC identifiers appearing in the
            recovered text. They indicate textual references, not an independently verified
            relationship between records.
          </p>
        </section>
      )}

      <section className="record-reading-section">
        <div className="record-reading-heading">
          <p>RECOVERED TEXT</p>
          <span>REC-{record.id}</span>
        </div>
        <div className="record-markdown">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </section>

      <section className="record-participation-note" aria-label="Public participation status">
        <p>WITNESSING &amp; ANNOTATIONS</p>
        <span>
          Public participation data is not connected to this record page. No witness count,
          participant identity, or annotation excerpt is displayed here.
        </span>
      </section>

      <footer className="record-detail-footer">
        <Link href="/records">← RETURN TO RECORDS</Link>
        <div className="record-navigation">
          {previous ? (
            <Link href={`/records/${previous.id}`} className="record-nav-card">
              <span>PREVIOUS RECORD</span>
              REC-{previous.id} · {previous.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/records/${next.id}`} className="record-nav-card record-nav-next">
              <span>NEXT RECORD</span>
              REC-{next.id} · {next.title}
            </Link>
          ) : <div />}
        </div>
      </footer>
    </main>
  );
}
