import Link from "next/link";

export default function ArchiveNav() {
  return (
    <nav className="archive-nav">
      <Link href="/">ARCHIVE</Link>
      <Link href="/records">RECORDS</Link>
      <Link href="/books">BOOKS</Link>
      <Link href="/philosophy">PHILOSOPHY</Link>
      <Link href="/artifacts">ARTIFACTS</Link>
      <Link href="/platform">PLATFORM</Link>
      <Link href="/about">ABOUT</Link>
    </nav>
  );
}
