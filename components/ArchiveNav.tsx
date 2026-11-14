import Link from "next/link";

const items = [
  { label: "ARCHIVE HOME", icon: "⌂", href: "/" },
  { label: "COLLECTIONS", icon: "▰", href: "/collections" },
  { label: "RECORDS", icon: "▤", href: "/records" },
  { label: "RECOVERIES", icon: "◇", href: "/recoveries" },
  { label: "PEOPLE & ENTITIES", icon: "◉", href: "/entities" },
  { label: "BOOKS", icon: "▱", href: "/books" },
  { label: "PUBLISHING STUDIO", icon: "▣", href: "/studios/publishing" },
  { label: "PARTNERSHIPS", icon: "◇", href: "/partnerships" },
  { label: "CONTRIBUTE", icon: "✧", href: "/contribute" },
  { label: "STUDIOS", icon: "◌", href: "/studios" },
  { label: "DOSSIERS", icon: "◎", href: "/dossiers" },
  { label: "IDENTITY SYSTEM", icon: "◉", href: "/identity" },
  { label: "PLATFORM", icon: "◈", href: "/platform" },
];

export default function ArchiveNav() {
  return (
    <aside className="archive-sidebar">
      <div className="archive-trigger">☰</div>
      <div className="archive-menu">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="archive-link">
            <i>{item.icon}</i>
            <strong>{item.label}</strong>
          </Link>
        ))}
      </div>
    </aside>
  );
}
