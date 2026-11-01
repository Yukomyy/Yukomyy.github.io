"use client";

import React from "react";
import { TIMELINE_ENTRIES } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

export function ExperienceSection() {
  const { lang, t } = usePreferences();

  return (
    <section
      id="experience"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 4 Columns: Section Header */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              05 /{" "}
              {lang === "en"
                ? "EXPERIENCE & EDUCATION"
                : "PENDIDIKAN & PENGALAMAN"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Academic foundation & technical activities."
                : "Fondasi akademik & aktivitas teknis."}
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-muted leading-relaxed">
              {lang === "en"
                ? "Presented transparently as an early-career Information Systems candidate: university education, independent engineering deliverables, and campus organizational involvement."
                : "Disajikan secara transparan sebagai kandidat awal karier di bidang Sistem Informasi: pendidikan universitas, hasil proyek rekayasa mandiri, dan keterlibatan organisasi kampus."}
            </p>
          </div>

          {/* Right 8 Columns: Editorial Timeline */}
          <div className="lg:col-span-8 divide-y divide-hairline border-t lg:border-t-0 border-hairline">
            {TIMELINE_ENTRIES.map((item) => (
              <div
                key={item.id}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6"
              >
                {/* Date & Category Column */}
                <div className="sm:col-span-4">
                  <span className="inline-block px-2 py-0.5 bg-surface border border-hairline font-mono text-[10px] uppercase tracking-wider text-cobalt font-medium">
                    {t(item.typeLabel)}
                  </span>
                  <p className="mt-2 font-mono text-xs text-ink font-medium">
                    {t(item.period)}
                  </p>
                  <p className="font-mono text-[11px] text-muted mt-0.5">
                    {item.location}
                  </p>
                </div>

                {/* Details Column */}
                <div className="sm:col-span-8">
                  <h3 className="text-lg font-medium text-ink tracking-tight">
                    {t(item.roleOrDegree)}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-mono text-muted">
                    {t(item.organization)}
                  </p>
                  <p className="mt-3 text-sm text-ink leading-relaxed">
                    {t(item.description)}
                  </p>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-muted">
                    {item.highlights[lang].map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-cobalt text-xs mt-0.5">
                          —
                        </span>
                        <span className="leading-relaxed">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {item.isPlaceholderNote && (
                    <p className="mt-4 px-3 py-2 bg-surface border-l-2 border-cobalt font-mono text-[11px] text-muted">
                      {t(item.isPlaceholderNote)}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
