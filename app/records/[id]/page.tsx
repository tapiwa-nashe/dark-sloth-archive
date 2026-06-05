import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { records } from "../../../lib/records";
import { getRecordContent } from "../../../lib/archive";

import { notFound } from "next/navigation";

export default async function RecordPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const recordIndex =
    records.findIndex(
      (r) => r.id === id
    );

  if (recordIndex === -1) {
    notFound();
  }

  const record =
    records[recordIndex];

  const content =
    getRecordContent(id);

  const previous =
    recordIndex > 0
      ? records[recordIndex - 1]
      : null;

  const next =
    recordIndex < records.length - 1
      ? records[recordIndex + 1]
      : null;

  return (
    <div>

      <div className="record-dossier">

        <div>
          <span>RECORD ID</span>
          <p>REC-{record.id}</p>
        </div>

        <div>
          <span>STATUS</span>
          <p>{record.status}</p>
        </div>

        <div>
          <span>CLASSIFICATION</span>
          <p>{record.classification}</p>
        </div>

        <div>
          <span>COLLECTION</span>
          <p>{record.collection}</p>
        </div>

      </div>

      <div className="record-markdown">
        <ReactMarkdown>
          {content}
        </ReactMarkdown>
      </div>

      <div className="record-navigation">

        {previous ? (
          <Link
            href={`/records/${previous.id}`}
            className="record-nav-card"
          >
            ← REC-{previous.id}
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/records/${next.id}`}
            className="record-nav-card"
          >
            REC-{next.id} →
          </Link>
        ) : (
          <div />
        )}

      </div>

    </div>
  );
}
