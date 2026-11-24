import Link from "next/link";

function platformBridge(path: string): string | null {
  const configured = process.env.ARCHIVE_PLATFORM_URL?.trim();
  const base = configured || (
    process.env.NODE_ENV === "development" ? "http://localhost:3004" : ""
  );
  if (!base) return null;

  try {
    const parsed = new URL(base);
    const localDevelopmentHost =
      process.env.NODE_ENV === "development" &&
      (parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1");
    if (parsed.protocol !== "https:" && !localDevelopmentHost) return null;
    return new URL(path, parsed.origin).toString();
  } catch {
    return null;
  }
}

export default function StudiosPage() {
  const helmrUrl = platformBridge("/helmr-hugr");
  const expeditionUrl = platformBridge("/expedition");

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



          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">



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

              {helmrUrl ? (
                <a href={helmrUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center border border-neutral-700 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition">
                  Enter HELMR HUGR ↗
                </a>
              ) : (
                <p className="mt-6 text-xs leading-6 text-neutral-500">
                  HELMR HUGR bridge is awaiting its secure Platform URL configuration.
                </p>
              )}

            </article>

            <article className="border border-neutral-800 bg-black/70 rounded-lg p-8">
              <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-4">
                Interactive Recovery
              </p>
              <h3 className="text-3xl font-semibold mb-4">
                THE EXPEDITION
              </h3>
              <p className="text-neutral-400 leading-7 mb-6">
                Enter the recovered world of The Whispering Wilds. Investigate,
                reconstruct continuity and carry your Archive Identity into the field.
              </p>
              {expeditionUrl ? (
                <a href={expeditionUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center border border-neutral-700 px-5 py-3 text-xs tracking-[0.18em] uppercase hover:bg-white hover:text-black transition">
                  Enter the Expedition ↗
                </a>
              ) : (
                <p className="text-xs leading-6 text-neutral-500">
                  Expedition bridge is awaiting its secure Platform URL configuration.
                </p>
              )}
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
