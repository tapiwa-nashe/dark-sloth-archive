import Link from "next/link";
import Image from "next/image";

import { getArchiveBooks } from "@/lib/books/editionBooks";

type Book = {
  number: string;
  title: string;
  description: string;
  amazon: string;
  cover: string;
};

const codexBooks: Book[] = [
  {
    number: "Book I",
    title: "The Dissolution Cycle",
    description:
      "A field record of systems that collapse beneath the weight of their own contradictions. The first recovered observations from the Wilds.",
    amazon: "https://www.amazon.com/dp/B0H2YKNXXX",
    cover: "/books/dissolution-cycle.jpg",
  },
  {
    number: "Book II",
    title: "The Language of Recovery",
    description:
      "An introduction to the principles, symbols, and structures through which meaning may be recovered, preserved, and carried forward.",
    amazon: "https://www.amazon.com/dp/B0H3HF9S8C",
    cover: "/books/language-of-recovery.jpg",
  },
  {
    number: "Book III",
    title: "The Whispering Wilds",
    description:
      "Expedition records from the frontier beyond certainty, where memory, observation, and reality refuse to remain separate.",
    amazon: "https://www.amazon.com/dp/B0H4Q4LRTG",
    cover: "/books/whispering-wilds.jpg",
  },
  {
    number: "Book IV",
    title: "The Language Beneath the Runes",
    description:
      "A study of the deeper structures beneath symbols themselves. Not what the runes say, but why they speak.",
    amazon: "https://www.amazon.com/dp/B0H4XCCZ7W",
    cover: "/books/language-beneath-the-runes.jpg",
  },
  {
    number: "Book V",
    title: "Substrate Records",
    description:
      "Recovered fragments from the layers beneath civilization. Foundations, patterns, and continuities that persist beneath visible history.",
    amazon: "https://www.amazon.com/dp/B0H5X6N61Z",
    cover: "/books/substrate-records.jpg",
  },
  {
    number: "Book VI",
    title: "The Black Vault",
    description:
      "An investigation into the Archive's deepest recoveries, forbidden records, and the questions that should perhaps remain unanswered.",
    amazon: "https://www.amazon.com/dp/B0H5ZYNF96",
    cover: "/books/black-vault.jpg",
  },
];

const archiveDocuments: Book[] = [
  {
    number: "Volume I",
    title: "The Archive Constitution",
    description:
      "The foundational charter of the Archive. Definitions, principles, rights, responsibilities, and the civilizational purpose of Recovery.",
    amazon: "https://www.amazon.com/dp/B0H5FTLWQ9",
    cover: "/books/archive-constitution.jpg",
  },
  {
    number: "Volume II",
    title: "The Archive Field Manual",
    description:
      "Practical guidance for participants, Seekers, Archivists, Guardians, and all who choose to engage in Recovery.",
    amazon: "https://www.amazon.com/dp/B0GX7N8RNM",
    cover: "/books/archive-field-manual.jpg",
  },
  {
    number: "Volume III",
    title: "The Guardian's Handbook",
    description:
      "A doctrine of protection. The preservation of Recoveries, participants, memory, infrastructure, and continuity across generations.",
    amazon: "https://www.amazon.com/dp/B0H5MR7JJF",
    cover: "/books/guardians-handbook.jpg",
  },
  {
    number: "Volume IV",
    title: "The Archivist's Handbook",
    description:
      "A guide to observation, documentation, classification, and stewardship. The craft of preserving meaning against dissolution.",
    amazon: "https://www.amazon.com/dp/B0H5RM3Q7M",
    cover: "/books/archivists-handbook.jpg",
  },
  {
    number: "Volume V",
    title: "The Recovery Record Standards",
    description:
      "Standards, classifications, and protocols governing the creation, preservation, and interpretation of Recovery Records.",
    amazon: "https://www.amazon.com/dp/B0GZK83YTY",
    cover: "/books/recovery-record-standards.jpg",
  },
  {
    number: "Volume VI",
    title: "The Dossier Protocols",
    description:
      "The official framework for dossiers, investigations, relationships, evidence chains, and continuity verification within the Archive.",
    amazon: "https://www.amazon.com/dp/B0H5VP1KWG",
    cover: "/books/dossier-protocols.jpg",
  },
];

