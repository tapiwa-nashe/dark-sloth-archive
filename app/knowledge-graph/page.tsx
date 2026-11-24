import Link from "next/link";
import { records } from "@/lib/records";
import { getRecordContent } from "@/lib/archive";

export const metadata = {
  title: "Public Knowledge Graph",
  description: "Explore explicit textual references between public Archive records.",
};

export default function PublicKnowledgeGraphPage() {
  const edges = records.flatMap((record) => {
    const { content } = getRecordContent(record.id);
    const references = [...new Set(content.match(/\bREC-\d{3}\b/g) ?? [])]
      .map((reference) => reference.slice(4))
      .filter((id) => id !== record.id && records.some((candidate) => candidate.id === id));
    return references.map((targetId) => ({ source: record, target: records.find((candidate) => candidate.id === targetId)! }));
  });
  const uniqueEdges = Array.from(new Map(edges.map((edge) => [`${edge.source.id}->${edge.target.id}`, edge])).values());
  const connectedIds = new Set(uniqueEdges.flatMap((edge) => [edge.source.id, edge.target.id]));

  return (
    <main className="archive-derived-page archive-page-v2">
      <header className="archive-page-hero">
        <p className="archive-page-kicker">PUBLIC KNOWLEDGE SYSTEM / 02</p>
        <h1>Knowledge Graph</h1>
        <p className="archive-page-lede">A traceable map of explicit references between catalogue records. Every connection can be followed back to the source text.</p>
        <div className="archive-page-meta"><span>{records.length} CATALOGUE RECORDS</span><span>{uniqueEdges.length} EXPLICIT TEXTUAL REFERENCES</span></div>
      </header>
      <section className="archive-page-section">
        <div className="archive-page-section-heading"><div><p className="archive-page-kicker">01 / REFERENCE INDEX</p><h2>Records that cite other records</h2></div></div>
        {uniqueEdges.length ? <div className="public-graph-list">{uniqueEdges.map((edge) => <article key={`${edge.source.id}-${edge.target.id}`}>
          <Link href={`/records/${edge.source.id}`}><span>REC-{edge.source.id}</span><strong>{edge.source.title}</strong></Link>
          <span className="public-graph-relation">TEXT CITES</span>
          <Link href={`/records/${edge.target.id}`}><span>REC-{edge.target.id}</span><strong>{edge.target.title}</strong></Link>
        </article>)}</div> : <p className="archive-page-caveat">No explicit cross-record references are currently indexed.</p>}
      </section>
      <section className="archive-page-section">
        <div className="archive-page-section-heading"><div><p className="archive-page-kicker">02 / CATALOGUE COVERAGE</p><h2>Browse the record index</h2></div></div>
        <div className="archive-graph-nodes">{records.map((record) => <Link key={record.id} href={`/records/${record.id}`} className={connectedIds.has(record.id) ? "is-connected" : ""}><span>REC-{record.id}</span><strong>{record.title}</strong><small>{record.classification}</small></Link>)}</div>
      </section>
      <p className="archive-page-caveat">A textual reference is not proof of a factual, historical or causal relationship. This public graph deliberately excludes unreviewed operational graph data and private participant information.</p>
    </main>
  );
}
