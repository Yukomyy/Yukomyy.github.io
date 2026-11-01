"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

export function SkillsSection() {
  const { lang, t } = usePreferences();

  const getLevelDot = (level: "Primary" | "Working" | "Learning") => {
    if (level === "Primary") {
      return (
        <span
          className="w-1.5 h-1.5 bg-cobalt inline-block shrink-0"
          title="Primary / Core Proficiency"
        />
      );
    }
    if (level === "Working") {
      return (
        <span
          className="w-1.5 h-1.5 bg-ink/50 inline-block shrink-0"
          title="Working Knowledge"
        />
      );
    }
    return (
      <span
        className="w-1.5 h-1.5 border border-muted inline-block shrink-0"
        title="Currently Learning"
      />
    );
  };

  return (
    <section
      id="skills"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-hairline">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              04 / {lang === "en" ? "TECHNICAL SKILLS" : "KEAHLIAN TEKNIS"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Verified tools & engineering stack."
                : "Teknologi & perangkat kerja."}
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              {lang === "en"
                ? "Organized into logical engineering domains. Only technologies I have used in coursework, projects, or active study are listed."
                : "Dikelompokkan ke dalam domain rekayasa yang logis. Hanya menampilkan teknologi yang benar-benar telah saya gunakan dalam perkuliahan, proyek, atau pembelajaran aktif."}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-5 font-mono text-[11px] text-muted">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-cobalt inline-block" />
                {lang === "en" ? "Primary Stack" : "Utama"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-ink/50 inline-block" />
                {lang === "en" ? "Working Knowledge" : "Praktis"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 border border-muted inline-block" />
                {lang === "en" ? "Actively Learning" : "Sedang Dipelajari"}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Logical Pillars */}
        <div className="divide-y divide-hairline">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.id}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left 4 Columns: Group Title */}
              <div className="lg:col-span-4">
                <span className="font-mono text-xs text-cobalt font-semibold">
                  {group.index}
                </span>
                <h3 className="mt-1 text-xl font-medium text-ink tracking-tight">
                  {t(group.title)}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {t(group.description)}
                </p>
              </div>

              {/* Right 8 Columns: Subgroups Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {group.subgroups.map((sub, idx) => (
                  <div
                    key={idx}
                    className="border border-hairline bg-surface/40 p-5"
                  >
                    <h4 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold pb-2.5 mb-3 border-b border-hairline">
                      {t(sub.name)}
                    </h4>
                    <ul className="space-y-2">
                      {sub.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between text-xs sm:text-sm text-ink"
                        >
                          <span className="flex items-center gap-2.5">
                            {getLevelDot(item.level)}
                            <span>{item.name}</span>
                          </span>
                          <span className="font-mono text-[10px] uppercase text-muted">
                            {item.level}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
