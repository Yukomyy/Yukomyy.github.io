"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";
import { withBasePath } from "@/lib/utils";

export function Hero() {
  const { lang, t } = usePreferences();

  return (
    <section
      id="home"
      className="w-full border-b border-hairline pt-12 pb-16 sm:pt-20 sm:pb-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        {/* Top Metadata Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-8 border-b border-hairline">
          <div className="md:col-span-4 flex items-center gap-2.5">
            <span
              className="w-2 h-2 bg-cobalt inline-block shrink-0"
              aria-hidden="true"
            />
            <span className="font-mono text-xs uppercase tracking-wider text-ink font-medium">
              {PROFILE_DATA.name}
            </span>
          </div>
          <div className="md:col-span-5 font-mono text-xs text-muted">
            {t(PROFILE_DATA.roleTitle)}
          </div>
          <div className="md:col-span-3 md:text-right font-mono text-xs text-muted">
            {t(PROFILE_DATA.location)}
          </div>
        </div>

        {/* Main Hero Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 sm:pt-14 items-start">
          {/* Left 8 Columns: Display Typography & Positioning */}
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-cobalt mb-4">
              {lang === "en"
                ? "00 / SOFTWARE & DATA ENGINEERING PORTFOLIO"
                : "00 / PORTOFOLIO REKAYASA PERANGKAT LUNAK & DATA"}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-ink leading-[1.08]">
              {t(PROFILE_DATA.heroHeadline)}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              {t(PROFILE_DATA.heroSupporting)}
            </p>

            {/* Current Professional Status Banner */}
            <div className="mt-7 inline-flex items-center gap-3 px-3.5 py-2 bg-surface border border-hairline">
              <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt font-semibold">
                {lang === "en" ? "STATUS" : "STATUS"}
              </span>
              <span className="h-3 w-[1px] bg-hairline" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-ink">
                {t(PROFILE_DATA.status)}
              </span>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas text-xs sm:text-sm font-mono uppercase tracking-wider hover:bg-cobalt transition-colors"
              >
                <span>
                  {lang === "en" ? "View Projects (06)" : "Lihat Proyek (06)"}
                </span>
                <ArrowDownRight className="w-4 h-4" />
              </Link>

              <a
                href={withBasePath(PROFILE_DATA.resumePath)}
                download="Fahmi_Irfan_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 border border-ink text-ink text-xs sm:text-sm font-mono uppercase tracking-wider hover:border-cobalt hover:text-cobalt transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {lang === "en" ? "Download Resume" : "Unduh Resume"}
                </span>
              </a>

              <div className="flex items-center gap-4 pl-1 sm:pl-3">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted hover:text-cobalt transition-colors py-2"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-muted hover:text-cobalt transition-colors py-2"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: HRD Quick-Reference Specification Box */}
          <aside
            aria-label="Candidate Summary for Recruiters"
            className="lg:col-span-4 border border-hairline bg-surface/60 p-6"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-hairline">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink font-semibold">
                {lang === "en"
                  ? "CANDIDATE SPECIFICATION"
                  : "RINGKASAN KANDIDAT (HRD)"}
              </span>
              <span className="font-mono text-[11px] text-cobalt">INDEX</span>
            </div>

            <dl className="space-y-4">
              {PROFILE_DATA.hrdQuickFacts.map((fact, idx) => (
                <div
                  key={idx}
                  className="pb-3.5 border-b border-hairline last:border-b-0 last:pb-0"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                    {t(fact.label)}
                  </dt>
                  <dd className="mt-1 text-xs sm:text-sm font-medium text-ink leading-snug">
                    {t(fact.value)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between font-mono text-[11px]">
              <span className="text-muted">
                {lang === "en" ? "Direct Contact:" : "Kontak Langsung:"}
              </span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-cobalt hover:underline"
              >
                {PROFILE_DATA.email}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
