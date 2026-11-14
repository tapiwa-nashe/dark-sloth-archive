import Link from "next/link";
import {
  ScanSearch,
  Folder,
  BookOpen,
  Fingerprint,
} from "lucide-react";

import ArchiveHero from "@/components/ArchiveHero";
import { records } from "@/lib/records";
import { collections } from "@/lib/collections";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

export default async function HomePage() {
  const publicFeed = await getPublicArchiveFeed();
  return (
    <div>

      <ArchiveHero />

      <section className="institution-introduction mx-auto max-w-6xl px-6 py-16" aria-labelledby="institution-introduction-title">
        <div className="institution-introduction-grid">
          <div>
            <p className="mb-5 text-xs tracking-[0.35em] text-zinc-500">DARK SLOTH // INSTITUTIONAL PURPOSE</p>
            <h2 id="institution-introduction-title" className="text-3xl font-semibold leading-tight md:text-5xl">
              A living institution for the recovery, preservation and responsible interpretation of knowledge.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>
              Dark Sloth Archive is a public knowledge institution. It brings records, books,
              source material and recovered accounts into a structured environment where their
              origins and limits can be examined.
            </p>
            <p>
              We distinguish what is documented from what is interpreted, what remains a
              hypothesis and what is not yet known. A record is not made true by its presence
              in an archive; its evidence and provenance must remain open to scrutiny.
            </p>
            <p>
              The public Archive is the place to discover this work. A separate Archive
              Platform supports authorised participation, contribution and institutional
              operations.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/collections" className="inline-flex border border-zinc-600 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:border-white">Explore the collections →</Link>
              <Link href="/platform" className="inline-flex border border-zinc-800 px-5 py-3 text-xs tracking-[0.2em] uppercase text-zinc-300 transition hover:border-zinc-500">About the Platform →</Link>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: "1400px",
          margin: "32px auto 40px auto",
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
          <h2>{String(collections.length).padStart(3, "0")}</h2>
          <p>Catalogued Collections</p>
        </Link>

        <Link href="/records" className="stat-card">
          <Folder className="stat-icon" size={22} strokeWidth={1.5} />
          <span>RECORDS</span>
          <h2>{String(records.length).padStart(3, "0")}</h2>
          <p>Public Catalogue Records</p>
        </Link>

        <Link href="/recoveries" className="stat-card">
          <BookOpen className="stat-icon" size={22} strokeWidth={1.5} />
          <span>PUBLIC RECOVERIES</span>
          <h2>{publicFeed.connected ? String(publicFeed.recoveries.length).padStart(3, "0") : "—"}</h2>
          <p>{publicFeed.connected ? "Approved Public Releases" : "Feed Awaiting Connection"}</p>
        </Link>

        <Link href="/entities" className="stat-card">
          <Fingerprint className="stat-icon" size={22} strokeWidth={1.5} />
          <span>PEOPLE & ENTITIES</span>
          <h2>{publicFeed.connected ? String(publicFeed.entities.length).padStart(3, "0") : "—"}</h2>
          <p>{publicFeed.connected ? "Approved Public Profiles" : "Register Awaiting Connection"}</p>
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
                <p>{String(records.length).padStart(3, "0")}</p>
              </div>

              <div>
                <span>COLLECTIONS</span>
                <p>{String(collections.length).padStart(3, "0")}</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER COLLECTIONS →
            </div>
          </Link>

          <Link href="/recoveries" className="collection-card">
            <div className="collection-label">
              RECOVERIES
            </div>

            <div className="collection-meta">
              <div>
                <span>PUBLIC RELEASES</span>
                <p>{publicFeed.connected ? String(publicFeed.recoveries.length).padStart(3, "0") : "PENDING"}</p>
              </div>

              <div>
                <span>ACCESS</span>
                <p>PUBLIC</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER RECOVERY STREAM →
            </div>
          </Link>

          <Link href="/entities" className="collection-card">
            <div className="collection-label">
              PEOPLE & ENTITIES
            </div>

            <div className="collection-meta">
              <div>
                <span>APPROVED PROFILES</span>
                <p>{publicFeed.connected ? String(publicFeed.entities.length).padStart(3, "0") : "PENDING"}</p>
              </div>

              <div>
                <span>ACCESS</span>
                <p>PUBLIC</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER ENTITY REGISTER →
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
                <span>CATALOGUE STATUS</span>
                <p>PUBLIC LISTINGS</p>
              </div>
            </div>

            <div className="collection-enter">
              ENTER LIBRARY →
            </div>
          </Link>

          <Link href="/partnerships" className="collection-card">
            <div className="collection-label">
              INSTITUTIONAL PARTNERSHIPS
            </div>

            <div className="collection-meta">
              <div>
                <span>FRAMEWORK</span>
                <p>PROPOSED</p>
              </div>

              <div>
                <span>FOCUS</span>
                <p>SHARED PROSPERITY</p>
              </div>
            </div>

            <div className="collection-enter">
              EXPLORE PARTNERSHIPS →
            </div>
          </Link>

          <Link href="/contribute" className="collection-card">
            <div className="collection-label">
              CONTRIBUTE TO THE ARCHIVE
            </div>

            <div className="collection-meta">
              <div>
                <span>GUIDANCE</span>
                <p>AVAILABLE</p>
              </div>

              <div>
                <span>INTAKE</span>
                <p>NOT YET OPEN</p>
              </div>
            </div>

            <div className="collection-enter">
              EXPLORE CONTRIBUTOR PATHWAYS →
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
