import Link from "next/link";

import ExportActions from "@/components/creator/ExportActions";

import {
  getManuscript
} from "@/lib/manuscripts/store";


type Props = {

  params: Promise<{
    id:string;
  }>;

};


export default async function ManuscriptWorkspace(
  {
    params
  }:Props
) {

  const {
    id
  } =
    await params;


  const manuscript =
    getManuscript(
      id
    );


  if (!manuscript) {

    return (

      <main className="min-h-screen bg-black text-white px-6 py-20">

        <h1 className="text-4xl font-bold">
          Manuscript Not Found
        </h1>

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-5xl mx-auto">


        <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
          DARK SLOTH // MANUSCRIPT WORKSPACE
        </p>


        <h1 className="text-5xl font-bold mb-8">
          {manuscript.title}
        </h1>



        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-8">


          <h2 className="text-xl font-semibold mb-4">
            Manuscript Status
          </h2>


          <p className="text-neutral-400">
            {manuscript.status}
          </p>


          <p className="text-neutral-500 mt-2 text-sm">
            Created:
            {" "}
            {manuscript.createdAt}
          </p>


        </section>



        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-8">


          <h2 className="text-xl font-semibold mb-4">
            Manuscript Content
          </h2>


          <pre className="whitespace-pre-wrap text-neutral-300 leading-8">
            {manuscript.content}
          </pre>


        </section>



        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-8">


          <h2 className="text-xl font-semibold mb-6">
            Publishing Actions
          </h2>


          <ExportActions id={manuscript.id} />


        </section>



        <Link
          href="/creator/publishing"
          className="text-neutral-400 underline"
        >
          ← Back to Manuscript Forge
        </Link>


      </section>

    </main>

  );

}
