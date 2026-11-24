"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import QRCode from "qrcode";

type GeneratedQr = {
  dataUrl: string;
  url: string;
  downloadable: boolean;
};

export default function RecordQrCard({ recordId, title }: { recordId: string; title: string }) {
  const [generatedQr, setGeneratedQr] = useState<GeneratedQr | null>(null);

  useEffect(() => {
    let cancelled = false;
    const configuredCanonical = process.env.NEXT_PUBLIC_ARCHIVE_CANONICAL_URL;
    let canonicalOrigin = "";

    if (configuredCanonical) {
      try {
        const canonical = new URL(configuredCanonical);
        if (canonical.protocol === "https:") canonicalOrigin = canonical.origin;
      } catch {
        canonicalOrigin = "";
      }
    }

    const downloadable = Boolean(canonicalOrigin && window.location.origin === canonicalOrigin);
    const base = downloadable ? canonicalOrigin : window.location.origin;
    const url = `${base}/r/REC-${recordId}`;

    QRCode.toDataURL(url, {
      errorCorrectionLevel: "H",
      margin: 2,
      width: 360,
      color: { dark: "#111111", light: "#ffffff" },
    }).then((dataUrl) => {
      if (!cancelled) setGeneratedQr({ dataUrl, url, downloadable });
    }).catch(() => {
      if (!cancelled) setGeneratedQr(null);
    });

    return () => {
      cancelled = true;
    };
  }, [recordId]);

  return (
    <section className="record-qr-card" aria-labelledby="record-qr-title">
      <div className="record-qr-copy">
        <p className="record-feature-kicker">PERMANENT RECORD ADDRESS</p>
        <h2 id="record-qr-title">Carry this record with you.</h2>
        <p>Scan to open this record in the public Archive. The address resolves through its canonical record identifier.</p>
        <code>{`/r/REC-${recordId}`}</code>
        {generatedQr && <a className="record-qr-url" href={generatedQr.url}>{generatedQr.url}</a>}
        {generatedQr?.downloadable ? <a className="record-qr-download" href={generatedQr.dataUrl} download={`dark-sloth-archive-REC-${recordId}-qr.png`}>Download record QR <span aria-hidden="true">↗</span></a> : <small className="record-qr-preview-note">QR downloads are enabled only on the configured canonical HTTPS Archive domain. Preview codes are not for printing.</small>}
      </div>
      <div className="record-qr-image">
        {generatedQr ? <Image src={generatedQr.dataUrl} alt={`QR code linking to Archive record REC-${recordId}: ${title}`} width={180} height={180} unoptimized /> : <span>Preparing QR code…</span>}
        <small>REC-{recordId} / PUBLIC ARCHIVE</small>
      </div>
    </section>
  );
}
