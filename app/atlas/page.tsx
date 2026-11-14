import Link from "next/link";
import { ArrowUpRight, BookOpen, Fingerprint, Search } from "lucide-react";
import { collections } from "@/lib/collections";
import { records } from "@/lib/records";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export default async function ArchiveAtlasPage() {
  const feed = await getPublicArchiveFeed();
  const classifications = Array.from(new Set(records.map((record) => record.classification))).sort();
  return <main className="archive-derived-page archive-page-v2">
    <header className="archive-page-hero"><p className="archive-page-kicker">PUBLIC REFERENCE SYSTEM / 01</p><h1>Archive Atlas</h1><p className="archive-page-lede">A guided index of the public knowledge held across the Archive: collections, records, books and released entities.</p><div className="archive-page-meta"><span>CATALOGUE MAP</span><span>LIVE INDEX / PUBLIC MATERIAL ONLY</span></div></header>
    <section className="archive-atlas-stats">
      <div><span>COLLECTIONS</span><strong>{collections.length.toString().padStart(3,"0")}</strong><small>Indexed collections</small></div>
      <div><span>RECORDS</span><strong>{records.length.toString().padStart(3,"0")}</strong><small>Catalogue entries</small></div>
      <div><span>CLASSIFICATIONS</span><strong>{classifications.length.toString().padStart(3,"0")}</strong><small>Record categories</small></div>
      <div><span>PUBLIC ENTITIES</span><strong>{feed.connected ? feed.entities.length.toString().padStart(3,"0") : "—"}</strong><small>{feed.connected ? "Approved releases" : "Awaiting public feed"}</small></div>
    </section>
    <section className="archive-page-section"><div className="archive-page-section-heading"><div><p className="archive-page-kicker">01 / COLLECTION MAP</p><h2>Explore by collection</h2></div></div><div className="archive-atlas-grid">
      {collections.map((collection,index) => {const count=records.filter((record)=>record.collection===collection.recordCollection).length;return <Link href={collection.href} className="archive-atlas-card" key={collection.id}><span>{String(index+1).padStart(2,"0")} / {collection.id}</span><h3>{collection.title}</h3><p>{collection.description}</p><small>{count.toString().padStart(3,"0")} INDEXED RECORDS <ArrowUpRight size={14}/></small></Link>;})}
    </div></section>
    <section className="archive-page-section archive-atlas-columns">
      <article><Search/><p className="archive-page-kicker">02 / RECORD REGISTER</p><h2>Search the records</h2><p>Find catalogue entries by title, classification or collection. Each record retains its own identifier and source context.</p><Link href="/records">Open Records Catalogue <ArrowUpRight size={15}/></Link></article>
      <article><BookOpen/><p className="archive-page-kicker">03 / PUBLICATIONS</p><h2>Read the books</h2><p>Explore the Dark Sloth Codex and Archive Documents, with public listings kept distinct from working manuscripts.</p><Link href="/books">Open the Library <ArrowUpRight size={15}/></Link></article>
      <article><Fingerprint/><p className="archive-page-kicker">04 / ENTITIES</p><h2>People & entities</h2><p>Public profiles appear only after explicit release review. Private participant identities are not part of this index.</p><Link href="/entities">Open public register <ArrowUpRight size={15}/></Link></article>
    </section>
    <p className="archive-page-caveat">This Atlas is a navigation index, not a claim that every catalogue item is connected to every other item. Relationships must be supported by explicit sources and reviewed evidence.</p>
  </main>;
}