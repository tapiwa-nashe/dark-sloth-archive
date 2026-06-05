import Link from "next/link";

export default function HomePage() {
  return (
    <div>

      <section className="hero">

        <div className="archive-status">
          ARCHIVE STATUS // ACTIVE
        </div>

        <h1 className="hero-title">
          NOTHING IS INVENTED.
          <br />
          ONLY RECOVERED.
        </h1>

        <p className="hero-subtitle">
          The Public Archive
        </p>

        <p className="hero-description">
          Records. Books. Artifacts. Recovery.
        </p>

      </section>

      <section className="stats-grid">

        <div className="stat-card">
          <span>RECORDS PRESERVED</span>
          <h2>010</h2>
        </div>

        <div className="stat-card">
          <span>COLLECTIONS</span>
          <h2>001</h2>
        </div>

        <div className="stat-card">
          <span>BOOKS RELEASED</span>
          <h2>002</h2>
        </div>

        <div className="stat-card">
          <span>NODE STATUS</span>
          <h2>ACTIVE</h2>
        </div>

      </section>

      <section className="collection-section">

        <h3>
          ACTIVE COLLECTION
        </h3>

        <Link
          href="/records"
          className="collection-card"
        >

          <div className="collection-label">
            FOUNDATIONAL HISTORY COLLECTION
          </div>

          <div className="collection-meta">

            <div>
              <span>STATUS</span>
              <p>COMPLETE</p>
            </div>

            <div>
              <span>RECORDS</span>
              <p>010</p>
            </div>

            <div>
              <span>CLASSIFICATION</span>
              <p>FOUNDATIONAL</p>
            </div>

            <div>
              <span>PRESERVATION</span>
              <p>PERMANENT</p>
            </div>

          </div>

          <div className="collection-enter">
            ENTER COLLECTION →
          </div>

        </Link>

      </section>

      <section className="timeline-section">

        <div className="timeline-header">
          ARCHIVE HISTORY
        </div>

        <div className="timeline">

          <Link href="/records/001" className="timeline-item">
            <span>REC-001</span>
            <h4>The Collapse of Exchange</h4>
          </Link>

          <Link href="/records/002" className="timeline-item">
            <span>REC-002</span>
            <h4>The First Archivists</h4>
          </Link>

          <Link href="/records/003" className="timeline-item">
            <span>REC-003</span>
            <h4>The Era of Fragmentation</h4>
          </Link>

          <Link href="/records/004" className="timeline-item">
            <span>REC-004</span>
            <h4>The Recovery Principle</h4>
          </Link>

          <Link href="/records/005" className="timeline-item">
            <span>REC-005</span>
            <h4>The First Stewardship Network</h4>
          </Link>

          <Link href="/records/006" className="timeline-item">
            <span>REC-006</span>
            <h4>Why Belonging Cannot Be Purchased</h4>
          </Link>

          <Link href="/records/007" className="timeline-item">
            <span>REC-007</span>
            <h4>The Appointment Tradition</h4>
          </Link>

          <Link href="/records/008" className="timeline-item">
            <span>REC-008</span>
            <h4>The Formation of the First Node</h4>
          </Link>

          <Link href="/records/009" className="timeline-item">
            <span>REC-009</span>
            <h4>The Preservation Mandate</h4>
          </Link>

          <Link href="/records/010" className="timeline-item">
            <span>REC-010</span>
            <h4>The Recovery Era</h4>
          </Link>

        </div>

      </section>

    </div>
  );
}
