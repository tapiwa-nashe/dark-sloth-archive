import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { records } from "../../../lib/records";
import { getRecordContent } from "../../../lib/archive";

import { notFound } from "next/navigation";

function getCollectionNumber(id: string) {
  const number = Number(id);

  if (number <= 10) return "COLLECTION_001";
  if (number <= 15) return "COLLECTION_002";
  if (number <= 20) return "COLLECTION_003";
  if (number <= 26) return "COLLECTION_004";
  if (number <= 36) return "COLLECTION_005";
  if (number <= 39) return "COLLECTION_007";
  if (number <= 45) return "COLLECTION_004";

  return "ARCHIVE COLLECTION";
}

export default async function RecordPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const recordIndex = records.findIndex((r) => r.id === id);

  if (recordIndex === -1) {
    notFound();
  }

  const record = records[recordIndex];

  const { data, content } = getRecordContent(id);

  const previous =
    recordIndex > 0 ? records[recordIndex - 1] : null;

  const next =
    recordIndex < records.length - 1
      ? records[recordIndex + 1]
      : null;

  return (
    <div>
      <div className="mb-10">
        <p className="mb-4 text-xs tracking-[0.4em] text-zinc-500">
          {getCollectionNumber(record.id)}
        </p>

        <p className="mb-8 text-sm tracking-[0.3em] text-zinc-500">
          {record.collection}
        </p>

        <h1 className="record-title">
          {data.title || record.title}
        </h1>
      </div>

      <div className="record-dossier">
        <div>
          <span>RECORD ID</span>
          <p>{data.id || `REC-${record.id}`}</p>
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
          <p>{data.collection || record.collection}</p>
        </div>
      </div>

      <hr className="my-12 border-zinc-800" />

      <div className="record-markdown">
        <ReactMarkdown>{content}</ReactMarkdown>
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
