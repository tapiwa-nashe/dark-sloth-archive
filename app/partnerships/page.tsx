import Link from "next/link";

const partnerTypes = [
  ["Commercial enterprises", "Businesses and service providers contributing goods, services, employment, procurement or enterprise opportunities."],
  ["Nonprofit and charitable institutions", "Organisations whose public-benefit work can strengthen community capability, dignity and resilience."],
  ["Education and research", "Educational, scientific and professional institutions contributing knowledge, training and innovation."],
  ["Technology and infrastructure", "Institutions supporting technology access, facilities, logistics, energy, agriculture or shared infrastructure."],
  ["Cooperatives and professional associations", "Member-led and professional networks widening participation, skills and responsible economic activity."],
];

const classes = [
  ["CLASS A", "Recognised Partner", "Meets entry requirements, institutional integrity standards and basic partnership obligations."],
  ["CLASS B", "Development Partner", "Actively contributes resources, services, employment opportunities, knowledge or development programmes."],
  ["CLASS C", "Strategic Partner", "Participates in sustained institutional, economic, technological or infrastructure development."],
  ["CLASS D", "Civilization Development Partner", "Participates in substantial programmes with demonstrable benefits across multiple communities, institutions or Nodes."],
];

const areas = [
  "Employment, apprenticeships and enterprise development",
  "Education, training, mentorship and research",
  "Goods, services, technology and professional expertise",
  "Food security, agriculture and environmental development",
  "Community facilities, infrastructure and shared services",
  "Local and regional economic networks",
];

export const metadata = {
  title: "Institutional Partnerships",
  description: "Explore the proposed Dark Sloth Civilization Partnership Programme, its shared prosperity principles, partner classifications and institutional safeguards.",
};

