import Link from "next/link";
import { ArrowUpRight, BookOpen, FileSearch, Fingerprint } from "lucide-react";

export default function ArchiveHero() {
  return (
    <section className="archive-hero home-hero-v2" aria-labelledby="archive-home-title">
      <div className="archive-hero-background" aria-hidden="true" />
      <div className="home-hero-grid">
        <div className="archive-hero-content">
          <p className="home-eyebrow"><span className="home-status-dot" /> DARK SLOTH ARCHIVE <span>/</span> THE PUBLIC INSTITUTION</p>
          <h1 id="archive-home-title">
            NOTHING IS
            <br />
            INVENTED.
            <br />
            <span>ONLY RECOVERED.</span>
          </h1>
          <p className="archive-hero-subtitle">A living archive of records, books and recovered knowledge.</p>
          <p className="archive-hero-description">Evidence before certainty. Provenance before interpretation.</p>
          <div className="home-hero-actions">
            <Link href="/collections" className="home-action-primary">Explore the Archive <ArrowUpRight size={16} /></Link>
            <Link href="/books" className="home-action-secondary">Discover the Books</Link>
          </div>
        </div>
        <aside className="home-hero-index" aria-label="Institutional principles">
          <p className="home-index-kicker">ARCHIVE PRINCIPLES <span>01—03</span></p>
          <div><span>01</span><strong>Preserve the source</strong><small>Keep origins and context visible.</small></div>
          <div><span>02</span><strong>Separate the evidence</strong><small>Distinguish fact, interpretation and hypothesis.</small></div>
          <div><span>03</span><strong>Leave uncertainty open</strong><small>Do not claim what the record cannot support.</small></div>
          <p className="home-index-foot">PUBLIC ACCESS <span>OPEN</span></p>
        </aside>
      </div>
      <div className="home-hero-baseline"><span>INSTITUTIONAL RECORD</span><span>RECOVERY · PRESERVATION · KNOWLEDGE</span><span>SOUTH AFRICA / GLOBAL</span></div>
    </section>
  );
}
