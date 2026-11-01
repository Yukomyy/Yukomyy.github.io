"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FOCUS_AREAS, PROJECTS, type ProficiencyLevel } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

function getProficiencyStyle(level: ProficiencyLevel) {
  switch (level) {
    case "Primary Focus":
      return "border-cobalt text-cobalt bg-surface";
    case "Working Knowledge":
      return "border-ink/40 text-ink bg-surface/50";
    case "Currently Learning":
      return "border-hairline text-muted bg-transparent";
  }
}

export function FocusAreasSection() {
  const { lang, t } = usePreferences();

  return (
    <section
      id="focus"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-hairline">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              02 / {lang === "en" ? "TECHNICAL FOCUS AREAS" : "AREA FOKUS TEKNIS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Five interconnected tracks."
                : "Lima disiplin yang saling terhubung."}
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              {lang === "en"
                ? "Rather than claiming expert mastery across every domain, each focus area below states my honest current proficiency tier, specific engineering capabilities, and verifiable portfolio projects."
                : "Alih-alih mengklaim penguasaan ahli di setiap bidang, setiap area fokus di bawah ini mencantumkan tingkat kemahiran saya secara jujur, kapabilitas spesifik, dan proyek portofolio yang dapat diverifikasi."}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[11px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-cobalt inline-block" />
                {lang === "en" ? "Primary Focus" : "Fokus Utama"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-ink/60 inline-block" />
                {lang === "en" ? "Working Knowledge" : "Pengetahuan Praktis"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 border border-muted inline-block" />
                {lang === "en" ? "Currently Learning" : "Sedang Mendalami"}
              </span>
            </div>
          </div>
        </div>

        {/* 01 - 05 Editorial List */}
        <div className="divide-y divide-hairline">
          {FOCUS_AREAS.map((area) => {
            const relatedProjects = PROJECTS.filter((p) =>
              area.relatedProjectSlugs.includes(p.slug)
            );
            return (
              <div
                key={area.number}
                className="py-9 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
              >
                {/* Col 1-4: Index, Title & Honest Skill Level */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-cobalt font-semibold">
                      {area.number} —
                    </span>
                    <span
                      className={`px-2 py-0.5 border font-mono text-[10px] uppercase tracking-wider ${getProficiencyStyle(
                        area.proficiency
                      )}`}
                    >
                      {t(area.proficiencyLabel)}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-xl font-medium text-ink tracking-tight">
                    {t(area.title)}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                    {t(area.summary)}
                  </p>
                </div>

                {/* Col 5-8: Specific Capabilities */}
                <div className="lg:col-span-5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-2.5">
                    {lang === "en"
                      ? "Specific Capabilities"
                      : "Kapabilitas Spesifik"}
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-ink">
                    {area.capabilities[lang].map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="font-mono text-cobalt text-xs mt-0.5">
                          +
                        </span>
                        <span className="leading-relaxed">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 9-12: Relevant Technologies & Related Projects */}
                <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted block mb-2">
                      {lang === "en" ? "Core Stack" : "Teknologi Relevan"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {area.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-surface border border-hairline font-mono text-[11px] text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {relatedProjects.length > 0 && (
                    <div className="pt-2 border-t border-hairline/70">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-1.5">
                        {lang === "en" ? "Related Evidence" : "Bukti Proyek"}
                      </span>
                      <div className="space-y-1">
                        {relatedProjects.map((proj) => (
                          <Link
                            key={proj.slug}
                            href={`/projects/${proj.slug}`}
                            className="group flex items-center justify-between text-xs font-medium text-ink hover:text-cobalt transition-colors py-0.5"
                          >
                            <span className="truncate pr-2">
                              {proj.index}: {t(proj.title)}
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 shrink-0 text-muted group-hover:text-cobalt" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
