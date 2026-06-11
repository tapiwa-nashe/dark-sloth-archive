import Link from "next/link";

export default function RecoveriesPage() {
  return (
    <div className="archive-derived-page">

      <div className="page-header">

        <div className="section-label">
          RECOVERY RECORDS
        </div>

        <h1 className="page-title">
          LIVING MEMORY
        </h1>

      </div>

      <div className="books-grid">

        <div className="book-card">
          <div className="book-label">
            RR-0001
          </div>

          <h2>
            THE FIRST OBSERVATION
          </h2>

          <p>
            Example Recovery Record
          </p>
        </div>

        <div className="book-card">
          <div className="book-label">
            RR-0002
          </div>

          <h2>
            THE STEWARDSHIP RECORD
          </h2>

          <p>
            Example Recovery Record
          </p>
        </div>

        <div className="book-card">
          <div className="book-label">
            RR-0003
          </div>

          <h2>
            THE NODE RECORD
          </h2>

          <p>
            Example Recovery Record
          </p>
        </div>

      </div>

    </div>
  );
}
