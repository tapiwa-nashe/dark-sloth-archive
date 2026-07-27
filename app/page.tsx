import Link from "next/link";
import {
  ScanSearch,
  Folder,
  BookOpen,
  Fingerprint,
} from "lucide-react";

import ArchiveHero from "@/components/ArchiveHero";

export default function HomePage() {
  return (
    <div>

      <ArchiveHero />

      <section
        style={{
          maxWidth: "1400px",
          margin: "-220px auto 40px auto",
          padding: "0 0px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "12px",
            background: "rgba(0,0,0,0.72)",
            backdropFilter: "blur(8px)",
            padding: "32px",
          }}
        >
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Begin Here
          </div>

          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            First Recovery Protocol
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#aaa",
              maxWidth: "900px",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Before the Archive is read, it may be entered.
            Every Seeker begins with a Recovery.
          </p>

          <Link
            href="/first-recovery"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "18px 32px",
              fontSize: "12px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            Begin Your First Recovery →
          </Link>
        </div>
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
          <h2>012</h2>
          <p>Recovered Volumes</p>
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
                <p>012</p>
              </div>

              <div>
                <span>STATUS</span>
                <p>RECOVERED</p>
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