export default function BooksPage() {

  const generatedEditions =
    getArchiveBooks();

  return (
    <main className="archive-derived-page text-white px-6 py-20">
      <section className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.35em] text-neutral-500 uppercase mb-5">
            Public Library
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            LIBRARY
          </h1>

          <p className="max-w-3xl text-neutral-400 leading-8">
            Books preserve pathways. The Codex reveals the Wilds. The Archive
            Documents preserve the structures through which Recovery becomes
            civilization.
          </p>
        </div>

        <section
          aria-labelledby="catalogue-guide"
          className="mb-16 grid gap-5 border-y border-neutral-800 py-8 md:grid-cols-3"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">
              01 / Published books
            </p>
            <h2 id="catalogue-guide" className="text-lg font-semibold mb-2">
              The Codex and Archive Documents
            </h2>
            <p className="text-sm leading-7 text-neutral-400">
              Public-facing book listings with links to their retailer editions.
              A listing describes a publication, not the approval status of every
              idea or framework discussed within it.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">
              02 / Institutional material
            </p>
            <h2 className="text-lg font-semibold mb-2">
              Standards and working documents
            </h2>
            <p className="text-sm leading-7 text-neutral-400">
              Constitutional drafts, proposed agreements, and working standards
              are not represented as ratified policy or published downloads.
              They enter this public catalogue only after explicit release review.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">
              03 / Publishing Studio
            </p>
            <h2 className="text-lg font-semibold mb-2">
              Verified public editions
            </h2>
            <p className="text-sm leading-7 text-neutral-400">
              Generated editions appear separately and only when their release
              metadata, approval, provenance, and declared public files pass
              the Archive&apos;s public-release checks.
            </p>
          </div>
        </section>

        <section className="mb-14 border border-neutral-800 bg-black/60 p-6 md:p-8">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-neutral-500 mb-3">PUBLIC LIBRARY / CATALOGUE ACCESS</p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Browse the collection. Read inside the Platform.</h2>
          <p className="max-w-3xl text-sm leading-7 text-neutral-400 mb-5">This public catalogue lets visitors discover books, inspect covers and publication details, and view released artifacts. The full digital reading experience, chapter navigation and participant reading tools are reserved for the Archive Platform.</p>
          <Link href="/platform" className="inline-flex items-center border border-neutral-600 px-5 py-3 text-xs tracking-[0.16em] uppercase hover:bg-white hover:text-black transition">Continue to the Archive Platform →</Link>
        </section>

        <BookSeries
          title="The Dark Sloth Codex"
          subtitle="Field logs, recovered language, Wilds records, substrate fragments, and vault investigations."
          books={codexBooks}
        />

        <BookSeries
          title="The Archive Documents"
          subtitle="Constitutional, operational, guardian, archivist, record, and dossier frameworks of the Archive."
          books={archiveDocuments}
        />

        {
          generatedEditions.length > 0 && (

            <section className="mb-20">

              <div className="mb-8">

                <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-3">
                  Publishing Studio / Public release catalogue
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                  Generated Editions
                </h2>

                <p className="text-neutral-400 leading-8 max-w-3xl">
                  Editions assembled through the Archive Publishing Studio engine.
                </p>

              </div>


              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                  generatedEditions.map(
                    (book) => (

                      <Link
                        key={book.id}
                        href={`/studios/publishing/${encodeURIComponent(book.id)}`}
                        className="border border-neutral-800 bg-black/70 rounded-lg p-5 hover:border-neutral-500 transition"
                      >

                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-600 mb-4">
                          Generated Edition
                        </p>


                        <h3 className="text-xl font-semibold mb-4">
                          {book.title}
                        </h3>


                        <p className="text-neutral-400 text-sm mb-2">
                          Engine: {book.engine}
                        </p>


                        <p className="text-neutral-500 text-sm mb-2">
                          Collection: {book.collection}
                        </p>


                        <p className="text-neutral-500 text-sm mb-3">
                          Records:
                          {" "}
                          {book.records?.length ?? 0}
                        </p>


                        <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500">
                          Status: {book.status}
                        </p>


                      </Link>

                    )
                  )
                }

              </div>

            </section>

          )
        }



        <div className="mt-20 border border-neutral-800 bg-black/70 p-8 rounded-lg backdrop-blur-sm">
          <p className="font-mono text-xs tracking-[0.28em] text-neutral-500 uppercase mb-4">
            Begin Here
          </p>

          <h2 className="text-3xl font-semibold mb-4">
            First Recovery Protocol
          </h2>

          <p className="text-neutral-400 leading-8 mb-6 max-w-2xl">
            Before the Archive is read, it may be entered. Every Seeker begins
            with a Recovery.
          </p>

          <Link
            href="/first-recovery"
            className="inline-flex border border-neutral-600 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition"
          >
            Begin Your First Recovery →
          </Link>
        </div>
      </section>
    </main>
  );
}

function BookSeries({
  title,
  subtitle,
  books,
}: {
  title: string;
  subtitle: string;
  books: Book[];
}) {
  return (
    <section className="mb-20">
      <div className="mb-8">
        <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-3">
          Published Book Series
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold mb-4">{title}</h2>

        <p className="text-neutral-400 leading-8 max-w-3xl">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <article
            key={`${book.number}-${book.title}`}
            className="border border-neutral-800 bg-black/70 rounded-lg p-4 backdrop-blur-sm hover:border-neutral-500 transition min-h-[260px] flex flex-col"
          >
            <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-neutral-500 mb-2">
              {book.number}
            </p>

            <div className="mb-3 overflow-hidden rounded border border-neutral-800">
              <Image
                src={book.cover}
                alt={book.title}
                width={400}
                height={600}
                className="w-full h-[420px] object-contain"
              />
            </div>

            <h3 className="text-xl font-semibold mb-3 leading-tight">
              {book.title}
            </h3>

            <p className="text-neutral-400 text-xs leading-6 flex-1 line-clamp-5">
              {book.description}
            </p>

            <div className="mt-6 grid gap-2">
              <Link
                href={`/read/${encodeURIComponent(book.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""))}`}
                className="inline-flex items-center justify-center border border-neutral-500 px-3 py-3 font-mono text-[10px] tracking-[0.16em] uppercase text-white transition hover:bg-white hover:text-black"
              >
                Read Book →
              </Link>
              <a
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-neutral-800 px-3 py-2 font-mono text-[10px] tracking-[0.16em] uppercase text-neutral-400 transition hover:border-neutral-500 hover:text-white"
              >
                View external publication listing ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
