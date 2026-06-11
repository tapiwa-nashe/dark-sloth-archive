import Link from "next/link";

export default function ArchiveNav() {
  return (
    <nav className="archive-nav">

      <Link href="/">
        ARCHIVE
      </Link>

      <Link href="/collections">
        COLLECTIONS
      </Link>

      <Link href="/dossiers">
        DOSSIERS
      </Link>

      <Link href="/books">
        BOOKS
      </Link>

      <Link href="/studios">
        STUDIOS
      </Link>

      <Link href="/recoveries">
        RECOVERIES
      </Link>

      <Link href="/studios">
        HELMR HUGR
      </Link>

      <Link href="/dossier">
        ARCHIVE ID
      </Link>

      <Link href="/platform">
        PLATFORM
      </Link>

    </nav>
  );
}
