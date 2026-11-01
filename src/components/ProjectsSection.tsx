"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  PROJECTS,
  type FocusCategory,
} from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

const FILTER_CATEGORIES: Array<"All Projects" | FocusCategory> = [
  "All Projects",
  "Software Engineering",
  "Data Analytics",
  "Data Engineering",
  "Data Science",
  "Web Development",
];

export function ProjectsSection() {
  const { lang, t } = usePreferences();
  const [selectedFilter, setSelectedFilter] = useState<
    "All Projects" | FocusCategory
  >("All Projects");

  const filteredProjects =
    selectedFilter === "All Projects"
      ? PROJECTS
      : PROJECTS.filter(
          (project) =>
            project.category === selectedFilter ||
            project.secondaryCategories.includes(selectedFilter)
        );

  const getFilterLabel = (cat: "All Projects" | FocusCategory) => {
    if (cat === "All Projects") {
      return lang === "en" ? "All Projects" : "Semua Proyek";
    }
    return cat;
  };

  const getCategoryCount = (cat: "All Projects" | FocusCategory) => {
    if (cat === "All Projects") return PROJECTS.length;
    return PROJECTS.filter(
      (p) => p.category === cat || p.secondaryCategories.includes(cat)
    ).length;
  };

  return (
    <section
      id="projects"
      className="w-full border-b border-hairline py-16 sm:py-24"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-hairline">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-2">
              03 / {lang === "en" ? "SELECTED WORKS & CASE STUDIES" : "PROYEK UNGGULAN & STUDI KASUS"}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-ink">
              {lang === "en"
                ? "Featured Engineering & Data Projects"
                : "Proyek Rekayasa Perangkat Lunak & Data"}
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {lang === "en"
                ? "Each project below documents the operational problem, my exact engineering contribution, system architecture, SQL/code implementation, and honest outcomes. Select any project to read the complete case study."
                : "Setiap proyek di bawah ini mendokumentasikan permasalahan operasional, kontribusi teknis saya, arsitektur sistem, implementasi SQL/kode, serta hasil yang terverifikasi. Pilih proyek untuk membaca studi kasus lengkap."}
            </p>
          </div>
        </div>

        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="Filter projects by discipline"
          className="py-6 border-b border-hairline flex flex-wrap items-center gap-2"
        >
          {FILTER_CATEGORIES.map((category) => {
            const isActive = selectedFilter === category;
            const count = getCategoryCount(category);
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setSelectedFilter(category)}
                className={`px-3.5 py-2 border font-mono text-xs transition-colors flex items-center gap-2 ${
                  isActive
                    ? "border-ink bg-ink text-canvas font-medium"
                    : "border-hairline bg-canvas text-muted hover:text-ink hover:border-ink"
                }`}
              >
                <span>{getFilterLabel(category)}</span>
                <span
                  className={`text-[10px] ${
                    isActive ? "text-canvas/80" : "text-muted"
                  }`}
                >
                  [{count}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Showcase List */}
        <div className="divide-y divide-hairline">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
            >
              {/* Left 5 Columns: Metadata, Problem, Contribution, Outcome & CTAs */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  {/* Index + Category Row */}
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-cobalt font-semibold">
                      {project.index}
                    </span>
                    <span className="text-hairline">/</span>
                    <span className="uppercase tracking-wider text-ink font-medium">
                      {project.category}
                    </span>
                    {project.secondaryCategories.map((sec) => (
                      <span
                        key={sec}
                        className="text-[11px] text-muted before:content-['·_']"
                      >
                        {sec}
                      </span>
                    ))}
                    <span className="ml-auto text-muted">{project.year}</span>
                  </div>

                  {/* Context tag */}
                  <p className="mt-2 font-mono text-[11px] text-muted">
                    {t(project.contextLabel)}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-xl sm:text-2xl font-medium tracking-tight text-ink leading-snug">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-cobalt transition-colors"
                    >
                      {t(project.title)}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                    {t(project.shortDescription)}
                  </p>

                  {/* Structured Problem / Contribution / Outcome Box */}
                  <dl className="mt-6 space-y-4 border-t border-b border-hairline py-4 text-xs sm:text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {lang === "en"
                          ? "Problem Solved"
                          : "Masalah yang Diselesaikan"}
                      </dt>
                      <dd className="mt-1 text-ink leading-relaxed">
                        {t(project.problemSummary)}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {lang === "en"
                          ? "My Contribution"
                          : "Kontribusi Saya"}
                      </dt>
                      <dd className="mt-1 text-ink leading-relaxed">
                        {t(project.myContribution)}
                      </dd>
                    </div>

                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">
                        {lang === "en"
                          ? "Outcome & Verification"
                          : "Hasil & Verifikasi"}
                      </dt>
                      <dd className="mt-1 text-ink leading-relaxed">
                        {t(project.outcomeSummary)}
                        <span className="block mt-1 font-mono text-[11px] text-muted">
                          [{t(project.outcomeVerifiedNote)}]
                        </span>
                      </dd>
                    </div>
                  </dl>

                  {/* Technologies Used */}
                  <div className="mt-5">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-2">
                      {lang === "en"
                        ? "Technologies Used"
                        : "Teknologi yang Digunakan"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-surface border border-hairline font-mono text-[11px] text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Links: Case Study, GitHub, Live Demo */}
                <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors"
                  >
                    <span>
                      {lang === "en"
                        ? "Read Case Study"
                        : "Baca Studi Kasus"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-hairline text-ink font-mono text-xs uppercase tracking-wider hover:border-ink transition-colors"
                  >
                    <span>GitHub Repo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-muted hover:text-cobalt transition-colors"
                    >
                      <span>{lang === "en" ? "Live Preview" : "Demo"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right 7 Columns: Technical Architecture Blueprint + Code Preview */}
              <div className="lg:col-span-7 space-y-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="block group focus-visible:outline-none"
                  aria-label={`View full architecture and case study for ${t(
                    project.title
                  )}`}
                >
                  <div className="transition-transform duration-150 group-hover:border-ink">
                    <ArchitectureDiagram
                      type={project.diagramType}
                      compact={true}
                    />
                  </div>
                </Link>

                {/* Selected Implementation Excerpt */}
                <div className="border border-hairline bg-surface/50 p-4 sm:p-5">
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-hairline font-mono text-[11px] text-muted">
                    <span>
                      {lang === "en" ? "IMPLEMENTATION EXCERPT:" : "CUPLIKAN IMPLEMENTASI:"}{" "}
                      <strong className="text-ink font-normal">
                        {project.caseStudy.implementation.codeTitle}
                      </strong>
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-cobalt hover:underline"
                    >
                      {lang === "en" ? "Full Walkthrough →" : "Selengkapnya →"}
                    </Link>
                  </div>
                  <pre className="font-mono text-[11px] sm:text-xs text-ink overflow-x-auto leading-relaxed max-h-44">
                    <code>
                      {project.caseStudy.implementation.codeSnippet
                        .split("\n")
                        .slice(0, 12)
                        .join("\n")}
                      {"\n// ..."}
                    </code>
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
