import Link from "next/link";

const collections = [
  {
    id: "COLLECTION_001",
    title: "Foundational History",
    description:
      "The first public historical records of the Archive.",
    href: "/collections/foundational-history",
  },

  {
    id: "COLLECTION_002",
    title: "Archive Philosophy",
    description:
      "Records examining recovery, stewardship, memory, belonging, and participation.",
    href: "/collections/archive-philosophy",
  },

  {
    id: "COLLECTION_003",
    title: "The Recovery Laws",
    description:
      "The foundational laws governing observation, recovery, responsibility, humility, and participation.",
    href: "/collections/recovery-laws",
  },

  {
    id: "COLLECTION_004",
    title: "The Twenty-Four Runes",
    description:
      "The canonical runes recovered from The Language of Recovery.",
    href: "/collections/twenty-four-runes",
  },

  {
    id: "COLLECTION_005",
    title: "The Dissolution Cycle",
    description:
      "Recovered records documenting the emergence, evolution, instability, and dissolution of systems.",
    href: "/collections/dissolution-cycle",
  },

  {
    id: "COLLECTION_007",
    title: "Whispering Wilds",
    description:
      "Recovered entities, expeditions, locations, artifacts, and mysteries from the Wilds.",
    href: "/collections/whispering-wilds",
  },
];

export default function CollectionsPage() {
  return (
    <main className="archive-derived-page mx-auto max-w-6xl px-6 py-16">

      <header className="mb-16">

        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          ARCHIVE COLLECTIONS
        </p>

        <h1 className="mb-6 text-5xl font-bold">
          Collections
        </h1>

        <p className="max-w-3xl text-zinc-400 leading-relaxed">
          The Archive reveals itself through ordered collections.
          Each collection preserves a different layer of recovered meaning.
        </p>

      </header>

      <section className="grid gap-6 md:grid-cols-2">

        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.href}
            className="group border border-zinc-800 p-6 transition hover:border-zinc-500"
          >
            <p className="mb-3 text-xs tracking-[0.3em] text-zinc-500">
              {collection.id}
            </p>

            <h2 className="mb-4 text-2xl font-semibold">
              {collection.title}
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              {collection.description}
            </p>

          </Link>
        ))}

      </section>

    </main>
  );
}
