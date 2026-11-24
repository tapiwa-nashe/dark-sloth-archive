import fs from "node:fs";

const booksPath = "app/books/page.tsx";
const books = fs.readFileSync(booksPath, "utf8");
const marker = `        <BookSeries
          title="The Archive Documents"
          subtitle="Constitutional, operational, guardian, archivist, record, and dossier frameworks of the Archive."
          books={archiveDocuments}
        />
`;
if (!books.includes(marker)) throw new Error("Books catalogue insertion point not found.");
if (!books.includes('href="/developmental-pdfs"')) {
  const addition = marker + `
        <section className="mb-20 rounded-lg border border-neutral-800 bg-black/70 p-7">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-500">
            Institutional Records / Developmental PDFs
          </p>
          <h2 className="mb-3 text-2xl font-semibold">Developmental PDFs</h2>
          <p className="mb-5 max-w-3xl text-sm leading-7 text-neutral-400">
            Canonical outlines, research frameworks and institutional working documents
            preserved with their approval status, provenance and LKR references.
          </p>
          <Link
            href="/developmental-pdfs"
            className="inline-flex border border-neutral-600 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] transition hover:bg-white hover:text-black"
          >
            Browse developmental PDFs →
          </Link>
        </section>
`;
  fs.writeFileSync(booksPath, books.replace(marker, addition));
}

const sitemapPath = "app/sitemap.ts";
let sitemap = fs.readFileSync(sitemapPath, "utf8");
if (!sitemap.includes('"/developmental-pdfs"')) {
  sitemap = sitemap.replace('    "/books",\n', '    "/books",\n    "/developmental-pdfs",\n');
  fs.writeFileSync(sitemapPath, sitemap);
}
console.log("Developmental PDFs catalogue link and sitemap route updated.");
