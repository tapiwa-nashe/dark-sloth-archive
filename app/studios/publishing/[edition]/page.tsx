import Link from "next/link";

import {
  getEdition
} from "@/lib/publishing/edition";


type Props = {

  params: Promise<{
    edition: string;
  }>;

};


export default async function EditionPage(
  {
    params
  }: Props
) {

  const {
    edition
  } =
    await params;


  const decoded =
    decodeURIComponent(
      edition
    );


  const publication =
    getEdition(
      decoded
    );


  if (!publication) {

    return (

      <main className="min-h-screen bg-black text-white px-6 py-20">

        <h1 className="text-4xl font-bold">
          Edition Not Found
        </h1>

      </main>

    );

  }


  return (

    <main className="min-h-screen bg-black text-white px-6 py-20">

      <section className="max-w-5xl mx-auto">


        <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
          Publishing Studio // Edition
        </p>


        <h1 className="text-5xl font-bold mb-6">
          {publication.title}
        </h1>


        <div className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">

          <h2 className="text-xl font-semibold mb-6">
            Edition Status
          </h2>


          <p className="text-neutral-400">
            PUBLISHED
          </p>


          <p className="mt-4 text-neutral-400">
            Engine: Publishing Studio V1
          </p>

        </div>



        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">

          <h2 className="text-xl font-semibold mb-6">
            Edition Record
          </h2>


          <div className="space-y-3 text-neutral-400">

            <p>
              Collection:
              {" "}
              {publication.title}
            </p>


            <p>
              Engine:
              {" "}
              Publishing Studio V1
            </p>


            <p>
              Status:
              {" "}
              VERIFIED
            </p>

          </div>

        </section>



        {
          publication.manifest && (

            <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">

              <h2 className="text-xl font-semibold mb-6">
                Archive Manifest
              </h2>


              <div className="space-y-3 text-neutral-400">

                <p>
                  Edition ID:
                  {" "}
                  {publication.manifest.id}
                </p>


                <p>
                  Collection:
                  {" "}
                  {publication.manifest.collection}
                </p>


                <p>
                  Engine:
                  {" "}
                  {publication.manifest.engine}
                </p>


                <p>
                  Verification:
                  {" "}
                  {publication.manifest.status}
                </p>


                <p>
                  Source Records:
                  {" "}
                  {publication.manifest.records?.length ?? 0}
                </p>


                <p>
                  Artifacts:
                  {" "}
                  {publication.manifest.outputs?.length ?? 0}
                </p>


                <p>
                  Generated:
                  {" "}
                  {publication.manifest.generated}
                </p>

              </div>

            </section>

          )
        }



        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">

          <h2 className="text-xl font-semibold mb-6">
            Source Recoveries
          </h2>


          <div className="space-y-3">

          {
            publication.records.map(
              record => (

                <Link
                  key={record.id}
                  href={`/records/${record.id}`}
                  className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition"
                >

                  <div className="font-semibold">
                    REC-{record.id}
                  </div>


                  <div className="text-neutral-400 text-sm mt-1">
                    {record.title}
                  </div>

                </Link>

              )
            )
          }

          </div>

        </section>




        <section className="mb-10">

          <h2 className="text-2xl font-semibold mb-5">
            Outputs
          </h2>


          <div className="space-y-3">

          {
            publication.files.map(
              file => (

                <Link
                  key={file}
                  href={`/api/artifacts/${encodeURIComponent(publication.title)}/${encodeURIComponent(file)}`}
                  target="_blank"
                  className="flex items-center justify-between border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition"
                >

                  <span>
                    {file}
                  </span>


                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                    Open →
                  </span>

                </Link>

              )
            )
          }

          </div>


        </section>



        <Link
          href="/studios/publishing"
          className="text-sm text-neutral-400 underline"
        >
          ← Back to Publishing Studio
        </Link>


      </section>

    </main>

  );

}
