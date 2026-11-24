import Link from "next/link";

export const metadata = {
  title: "Developmental PDFs | Dark Sloth Archive",
  description: "Institutional developmental documents and canonical research frameworks preserved by the Dark Sloth Archive.",
};

const documents = [
  {
    title: "The Archive Investigations — Master Canonical Outline",
    version: "1.1",
    date: "20 November 2026",
    classification: "INSTITUTIONAL MILESTONE",
    lkr: "LKR-DEV-1655",
    description:
      "The approved research architecture for three independent Archive investigations: The Architecture of Numbers, The Architecture of the Heavens, and The Architecture of Celestial Cycles. Establishes 180 chapters minimum, evidence standards, source hierarchy, recovery dossier requirements, and a ten-chapter manuscript production cadence.",
    file: "/developmental-pdfs/ARCHIVE-INVESTIGATIONS-MASTER-CANONICAL-OUTLINE-V1.1.pdf",
    details: [
      "Three independent investigative volumes",
      "60 chapters minimum per volume",
      "180 chapters minimum in total",
      "Ten chapters per manuscript batch",
      "LKR registration and publication read-back verified",
    ],
  },
];

export default function DevelopmentalPdfsPage() {
  return (
    <main className="archive-derived-page min-h-screen px-6 py-20 text-white">
      <section className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.35em] text-neutral-500">
            Dark Sloth Archive / Institutional Records
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            DEVELOPMENTAL PDFs
          </h1>
          <p className="max-w-3xl leading-8 text-neutral-400">
            Canonical outlines, research frameworks and institutional working
            documents preserved for reference during the development of the Archive.
            These documents retain their stated approval and maturity status;
            inclusion here does not convert a working framework into ratified policy
            or a completed historical investigation.
          </p>
        </div>

        <div className="mb-10 grid gap-4 border-y border-neutral-800 py-6 md:grid-cols-3">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Collection
            </p>
            <p className="text-sm text-neutral-200">Institutional Records</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Document class
            </p>
            <p className="text-sm text-neutral-200">Developmental / Canonical</p>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              Preservation
            </p>
            <p className="text-sm text-neutral-200">Living Knowledge Runtime</p>
          </div>
        </div>

        <div className="space-y-5">
          {documents.map((document) => (
            <article
              key={document.lkr}
              className="rounded-lg border border-neutral-800 bg-black/70 p-6 md:p-8"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  {document.classification} · VERSION {document.version}
                </p>
                <p className="font-mono text-[10px] text-neutral-500">
                  {document.date}
                </p>
              </div>
              <h2 className="mb-4 text-2xl font-semibold leading-tight md:text-3xl">
                {document.title}
              </h2>
              <p className="mb-6 max-w-4xl text-sm leading-7 text-neutral-400">
                {document.description}
              </p>
              <ul className="mb-7 grid gap-2 text-sm text-neutral-300 md:grid-cols-2">
                {document.details.map((detail) => (
                  <li key={detail} className="border-l border-neutral-700 pl-3">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    LKR recovery registration
                  </p>
                  <p className="mt-1 font-mono text-sm text-neutral-200">
                    {document.lkr}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    Published by Entity-0002 — The Archive
                  </p>
                </div>
                <a
                  href={document.file}
                  download
                  className="inline-flex items-center border border-neutral-600 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
                >
                  Download canonical PDF
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-neutral-800 pt-6">
          <Link
            href="/books"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-400 transition hover:text-white"
          >
            ← Return to the Archive Library
          </Link>
        </div>
      </section>
    </main>
  );
}
