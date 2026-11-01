"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TECHNICAL_NOTES } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

export function TechnicalNotesSection() {
  const { lang, t } = usePreferences();
  const [expandedId, setExpandedId] = useState<string | null>(
    TECHNICAL_NOTES[0]?.id ?? null
  );

  const toggleNote = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="notes"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 4 Columns: Section Header */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              06 /{" "}
              {lang === "en"
                ? "LEARNING & TECHNICAL NOTES"
                : "CATATAN TEKNIS & JURNAL BELAJAR"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Engineering journal & SQL experiments."
                : "Jurnal rekayasa & eksperimen SQL."}
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
              {lang === "en"
                ? "Short architectural notes, SQL patterns, and project retrospectives documenting what I learn while building software and data systems."
                : "Catatan arsitektur singkat, pola SQL, dan retrospektif proyek yang mendokumentasikan apa yang saya pelajari saat membangun sistem perangkat lunak dan data."}
            </p>
          </div>

          {/* Right 8 Columns: Collapsible Journal Entries */}
          <div className="lg:col-span-8 divide-y divide-hairline border-t border-b border-hairline">
            {TECHNICAL_NOTES.map((note) => {
              const isOpen = expandedId === note.id;
              return (
                <article key={note.id} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleNote(note.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left group focus-visible:outline-none"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-muted">
                      <div className="flex items-center gap-2.5">
                        <span className="text-cobalt font-semibold">
                          {note.index}
                        </span>
                        <span>·</span>
                        <span>{note.category}</span>
                        <span>·</span>
                        <span>{note.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{note.readingTime}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-ink" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-muted group-hover:text-ink" />
                        )}
                      </div>
                    </div>

                    <h3 className="mt-2 text-lg sm:text-xl font-medium text-ink group-hover:text-cobalt transition-colors tracking-tight">
                      {t(note.title)}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                      {t(note.summary)}
                    </p>
                  </button>

                  {isOpen && (
                    <div className="mt-5 pt-5 border-t border-hairline/70 space-y-4">
                      {note.body[lang].map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="text-sm text-ink leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}

                      <div className="bg-surface/60 border border-hairline p-4">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt font-semibold block mb-2">
                          {lang === "en" ? "Key Takeaways" : "Poin Utama"}
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-ink">
                          {note.keyTakeaways[lang].map((pt, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-mono text-cobalt">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {note.codeSnippet && (
                        <div className="border border-hairline bg-surface p-4">
                          <div className="font-mono text-[11px] text-muted pb-2 mb-2 border-b border-hairline">
                            {note.codeSnippet.caption}
                          </div>
                          <pre className="font-mono text-xs text-ink overflow-x-auto leading-relaxed">
                            <code>{note.codeSnippet.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
