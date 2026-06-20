"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Stage =
  | "signal"
  | "notice"
  | "choose"
  | "record"
  | "processing"
  | "acknowledged"
  | "pathways";

const recoveryTypes = [
  "Memory",
  "Person",
  "Place",
  "Object",
  "Photograph",
  "Lesson",
  "Something Else",
];

export default function FirstRecoveryPage() {
  const [stage, setStage] = useState<Stage>("signal");
  const [selectedType, setSelectedType] = useState("");
  const [what, setWhat] = useState("");
  const [why, setWhy] = useState("");
  const [lost, setLost] = useState("");
  const [processingLine, setProcessingLine] = useState(0);

  const canSubmit = useMemo(() => {
    return selectedType && what.trim() && why.trim() && lost.trim();
  }, [selectedType, what, why, lost]);

  useEffect(() => {
    if (stage !== "processing") return;

    setProcessingLine(0);

    const timers = [
      setTimeout(() => setProcessingLine(1), 800),
      setTimeout(() => setProcessingLine(2), 1700),
      setTimeout(() => setProcessingLine(3), 2800),
      setTimeout(() => {
        try {
          localStorage.setItem(
            "dark_sloth_first_recovery",
            JSON.stringify({
              type: selectedType,
              what,
              why,
              lost,
              recoveredAt: new Date().toISOString(),
            })
          );
        } catch {}

        setStage("acknowledged");
      }, 3900),
    ];

    return () => timers.forEach(clearTimeout);
  }, [stage, selectedType, what, why, lost]);

  return (
    <main className="archive-derived-page text-neutral-200 overflow-hidden">
      <ArchiveStatus />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-6 py-16">
        {stage === "signal" && (
          <div className="max-w-2xl text-center animate-fadeIn">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-neutral-500 mb-12">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400 mr-2 animate-pulse" />
              Recovered Signal — Source Unknown
            </div>

            <div className="font-serif italic text-2xl md:text-3xl leading-loose text-neutral-300 space-y-7">
              <p>“We once believed the problem was ignorance.”</p>
              <p>“So we gathered knowledge.”</p>
              <p className="text-neutral-500 text-xl">“And when knowledge became abundant —”</p>
              <p className="text-white text-3xl">“meaning became rare.”</p>
            </div>

            <button onClick={() => setStage("notice")} className="ds-button mt-14">
              Begin Recovery
            </button>
          </div>
        )}

        {stage === "notice" && (
          <div className="max-w-xl w-full animate-fadeIn">
            <div className="inline-block border border-neutral-700 text-neutral-200 bg-black/70 rounded px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase mb-8">
              Recovery Notice // 001
            </div>

            <div className="border border-neutral-800 bg-black/70 rounded-lg p-7 md:p-9 shadow-2xl backdrop-blur-sm">
              <div className="font-mono text-sm leading-loose text-neutral-500">
                <p>Continuity risk detected.</p>
                <p>Subject: Unknown.</p>
                <p>Location: Unknown.</p>
                <br />
                <p className="text-neutral-200">The missing thing may belong to the world.</p>
                <p className="text-white">It may belong to you.</p>
              </div>

              <button onClick={() => setStage("choose")} className="ds-button mt-9">
                Open Notice
              </button>
            </div>
          </div>
        )}

        {stage === "choose" && (
          <div className="max-w-3xl w-full animate-fadeIn">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-neutral-500 mb-5">
              First Recovery Protocol
            </p>

            <h1 className="font-serif text-3xl md:text-5xl font-normal text-white mb-5">
              What would you recover if it disappeared tomorrow?
            </h1>

            <p className="text-neutral-400 max-w-xl mb-10 leading-8">
              Do not choose what looks impressive. Choose what carries meaning.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recoveryTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`text-left rounded border px-5 py-4 transition backdrop-blur-sm ${
                    selectedType === type
                      ? "border-white bg-white text-black"
                      : "border-neutral-800 bg-black/70 text-neutral-400 hover:border-neutral-500 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-xs tracking-[0.14em] uppercase">{type}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStage("record")}
              disabled={!selectedType}
              className="ds-button mt-9 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {stage === "record" && (
          <div className="max-w-2xl w-full animate-fadeIn">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-neutral-500 mb-4">
              Recovery Type: {selectedType}
            </p>

            <h1 className="font-serif text-3xl md:text-4xl font-normal text-white mb-8">
              Create your first Recovery Record.
            </h1>

            <div className="space-y-6">
              <Field
                label="What is it?"
                value={what}
                onChange={setWhat}
                placeholder="Name what you are recovering."
              />

              <Field
                label="Why does it matter?"
                value={why}
                onChange={setWhy}
                placeholder="Explain the weight it carries."
              />

              <Field
                label="What would be lost if nobody remembered it?"
                value={lost}
                onChange={setLost}
                placeholder="Describe what must not disappear."
              />
            </div>

            <button
              onClick={() => setStage("processing")}
              disabled={!canSubmit}
              className="ds-button mt-9 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Submit Recovery
            </button>
          </div>
        )}

        {stage === "processing" && (
          <div className="max-w-xl w-full animate-fadeIn font-mono text-sm leading-loose">
            <p className={processingLine >= 1 ? "text-neutral-400" : "text-neutral-800"}>
              Processing Recovery...
            </p>
            <p className={processingLine >= 2 ? "text-neutral-400" : "text-neutral-800"}>
              Evaluating continuity value...
            </p>
            <p className={processingLine >= 3 ? "text-white" : "text-neutral-800"}>
              Recovery acknowledged.
            </p>
          </div>
        )}

        {stage === "acknowledged" && (
          <div className="max-w-2xl text-center animate-fadeIn">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-neutral-400 mb-8">
              Recovery Acknowledged
            </p>

            <h1 className="font-serif text-4xl md:text-6xl font-normal text-white mb-8">
              Welcome, Seeker.
            </h1>

            <div className="font-serif italic text-xl md:text-2xl leading-loose text-neutral-300 mb-10">
              <p>Nothing is invented.</p>
              <p>Only recovered.</p>
            </div>

            <div className="border border-neutral-800 bg-black/70 rounded-lg p-6 text-left mb-10 backdrop-blur-sm">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-3">
                First Recovery Record
              </p>
              <p className="text-white font-serif text-xl mb-2">{what}</p>
              <p className="text-neutral-400 text-sm leading-7">{why}</p>
            </div>

            <button onClick={() => setStage("pathways")} className="ds-button">
              Continue
            </button>
          </div>
        )}

        {stage === "pathways" && (
          <div className="max-w-4xl w-full animate-fadeIn">
            <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-neutral-500 mb-5">
              The Chain Continues
            </p>

            <h1 className="font-serif text-3xl md:text-5xl font-normal text-white mb-5">
              Choose your next path.
            </h1>

            <p className="text-neutral-400 max-w-xl mb-10 leading-8">
              Your first recovery has been acknowledged. The Archive is now open.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PathCard
                href="/"
                title="Enter the Archive"
                text="Return to the public Archive and continue exploring."
              />

              <PathCard
                href="/books"
                title="Read the Codex"
                text="Begin with the books that reveal the system in layers."
              />

              <PathCard
                href="/first-recovery"
                title="Recover Again"
                text="Repeat the protocol with another memory, object, place, or lesson."
              />
            </div>
          </div>
        )}
      </section>

      <style jsx global>{`
        .ds-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #777;
          background: rgba(0, 0, 0, 0.72);
          color: #f5f5f5;
          border-radius: 4px;
          padding: 13px 28px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
          backdrop-filter: blur(6px);
        }

        .ds-button:hover:not(:disabled) {
          border-color: #fff;
          background: #fff;
          color: #000;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease both;
        }
      `}</style>
    </main>
  );
}

function ArchiveStatus() {
  return (
    <div className="fixed top-6 left-6 z-20 hidden md:block font-mono text-[9px] tracking-[0.18em] uppercase text-neutral-700 leading-5">
      <div>// ARCHIVE NODE</div>
      <div>NODE STATUS: ACTIVE</div>
      <div>PROTOCOL: PRESERVE</div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] tracking-[0.18em] uppercase text-neutral-500 mb-2">
        {label}
      </span>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded border border-neutral-800 bg-black/70 px-4 py-3 text-neutral-200 placeholder:text-neutral-700 outline-none focus:border-white leading-7 backdrop-blur-sm"
      />
    </label>
  );
}

function PathCard({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded border border-neutral-800 bg-black/70 p-5 hover:border-white transition backdrop-blur-sm"
    >
      <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-white mb-3">
        {title}
      </p>
      <p className="text-sm leading-7 text-neutral-400">{text}</p>
    </Link>
  );
}