export default function PartnershipsPage() {
  return (
    <main className="archive-derived-page text-white">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="mb-5 text-xs tracking-[0.35em] text-zinc-500">DARK SLOTH CIVILIZATION // PARTNERSHIP PROGRAMME</p>
        <p className="mb-6 text-xs tracking-[0.25em] text-amber-200/70">FOUNDATIONAL FRAMEWORK · PROPOSED</p>
        <h1 className="mb-8 max-w-5xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">Shared prosperity is a shared responsibility.</h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          The Civilization Partnership Programme is a proposed institutional framework for
          relationships with organisations whose resources, knowledge, services and capabilities
          can contribute to the advancement of civilization while preserving legitimate
          institutional and commercial independence.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#programme" className="inline-flex border border-zinc-600 px-5 py-3 text-xs tracking-[0.18em] uppercase transition hover:border-white">Explore the programme ↓</Link>
          <Link href="/collections" className="inline-flex border border-zinc-800 px-5 py-3 text-xs tracking-[0.18em] uppercase text-zinc-300 transition hover:border-zinc-500">Explore the Archive →</Link>
        </div>
      </section>

      <section id="programme" className="border-y border-zinc-800 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">01 // PURPOSE</p><h2 className="text-3xl font-semibold leading-tight md:text-4xl">Partnership beyond association.</h2></div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>The programme is designed to align institutional participation with measurable public and civilizational benefit. Commercial success alone is not sufficient: contributions are intended to be assessed by their actual value, quality, accessibility and demonstrated impact.</p>
            <p>A partnership may involve funding, goods and services, employment, training, research, technology, infrastructure or community development. The scope and expected outcomes would be defined for each relationship rather than assumed from a public announcement.</p>
            <p className="text-zinc-200">The guiding principle: the prosperity of an individual institution must contribute to the prosperity and advancement of the wider civilization.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-9"><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">02 // PARTICIPATION</p><h2 className="mb-4 text-3xl font-semibold md:text-4xl">Who the programme is designed to engage</h2><p className="max-w-3xl leading-7 text-zinc-400">The foundational draft identifies the following organisation types as potential participants, subject to eligibility and assessment.</p></header>
        <div className="grid gap-4 md:grid-cols-2">
          {partnerTypes.map(([title, description], i) => <article key={title} className="border border-zinc-800 p-6"><p className="mb-4 font-mono text-xs tracking-[0.2em] text-zinc-600">0{i + 1}</p><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-zinc-400">{description}</p></article>)}
        </div>
      </section>

      <section className="border-y border-zinc-800 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <header className="mb-9"><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">03 // CLASSIFICATION</p><h2 className="mb-4 text-3xl font-semibold md:text-4xl">Different contributions. Defined responsibilities.</h2><p className="max-w-3xl leading-7 text-zinc-400">The proposed four-class model describes the nature and scope of institutional participation. Classification is not a measure of human worth and does not confer ownership or constitutional authority.</p></header>
          <div className="grid gap-4 md:grid-cols-2">
            {classes.map(([label, title, description]) => <article key={label} className="border border-zinc-800 bg-black/40 p-6"><p className="mb-3 font-mono text-xs tracking-[0.2em] text-zinc-500">{label}</p><h3 className="mb-3 text-xl font-semibold">{title}</h3><p className="leading-7 text-zinc-400">{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-9"><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">04 // SHARED BENEFIT</p><h2 className="mb-4 text-3xl font-semibold md:text-4xl">What partnership can make possible</h2><p className="max-w-3xl leading-7 text-zinc-400">Specific objectives would be agreed and documented by the parties. The foundational instruments identify potential areas including:</p></header>
        <ul className="grid gap-3 md:grid-cols-2">{areas.map((item) => <li key={item} className="border border-zinc-800 p-5 leading-7 text-zinc-300"><span className="mr-3 text-zinc-600">—</span>{item}</li>)}</ul>
      </section>

      <section className="border-y border-zinc-800 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr]">
          <div><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">05 // INSTITUTIONAL SAFEGUARDS</p><h2 className="text-3xl font-semibold leading-tight md:text-4xl">Contribution does not purchase authority.</h2></div>
          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>The proposed charter separates commercial participation from constitutional governance. Financial contributions do not purchase Commons membership, governance positions, Influence or Commons Credits.</p>
            <p>Partners do not determine Commons membership, individual entitlements or Commons Credit allocations. The Commons retains authority over its own governance, participation standards and institutional resources.</p>
            <p>The framework also calls for documented contributions, conflict-of-interest disclosure, performance review, participant protection and accountability. Promised contributions are not to be reported as completed contributions.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="mb-8"><p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">06 // DOCUMENTS & STATUS</p><h2 className="mb-4 text-3xl font-semibold md:text-4xl">A framework under institutional development</h2></header>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="border border-zinc-800 p-6"><p className="mb-3 font-mono text-xs tracking-[0.18em] text-zinc-500">CPP CONSTITUTION · VERSION 0.1</p><h3 className="mb-3 text-xl font-semibold">Civilization Partnership Programme Constitution</h3><p className="mb-4 leading-7 text-zinc-400">Foundational draft setting out programme purpose, partner eligibility, classifications, institutional safeguards and accountability.</p><p className="text-xs tracking-[0.15em] text-amber-200/70">PROPOSED — PENDING CONSTITUTIONAL RATIFICATION</p></article>
          <article className="border border-zinc-800 p-6"><p className="mb-3 font-mono text-xs tracking-[0.18em] text-zinc-500">CPP-SPA-001 · VERSION 1.0</p><h3 className="mb-3 text-xl font-semibold">Shared Prosperity Agreement</h3><p className="mb-4 leading-7 text-zinc-400">Foundational agreement template for defining parties, objectives, contributions, benefits, commercial arrangements, reporting and protections.</p><p className="text-xs tracking-[0.15em] text-amber-200/70">PROPOSED — PENDING INSTITUTIONAL APPROVAL</p></article>
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-500">These documents describe proposed frameworks, not ratified constitutional rules or executed partner agreements. The programme's application, accreditation and agreement processes are not represented here as open or operational.</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="border border-zinc-700 bg-black/50 p-8 md:p-10">
          <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500">INSTITUTIONAL RELATIONSHIPS</p>
          <h2 className="mb-5 max-w-3xl text-3xl font-semibold md:text-4xl">Build relationships around work that can be demonstrated.</h2>
          <p className="mb-6 max-w-3xl leading-8 text-zinc-400">This page introduces the programme and its proposed principles. A verified institutional enquiry channel and formal application process will be published when their authority and operation are established.</p>
          <Link href="/books" className="inline-flex border border-zinc-600 px-5 py-3 text-xs tracking-[0.18em] uppercase transition hover:border-white">Explore the institutional library →</Link>
          <Link href="/contribute" className="ml-3 inline-flex border border-zinc-800 px-5 py-3 text-xs tracking-[0.18em] uppercase text-zinc-300 transition hover:border-zinc-500">Contributor pathways →</Link>
        </div>
      </section>
    </main>
  );
}
