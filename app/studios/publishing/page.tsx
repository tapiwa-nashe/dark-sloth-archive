import Link from "next/link";

import {
  getEditionRegistry
} from "@/lib/publishing/registry";


const collections = [

  "FOUNDATIONAL HISTORY",
  "ARCHIVE PHILOSOPHY",
  "THE RECOVERY LAWS",
  "THE TWENTY-FOUR RUNES",
  "WHISPERING WILDS"

];


export default function PublishingStudioPage() {

  const publications =
    getEditionRegistry();


  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-6xl mx-auto">


        <p className="font-mono text-xs tracking-[0.35em] text-neutral-500 uppercase mb-6">
          DARK SLOTH // STUDIOS
        </p>


        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          PUBLISHING STUDIO
        </h1>


        <p className="max-w-3xl text-neutral-400 leading-8 mb-12">
          Assemble recovered records into preserved Archive editions.
        </p>



        <section className="mb-20">

          <h2 className="text-2xl font-semibold mb-6">
            Generate Edition
          </h2>


          <div className="grid md:grid-cols-2 gap-5">

            {collections.map(
              collection => (

                <Link
                  key={collection}
                  href={`/api/publishing/${encodeURIComponent(collection)}`}
                  className="border border-neutral-800 bg-neutral-950 rounded-lg p-6 hover:border-neutral-500 transition"
                >

                  <p className="text-lg font-semibold">
                    {collection}
                  </p>

                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Publish Collection →
                  </p>

                </Link>

              )
            )}

          </div>

        </section>




        <section>

          <h2 className="text-2xl font-semibold mb-6">
            Generated Editions
          </h2>



          {
            publications.length === 0 ? (

              <div className="border border-neutral-800 rounded-lg p-8 text-neutral-500">
                No generated editions yet.
              </div>

            ) : (

              <div className="grid md:grid-cols-2 gap-5">

                {
                  publications.map(
                    publication => (

                      <Link
                        href={`/studios/publishing/${encodeURIComponent(publication.title)}`}
                        key={publication.title}
                        className="block border border-neutral-800 bg-neutral-950 rounded-lg p-6 hover:border-neutral-500 transition"
                      >

                        <h3 className="text-xl font-semibold mb-4">
                          {publication.title}
                        </h3>


                        <div className="space-y-2">

                          {
                            publication.outputs.map(
                              file => (

                                <p
                                  key={file}
                                  className="text-sm text-neutral-400"
                                >
                                  {file}
                                </p>

                              )
                            )
                          }

                        </div>


                      </Link>

                    )
                  )
                }

              </div>

            )
          }


        </section>


      </section>


    </main>

  );

}
