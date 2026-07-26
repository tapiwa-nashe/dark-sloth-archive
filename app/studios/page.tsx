import Link from "next/link";


export default function StudiosPage() {

  return (

    <div>


      <section className="helmr-hero">

        <div className="helmr-background"></div>


        <div className="hh-foreground">


          <div className="hh-label">
            DARK SLOTH // HELMR HUGR
          </div>


          <h1 className="hh-title">
            HELMR HUGR
          </h1>


          <div className="hh-subtitle">
            STABILIZED STRUCTURE
          </div>


          <div className="hh-copy">

            <p>
              Helmr Hugr is the identity system of Dark Sloth.
            </p>

            <p>
              Objects are not products.
            </p>

            <p>
              Objects are recovered artifacts.
            </p>

          </div>


          <div className="hh-panel-footer">

            <div>
              <span>CLASSIFICATION</span>
              <p>IDENTITY SYSTEM</p>
            </div>


            <div>
              <span>STATUS</span>
              <p>ACTIVE</p>
            </div>


            <div>
              <span>RECOVERY PROTOCOL</span>
              <p>
                PRESERVE • VERIFY • TRANSMIT • DOCUMENT
              </p>
            </div>

          </div>


        </div>


      </section>



      <section className="px-6 py-20 text-white">

        <div className="max-w-6xl mx-auto">


          <div className="mb-12">

            <p className="font-mono text-xs tracking-[0.35em] text-neutral-500 uppercase mb-5">
              Dark Sloth // Studios
            </p>


            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              RECOVERY INFRASTRUCTURE
            </h2>


          </div>



          <div className="grid md:grid-cols-2 gap-6">



            <article className="border border-neutral-800 bg-black/70 rounded-lg p-8">

              <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
                Studio
              </p>


              <h3 className="text-3xl font-semibold mb-4">
                HELMR HUGR
              </h3>


              <p className="text-neutral-400 leading-7 mb-6">
                The Archive identity system. Structures, artifacts,
                and recovered objects.
              </p>


              <p className="text-xs tracking-[0.18em] uppercase text-neutral-500">
                Identity System
              </p>


            </article>




            <article className="border border-neutral-800 bg-black/70 rounded-lg p-8">


              <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
                Studio
              </p>


              <h3 className="text-3xl font-semibold mb-4">
                PUBLISHING STUDIO
              </h3>


              <p className="text-neutral-400 leading-7 mb-6">
                The Archive publication engine.
                Records are assembled, rendered,
                verified, and transmitted as preserved publications.
              </p>


              <Link
                href="/studios/publishing"
                className="inline-flex border border-neutral-700 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition"
              >
                Enter Publishing Studio →
              </Link>


            </article>



          </div>


        </div>


      </section>


    </div>

  );

}
