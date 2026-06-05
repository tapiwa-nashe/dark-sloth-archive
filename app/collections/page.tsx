import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div>

      <div className="archive-header">
        <span>ARCHIVE INDEX</span>

        <h1>COLLECTIONS</h1>

        <p>
          Collections organize the public memory of the Archive.
        </p>
      </div>

      <div className="record-list">

        <Link
          href="/collections/foundational-history"
          className="record-card"
        >
          <span>COLLECTION-001</span>

          <h3>
            FOUNDATIONAL HISTORY COLLECTION
          </h3>

          <p>
            10 VERIFIED RECORDS
          </p>
        </Link>

      </div>

    </div>
  );
}
