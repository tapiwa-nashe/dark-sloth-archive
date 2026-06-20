import Link from "next/link";
import Image from "next/image";

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
    cover: "/books/dissolution-cycle.jpg",
  },
  {
    number: "Book II",
    title: "The Language of Recovery",
    description:
      "An introduction to the principles, symbols, and structures through which meaning may be recovered, preserved, and carried forward.",
    amazon: "https://www.amazon.com/dp/B0H3HF9S8C",
    cover: "/books/language-of-recovery.jpg",
    cover: "/books/language-of-recovery.jpg",
  },
  {
    number: "Book III",
    title: "The Whispering Wilds",
    description:
      "Expedition records from the frontier beyond certainty, where memory, observation, and reality refuse to remain separate.",
    amazon: "https://www.amazon.com/dp/B0H4Q4LRTG",
    cover: "/books/whispering-wilds.jpg",
    cover: "/books/whispering-wilds.jpg",
  },
  {
    number: "Book IV",
    title: "The Language Beneath the Runes",
    description:
      "A study of the deeper structures beneath symbols themselves. Not what the runes say, but why they speak.",
    amazon: "https://www.amazon.com/dp/B0H4XCCZ7W",
    cover: "/books/language-beneath-the-runes.jpg",
    cover: "/books/language-beneath-the-runes.jpg",
  },
  {
    number: "Book V",
    title: "Substrate Records",
    description:
      "Recovered fragments from the layers beneath civilization. Foundations, patterns, and continuities that persist beneath visible history.",
    amazon: "https://www.amazon.com/dp/B0H5X6N61Z",
    cover: "/books/substrate-records.jpg",
    cover: "/books/substrate-records.jpg",
  },
  {
    number: "Book VI",
    title: "The Black Vault",
    description:
      "An investigation into the Archive's deepest recoveries, forbidden records, and the questions that should perhaps remain unanswered.",
    amazon: "https://www.amazon.com/dp/B0H5ZYNF96",
    cover: "/books/black-vault.jpg",
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
    cover: "/books/archive-constitution.jpg",
  },
  {
    number: "Volume II",
    title: "The Archive Field Manual",
    description:
      "Practical guidance for participants, Seekers, Archivists, Guardians, and all who choose to engage in Recovery.",
    amazon: "https://www.amazon.com/dp/B0GX7N8RNM",
    cover: "/books/archive-field-manual.jpg",
    cover: "/books/archive-field-manual.jpg",
  },
  {
    number: "Volume III",
    title: "The Guardian's Handbook",
    description:
      "A doctrine of protection. The preservation of Recoveries, participants, memory, infrastructure, and continuity across generations.",
    amazon: "https://www.amazon.com/dp/B0H5MR7JJF",
    cover: "/books/guardians-handbook.jpg",
    cover: "/books/guardians-handbook.jpg",
  },
  {
    number: "Volume IV",
    title: "The Archivist's Handbook",
    description:
      "A guide to observation, documentation, classification, and stewardship. The craft of preserving meaning against dissolution.",
    amazon: "https://www.amazon.com/dp/B0H5RM3Q7M",
    cover: "/books/archivists-handbook.jpg",
    cover: "/books/archivists-handbook.jpg",
  },
  {
    number: "Volume V",
    title: "The Recovery Record Standards",
    description:
      "Standards, classifications, and protocols governing the creation, preservation, and interpretation of Recovery Records.",
    amazon: "https://www.amazon.com/dp/B0GZK83YTY",
    cover: "/books/recovery-record-standards.jpg",
    cover: "/books/recovery-record-standards.jpg",
  },
  {
    number: "Volume VI",
    title: "The Dossier Protocols",
    description:
      "The official framework for dossiers, investigations, relationships, evidence chains, and continuity verification within the Archive.",
    amazon: "https://www.amazon.com/dp/B0H5VP1KWG",
    cover: "/books/dossier-protocols.jpg",
    cover: "/books/dossier-protocols.jpg",
  },
];

export default function BooksPage() {
  return (
    <main className="archive-derived-page text-white px-6 py-20">
      <section className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.35em] text-neutral-500 uppercase mb-5">
            Archive Library
          </p>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            BOOKS
          </h1>

          <p className="max-w-3xl text-neutral-400 leading-8">
            Books preserve pathways. The Codex reveals the Wilds. The Archive
            Documents preserve the structures through which Recovery becomes
            civilization.
          </p>
        </div>

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
          Publication Line
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

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-600">
                Status: Recovered
              </span>

              <a
                href={book.amazon}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.18em] uppercase text-white border border-neutral-700 px-3 py-2 hover:bg-white hover:text-black transition whitespace-nowrap"
              >
                Recover Book →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
