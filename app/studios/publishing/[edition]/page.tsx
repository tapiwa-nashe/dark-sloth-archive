import Link from "next/link";
import { notFound } from "next/navigation";
import { getEdition } from "@/lib/publishing/edition";

type Props = {
  params: Promise<{ edition: string }>;
};

export default async function PublicEditionPage({ params }: Props) {
  const { edition } = await params;
  const decoded = decodeURIComponent(edition);
  const publication = getEdition(decoded);

  if (!publication) notFound();

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-neutral-500 mb-6">
          DARK SLOTH // RELEASED EDITION
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {publication.title}
        </h1>
        <div className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">
          <p className="text-neutral-400">Collection: {publication.collection}</p>
          <p className="text-neutral-400 mt-2">Status: Published</p>
          <p className="text-neutral-400 mt-2">
            Released: {new Date(publication.metadata.publishedAt).toLocaleDateString()}
          </p>
        </div>

        <section className="border border-neutral-800 bg-neutral-950 rounded-xl p-8 mb-10">
          <h2 className="text-xl font-semibold mb-6">Source Records</h2>
          <div className="space-y-3">
            {publication.records.map((record: { id: string; title: string }) => (
              <Link
                key={record.id}
                href={`/records/${record.id}`}
                className="block border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition"
              >
                <span className="font-semibold">REC-{record.id}</span>
                <span className="block text-neutral-400 text-sm mt-1">{record.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">Released Files</h2>
          <div className="space-y-3">
            {publication.files.map((file: string) => (
              <Link
                key={file}
                href={`/api/artifacts/${encodeURIComponent(decoded)}/${encodeURIComponent(file)}`}
                target="_blank"
                className="flex items-center justify-between border border-neutral-800 rounded-lg p-4 hover:border-neutral-500 transition"
              >
                <span>{file}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">Open →</span>
              </Link>
            ))}
          </div>
        </section>

        <Link href="/studios/publishing" className="text-sm text-neutral-400 underline">
          ← Back to released editions
        </Link>
      </section>
    </main>
  );
}
