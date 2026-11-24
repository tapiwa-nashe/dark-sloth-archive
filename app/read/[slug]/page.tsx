import Link from "next/link";
import { ArrowUpRight, BookOpen, LockKeyhole } from "lucide-react";

export default async function PublicReaderAccessPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = decodeURIComponent(slug).replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main className="archive-derived-page archive-page-v2">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20">
        <div className="w-full rounded-2xl border border-neutral-800 bg-black/60 p-7 md:p-12">
          <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700"><BookOpen size={22}/></div>
          <p className="archive-page-kicker">DARK SLOTH LIBRARY / READER ACCESS</p>
          <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h1>
          <div className="my-7 flex items-start gap-3 border-l-2 border-neutral-500 pl-4">
            <LockKeyhole size={18} className="mt-1 shrink-0 text-neutral-400"/>
            <div><h2 className="font-semibold">The full reading experience is reserved for the Archive Platform.</h2><p className="mt-2 text-sm leading-7 text-neutral-400">You can browse the public catalogue and view released book artifacts here. Chapter reading, reading progress and participant reader tools are available inside the Platform.</p></div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/platform" className="inline-flex min-h-12 items-center gap-2 bg-white px-5 text-xs font-semibold uppercase tracking-[.14em] text-black transition hover:bg-neutral-200">Open the Archive Platform <ArrowUpRight size={15}/></Link>
            <Link href="/books" className="inline-flex min-h-12 items-center border border-neutral-700 px-5 text-xs font-semibold uppercase tracking-[.14em] hover:border-neutral-400">Return to Library Catalogue</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
