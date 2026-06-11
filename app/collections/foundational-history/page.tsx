import Link from "next/link";
import { records } from "../../../lib/records";

const collectionRecords = records.filter((record) => {
  const id = Number(record.id);
  return id >= 1 && id <= 10;
});

export default function FoundationalHistoryPage() {
  return (
    <div>

      <div className="archive-header">

        <span>
          COLLECTION-001
        </span>

        <h1>
          FOUNDATIONAL HISTORY COLLECTION
        </h1>

        <p>
          The first ten public records of the Archive.
        </p>

      </div>

      <div className="record-list">

        {collectionRecords.map((record) => (
          <Link
            key={record.id}
            href={`/records/${record.id}`}
            className="record-card"
          >
            <span>
              REC-{record.id}
            </span>

            <h3>
              {record.title}
            </h3>

            <p>
              {record.classification}
            </p>
          </Link>
        ))}

      </div>

    </div>
  );
}
