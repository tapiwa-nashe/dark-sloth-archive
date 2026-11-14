import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Compass,
  FileSearch,
  Fingerprint,
  Layers3,
  ScanSearch,
  Scale,
  Users,
} from "lucide-react";

import ArchiveHero from "@/components/ArchiveHero";
import { records } from "@/lib/records";
import { collections } from "@/lib/collections";
import { getPublicArchiveFeed } from "@/lib/public-content/client";

const gateways = [
  { number: "01", title: "Archive Atlas", description: "Navigate the public catalogue across collections, records, publications and released entities.", href: "/atlas", label: "Explore the Atlas", icon: Compass },
  {
    number: "02",
    title: "Collections",
    description: "Explore curated bodies of records, source material and connected knowledge.",
    href: "/collections",
    label: "Browse collections",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Records",
    description: "Examine catalogue entries with source references, classification and provenance.",
    href: "/records",
    label: "Search the register",
    icon: FileSearch,
  },
  {
    number: "04",
    title: "Books",
    description: "Discover the published books and editions held in the Archive catalogue.",
    href: "/books",
    label: "Explore publications",
    icon: BookOpen,
  },
  {
    number: "05",
    title: "Recoveries",
    description: "Follow evidence-led recoveries released through the public archive.",
    href: "/recoveries",
    label: "View recoveries",
    icon: ScanSearch,
  },
  {
    number: "06",
    title: "People & Entities",
    description: "Explore public identity and entity records when approved for release.",
    href: "/entities",
    label: "Open entity register",
    icon: Fingerprint,
  },
  {
    number: "07",
    title: "Research & Method",
    description: "Understand how the Archive handles sources, provenance, interpretation and public release.",
    href: "/research",
    label: "Read our method",
    icon: Scale,
  },
  {
    number: "08",
    title: "Partnerships",
    description: "Read about the proposed institutional partnership and shared-prosperity framework.",
    href: "/partnerships",
    label: "Explore the framework",
    icon: Building2,
  },
];

export default async function HomePage() {
  const publicFeed = await getPublicArchiveFeed();

  return (
    <div className="home-v2">
      <ArchiveHero />

      <section className="home-introduction" aria-labelledby="home-introduction-title">
        <div className="home-section-kicker">01 / INSTITUTIONAL PURPOSE</div>
        <div className="home-introduction-grid">
          <h2 id="home-introduction-title">
            A public institution for the recovery, preservation and responsible interpretation of knowledge.
          </h2>
          <div className="home-introduction-copy">
            <p>
              Dark Sloth Archive brings records, books, source material and recovered accounts
              into a structured environment where their origins and limits can be examined.
            </p>
            <p>
              We distinguish what is documented from what is interpreted, what remains a
              hypothesis and what is not yet known. A record is not made true by its presence
              in an archive; its evidence and provenance must remain open to scrutiny.
            </p>
            <p>
              This is the public institution. A separate Archive Platform supports authorised
              participation, contribution and institutional operations.
            </p>
            <Link href="/platform" className="home-text-link">Understand the Archive Platform <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="home-catalogue" aria-labelledby="home-catalogue-title">
        <div className="home-section-heading">
          <div>
            <p className="home-section-kicker">02 / THE PUBLIC CATALOGUE</p>
            <h2 id="home-catalogue-title">Enter the Archive</h2>
          </div>
          <p>Eight pathways into the institution. Each opens a different part of the public record.</p>
        </div>
        <div className="home-gateway-grid">
          {gateways.map((item) => {
            const Icon = item.icon;
            return (
              <Link href={item.href} className="home-gateway-card" key={item.number}>
                <div className="home-gateway-top"><span>{item.number} / GATEWAY</span><Icon size={21} strokeWidth={1.4} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="home-gateway-link">{item.label} <ArrowUpRight size={15} /></span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="home-register" aria-label="Public catalogue indicators">
        <div className="home-register-heading">
          <p className="home-section-kicker">03 / CATALOGUE AT A GLANCE</p>
          <span>PUBLIC INDEX · CURRENT VIEW</span>
        </div>
        <div className="home-register-grid">
          <Link href="/collections"><span>COLLECTIONS</span><strong>{String(collections.length).padStart(3, "0")}</strong><small>Indexed collections</small></Link>
          <Link href="/records"><span>RECORDS</span><strong>{String(records.length).padStart(3, "0")}</strong><small>Catalogue records</small></Link>
          <Link href="/recoveries"><span>PUBLIC RECOVERIES</span><strong>{publicFeed.connected ? String(publicFeed.recoveries.length).padStart(3, "0") : "—"}</strong><small>{publicFeed.connected ? "Approved public releases" : "Public feed awaiting connection"}</small></Link>
          <Link href="/entities"><span>PEOPLE & ENTITIES</span><strong>{publicFeed.connected ? String(publicFeed.entities.length).padStart(3, "0") : "—"}</strong><small>{publicFeed.connected ? "Approved public profiles" : "Public register awaiting connection"}</small></Link>
        </div>
      </section>

      <section className="home-recovery-feature">
        <div className="home-recovery-copy">
          <p className="home-section-kicker">04 / BEGIN HERE</p>
          <h2>Every Seeker begins with a Recovery.</h2>
          <p>Before the Archive is read, it may be entered. The First Recovery Protocol introduces the discipline of observation, evidence and responsible recording.</p>
          <Link href="/first-recovery" className="home-action-primary">Begin your first recovery <ArrowUpRight size={16} /></Link>
        </div>
        <div className="home-recovery-mark" aria-hidden="true"><span>REC</span><strong>001</strong><small>FIRST RECOVERY<br />PROTOCOL</small></div>
      </section>

      <section className="home-participation">
        <div>
          <p className="home-section-kicker">05 / PARTICIPATION & INSTITUTIONAL RELATIONSHIPS</p>
          <h2>Build knowledge with care.</h2>
          <p>Contributor pathways and institutional partnerships are being established with clear standards for evidence, consent, accountability and public release.</p>
        </div>
        <div className="home-participation-links">
          <Link href="/contribute"><Users size={18} /> Contributor pathways <ArrowUpRight size={15} /></Link>
          <Link href="/partnerships"><Building2 size={18} /> Institutional partnerships <ArrowUpRight size={15} /></Link>
        </div>
      </section>

      <footer className="home-closing">
        <span>DARK SLOTH ARCHIVE</span>
        <p>Nothing is invented. Only recovered.</p>
        <span>PUBLIC KNOWLEDGE INSTITUTION</span>
      </footer>
    </div>
  );
}
