import Link from "next/link";

import ManuscriptForge from "@/components/creator/ManuscriptForge";


export default function CreatorPublishingPage() {

  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-5xl mx-auto">


        <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
          DARK SLOTH // CREATOR WORKSPACE
        </p>


        <h1 className="text-5xl font-bold mb-8">
          MANUSCRIPT FORGE
        </h1>


        <p className="text-neutral-400 max-w-3xl leading-8 mb-12">
          Private creator workspace for transforming raw manuscripts
          into preserved Archive editions.
        </p>



        <ManuscriptForge />


        <div className="mt-10">

          <Link
            href="/studios/publishing"
            className="text-neutral-400 underline"
          >
            ← Publishing Studio
          </Link>

        </div>


      </section>

    </main>

  );

}
