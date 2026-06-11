import Link from "next/link";
import {
  ScanSearch,
  Folder,
  BookOpen,
  Fingerprint,
} from "lucide-react";

export default function HomePage() {
  return (
    <div>

      <section className="hero">

        <div className="hero-background">

          <div className="hero-layer hero-layer-far">
            REC-021 • REC-022 • REC-023 • REC-024 • RUNE-001 • RUNE-002 •
            BLACK VAULT • ENTRY 013 • ARCHIVE NODE • EXPEDITION 07 •
            STATUS VERIFIED • RECOVERED FRAGMENT • OBSERVATION •
          </div>

          <div className="hero-layer hero-layer-mid">
            THE WILDS ARE NEVER FULLY MAPPED
            <br />
            PRESENCE
            <br />
            PATIENCE
            <br />
            SILENCE
            <br />
            DISCERNMENT
            <br />
            HUMILITY
            <br />
            CLARITY
          </div>

          <div className="hero-layer hero-layer-near">
            BLACK VAULT
            <br />
            ENTRY 013
            <br />
            RECOVERED
            <br />
            ARCH-0001
          </div>

        </div>

        <div className="archive-status">
          ARCHIVE STATUS // ACTIVE
        </div>

        <h1 className="hero-title">
          NOTHING IS
          <br />
          INVENTED.
          <br />
          ONLY RECOVERED.
        </h1>

        <p className="hero-subtitle">
          The Public Archive
        </p>

        <p className="hero-description">
          Records. Books. Dossiers. Recovery.
        </p>

      </section>

      <section className="stats-grid">

        <Link href="/collections" className="stat-card">
          <ScanSearch className="stat-icon" size={22} strokeWidth={1.5} />
          <span>COLLECTIONS</span>
          <h2>005</h2>
          <p>Active Collections</p>
        </Link>

        <Link href="/dossiers" className="stat-card">
          <Folder className="stat-icon" size={22} strokeWidth={1.5} />
          <span>DOSSIERS</span>
          <h2>001</h2>
          <p>Active Investigation</p>
        </Link>

        <Link href="/books" className="stat-card">
          <BookOpen className="stat-icon" size={22} strokeWidth={1.5} />
          <span>BOOKS</span>
          <h2>003</h2>
          <p>Published Volumes</p>
        </Link>

        <Link href="/dossier" className="stat-card">
          <Fingerprint className="stat-icon" size={22} strokeWidth={1.5} />
          <span>ARCHIVE ID</span>
          <h2>0001</h2>
          <p>Root Record</p>
        </Link>

      </section>

      <section className="collection-section">

        <h3>
          ARCHIVE GATEWAYS
        </h3>

        <div className="grid gap-6">

          <Link href="/collections" className="collection-card">
            <div className="collection-label">
              COLLECTIONS
            </div>

            <div className="collection-meta">
              <div>
                <span>RECORDS</span>
                <p>048</p>
              </div>

              <div>
                <span>COLLECTIONS</span>
                <p>005</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER COLLECTIONS →
            </div>
          </Link>

          <Link href="/dossiers" className="collection-card">
            <div className="collection-label">
              DOSSIERS
            </div>

            <div className="collection-meta">
              <div>
                <span>STATUS</span>
                <p>ACTIVE</p>
              </div>

              <div>
                <span>DOSSIERS</span>
                <p>001</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER DOSSIERS →
            </div>
          </Link>

          <Link href="/books" className="collection-card">
            <div className="collection-label">
              BOOKS
            </div>

            <div className="collection-meta">
              <div>
                <span>VOLUMES</span>
                <p>003</p>
              </div>

              <div>
                <span>STATUS</span>
                <p>PUBLISHED</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER LIBRARY →
            </div>
          </Link>

        </div>

      </section>

      <section className="timeline-section">

        <div className="timeline-header">
          ARCHIVE NOTICE
        </div>

        <div className="max-w-3xl text-zinc-400 leading-relaxed">

          <p>Artifacts preserve fragments.</p>
          <p>Books preserve pathways.</p>
          <p>Dossiers preserve connections.</p>
          <p>The Archive reveals itself through progressive recovery.</p>

        </div>

      </section>

    </div>
  );
}
