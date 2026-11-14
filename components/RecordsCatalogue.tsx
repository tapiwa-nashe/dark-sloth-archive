"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type RecordEntry = {
  id: string;
  title: string;
  classification: string;
  collection: string;
  recovered: string;
  status: string;
};

type CollectionEntry = {
  title: string;
  href: string;
  recordCollection: string;
};

export default function RecordsCatalogue({
  records,
  collections,
}: {
  records: RecordEntry[];
  collections: readonly CollectionEntry[];
}) {
  const [query, setQuery] = useState("");
  const [classification, setClassification] = useState("ALL");
  const [collection, setCollection] = useState("ALL");

  const classifications = useMemo(
    () => [...new Set(records.map((record) => record.classification))].sort(),
    [records],
  );

  const filteredRecords = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    return records.filter((record) => {
      const matchesQuery =
        !term ||
        [record.id, record.title, record.classification, record.collection, record.recovered]
          .some((value) => value.toLocaleLowerCase().includes(term));
      const matchesClassification =
        classification === "ALL" || record.classification === classification;
      const matchesCollection =
        collection === "ALL" || record.collection === collection;
      return matchesQuery && matchesClassification && matchesCollection;
    });
  }, [records, query, classification, collection]);

  const activeFilters = query.trim() !== "" || classification !== "ALL" || collection !== "ALL";

  function clearFilters() {
    setQuery("");
    setClassification("ALL");
    setCollection("ALL");
  }

  return (
    <div>
      <section className="records-controls" aria-label="Search and filter records">
        <label className="records-search">
          <span>SEARCH THE CATALOGUE</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by title, record ID, classification or source…"
          />
        </label>
        <label className="records-filter">
          <span>CLASSIFICATION</span>
          <select value={classification} onChange={(event) => setClassification(event.target.value)}>
            <option value="ALL">All classifications</option>
            {classifications.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="records-filter">
          <span>COLLECTION</span>
          <select value={collection} onChange={(event) => setCollection(event.target.value)}>
            <option value="ALL">All collections</option>
            {collections.map((item) => (
              <option key={item.recordCollection} value={item.recordCollection}>{item.title}</option>
            ))}
          </select>
        </label>
      </section>

      <div className="records-results-bar" aria-live="polite">
        <p>{filteredRecords.length} OF {records.length} RECORDS</p>
        {activeFilters && <button type="button" onClick={clearFilters}>CLEAR FILTERS ×</button>}
      </div>

      {filteredRecords.length > 0 ? (
        <section className="record-list" aria-label="Archive records">
          {filteredRecords.map((record) => {
            const parentCollection = collections.find(
              (item) => item.recordCollection === record.collection,
            );
            return (
              <article className="record-card" key={record.id}>
                <Link href={`/records/${record.id}`} className="record-card-main">
                  <div className="record-card-topline">
                    <span>REC-{record.id}</span>
                    <span>{record.status}</span>
                  </div>
                  <h2>{record.title}</h2>
                  <p className="record-card-classification">{record.classification}</p>
                  <p className="record-card-collection">{record.collection}</p>
                </Link>
                {parentCollection && (
                  <Link className="record-card-collection-link" href={parentCollection.href}>
                    VIEW COLLECTION <span aria-hidden="true">↗</span>
                  </Link>
                )}
              </article>
            );
          })}
        </section>
      ) : (
        <div className="records-empty-state">
          <p className="records-empty-kicker">NO MATCHING RECORDS</p>
          <h2>The catalogue returned no entries for this search.</h2>
          <p>Try another title, identifier or filter. The catalogue only displays indexed public records.</p>
          <button type="button" onClick={clearFilters}>RESET SEARCH</button>
        </div>
      )}
    </div>
  );
}
