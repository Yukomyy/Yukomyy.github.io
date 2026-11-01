"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

export function AboutSection() {
  const { lang, t } = usePreferences();
  const paragraphs = PROFILE_DATA.about.paragraphs[lang];

  return (
    <section
      id="about"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left 4 Columns: Section Index & Heading */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              01 / {lang === "en" ? "OVERVIEW" : "PROFIL PROFESIONAL"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Bridging software systems & analytical clarity."
                : "Menjembatani sistem perangkat lunak & kejelasan analitik."}
            </h2>
            <p className="mt-4 text-xs font-mono text-muted leading-relaxed">
              {lang === "en"
                ? "Information Systems Discipline · Systems Thinking · Practical Engineering"
                : "Disiplin Sistem Informasi · Pemikiran Sistem · Rekayasa Praktis"}
            </p>
          </div>

          {/* Right 8 Columns: Editorial Copy & Problem-Solving Methodology */}
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-xl font-normal text-ink leading-relaxed">
              {t(PROFILE_DATA.about.lead)}
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 3-Column Engineering Methodology Strip */}
            <div className="mt-10 pt-8 border-t border-hairline">
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-5">
                {lang === "en"
                  ? "HOW I APPROACH TECHNICAL PROBLEMS"
                  : "CARA SAYA MENDEKATI MASALAH TEKNIS"}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {PROFILE_DATA.about.methodology.map((item) => (
                  <div
                    key={item.step}
                    className="border-l border-hairline pl-4"
                  >
                    <span className="font-mono text-xs text-cobalt font-semibold">
                      {item.step}
                    </span>
                    <h4 className="mt-1 text-sm font-medium text-ink">
                      {t(item.title)}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">
                      {t(item.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
