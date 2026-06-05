import Link from "next/link";

export default function ArchiveNav() {
  return (
    <nav className="archive-nav">

      <Link href="/">
        ARCHIVE
      </Link>

      <Link href="/collections">
        HISTORY
      </Link>

      <Link href="/books">
        BOOKS
      </Link>

      <Link href="/recoveries">
        RECOVERIES
      </Link>

      <Link href="/identity">
        IDENTITY
      </Link>

      <Link href="/dossier">
        DOSSIER
      </Link>

      <Link href="/platform">
        PLATFORM
      </Link>

    </nav>
  );
}
