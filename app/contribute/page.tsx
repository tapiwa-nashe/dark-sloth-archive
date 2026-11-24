import Link from "next/link";

const pathways = [
  ["SOURCE CUSTODIANS", "Share documents, photographs, objects or records where you have the right and authority to do so, with enough context to establish their origin."],
  ["RESEARCHERS & HISTORIANS", "Contribute research, citations, comparative analysis and corrections that can be traced to inspectable sources."],
  ["ARCHIVISTS & LIBRARIANS", "Support description, classification, preservation, digitisation and responsible stewardship of source material."],
  ["EDUCATORS & TRANSLATORS", "Help make knowledge accessible through teaching resources, careful translation and contextual explanation."],
  ["TECHNICAL & INSTITUTIONAL CONTRIBUTORS", "Support preservation infrastructure, accessibility, tools, standards and responsible institutional collaboration."],
];

const principles = [
  ["Provenance before certainty", "Identify where material came from, who supplied it where appropriate, and what is known about its custody."],
  ["Evidence distinct from interpretation", "Separate direct source content, documented fact, interpretation, hypothesis and unresolved questions."],
  ["Rights, consent and dignity", "Share only material you are authorised to provide. Obtain consent where required and respect privacy, cultural restrictions and applicable law."],
  ["Corrections preserve history", "Corrections should be documented transparently. Earlier versions and decisions should not be silently erased."],
  ["No promise of publication", "Receipt or discussion of material does not guarantee acceptance, verification, attribution or public release."],
];

export const metadata = {
  title: "Contribute to the Archive",
  description: "Learn how researchers, source custodians, archivists, educators and institutions can support the Dark Sloth Archive responsibly.",
};

export default function ContributePage() {
  return (
    <main className="archive-derived-page text-white">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-5 text-xs tracking-[0.35em] text-zinc-500">DARK SLOTH ARCHIVE // CONTRIBUTOR PATHWAYS</p>
        <h1 className="mb-8 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">Help preserve what should not be lost.</h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          The Archive grows through careful observation, responsible stewardship and evidence
          that can be examined. Contribution is not simply the act of sending material; it is
          the responsibility to preserve its context, limits and provenance.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/records" className="inline-flex border border-zinc-600 px-5 py-3 text-xs tracking-[0.18em] uppercase transition hover:border-white">Explore existing records →</Link>
          <Link href="/partnerships" className="inline-flex border border-zinc-800 px-5 py-3 text-xs tracking-[0.18em] uppercase text-zinc-300 transition hover:border-zinc-500">Institutional partnerships →</Link>
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">01 // WHO CAN CONTRIBUTE</p>
          <h2 className="mb-9 max-w-3xl text-3xl font-semibold md:text-4xl">Different forms of stewardship strengthen the record.</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pathways.map(([title, description]) => <article key={title} className="border border-zinc-800 p-6"><h3 className="mb-3 text-lg font-semibold">{title}</h3><p className="leading-7 text-zinc-400">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">02 // CONTRIBUTION STANDARD</p>
        <h2 className="mb-9 max-w-3xl text-3xl font-semibold md:text-4xl">The material matters. Its context matters just as much.</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {principles.map(([title, description], i) => <article key={title} className="border border-zinc-800 p-6"><p className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-600">0{i + 1}</p><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-zinc-400">{description}</p></article>)}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">03 // REVIEW & PUBLICATION</p><h2 className="text-3xl font-semibold leading-tight md:text-4xl">A contribution is reviewed before it becomes a public record.</h2></div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>Material must be assessed for source context, rights, integrity, relevance and appropriate classification. Review may identify gaps, contradictions or unresolved questions.</p>
            <p>Evidence, interpretation and hypothesis remain distinguishable. A contribution does not become verified merely because it has been received, discussed or catalogued.</p>
            <p>Public release is a separate decision. Only material that passes the applicable review and explicit publication process may appear in the public Archive.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="border border-zinc-700 bg-black/50 p-8 md:p-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">CURRENT INTAKE STATUS</p>
          <h2 className="mb-5 max-w-3xl text-3xl font-semibold md:text-4xl">Contributor intake is not yet open on this website.</h2>
          <p className="mb-6 max-w-3xl leading-8 text-zinc-400">
            This page explains the standards and forms of contribution the Archive is preparing
            to support. It does not accept uploads or create a submission record. A verified
            intake channel, consent process and acknowledgement workflow must be established
            before contributions are invited here.
          </p>
          <p className="text-sm leading-7 text-zinc-500">Please do not send confidential, sensitive or third-party personal information through an unapproved channel.</p>
        </div>
      </section>
    </main>
  );
}
