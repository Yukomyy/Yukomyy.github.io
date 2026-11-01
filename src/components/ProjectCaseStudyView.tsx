"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS, type ProjectCaseStudy } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

interface ProjectCaseStudyViewProps {
  project: ProjectCaseStudy;
}

export function ProjectCaseStudyView({ project }: ProjectCaseStudyViewProps) {
  const { lang, t } = usePreferences();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar />

      <main className="flex-1">
        {/* Top Breadcrumb & Case Study Header */}
        <section className="w-full border-b border-hairline pt-10 pb-14 sm:pt-14 sm:pb-20">
          <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-hairline">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-ink transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>
                  {lang === "en"
                    ? "Back to All Projects"
                    : "Kembali ke Semua Proyek"}
                </span>
              </Link>

              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-cobalt font-semibold">
                  {project.index}
                </span>
                <span className="text-hairline">/</span>
                <span className="uppercase text-ink">{project.category}</span>
                <span className="text-hairline">/</span>
                <span className="text-muted">{project.year}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-10 items-start">
              <div className="lg:col-span-8">
                <p className="font-mono text-xs uppercase tracking-widest text-cobalt mb-3">
                  {t(project.contextLabel)}
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.1]">
                  {t(project.title)}
                </h1>
                <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                  {t(project.shortDescription)}
                </p>

                {/* Repository / Live Demo Links */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors"
                  >
                    <span>
                      {lang === "en"
                        ? "View GitHub Repository"
                        : "Lihat Repositori GitHub"}
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-ink text-ink font-mono text-xs uppercase tracking-wider hover:border-cobalt hover:text-cobalt transition-colors"
                    >
                      <span>
                        {lang === "en" ? "Live Demo / Preview" : "Demo Langsung"}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Specification Sidebar */}
              <aside className="lg:col-span-4 border border-hairline bg-surface/60 p-6 space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-ink font-semibold pb-2.5 border-b border-hairline">
                  {lang === "en"
                    ? "PROJECT SPECIFICATION"
                    : "SPESIFIKASI PROYEK"}
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">
                    {lang === "en" ? "Primary Track" : "Disiplin Utama"}
                  </span>
                  <span className="text-sm font-medium text-ink">
                    {project.category}
                    {project.secondaryCategories.length > 0 &&
                      ` · ${project.secondaryCategories.join(" · ")}`}
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block">
                    {lang === "en" ? "My Contribution" : "Peran & Kontribusi"}
                  </span>
                  <p className="mt-1 text-xs sm:text-sm text-ink leading-relaxed">
                    {t(project.myContribution)}
                  </p>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted block mb-1.5">
                    {lang === "en" ? "Technology Stack" : "Teknologi"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-canvas border border-hairline font-mono text-[11px] text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Architecture Blueprint Visual */}
        <section className="w-full border-b border-hairline py-12 sm:py-16 bg-surface/30">
          <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
            <ArchitectureDiagram type={project.diagramType} />
          </div>
        </section>

        {/* Case Study Sections 01 - 09 */}
        <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14 divide-y divide-hairline">
          {/* 01. Overview & 02. Problem Statement */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                01 / {lang === "en" ? "CONTEXT" : "KONTEKS"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Overview & Problem Statement"
                  : "Ringkasan & Pernyataan Masalah"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                  {lang === "en" ? "Project Overview" : "Ringkasan Proyek"}
                </h3>
                <p className="text-sm sm:text-base text-ink leading-relaxed">
                  {t(cs.overview)}
                </p>
              </div>
              <div className="p-5 border-l-2 border-cobalt bg-surface/50">
                <h3 className="font-mono text-xs uppercase tracking-wider text-cobalt font-semibold mb-2">
                  {lang === "en" ? "Problem Statement" : "Masalah Utama"}
                </h3>
                <p className="text-sm sm:text-base text-ink leading-relaxed">
                  {t(cs.problemStatement)}
                </p>
              </div>
            </div>
          </section>

          {/* 03. Objectives & 04. Solution */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                02 / {lang === "en" ? "DESIGN GOALS" : "SASARAN DESAIN"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Objectives & Engineering Solution"
                  : "Objektif & Solusi Rekayasa"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                  {lang === "en" ? "Key Objectives" : "Sasaran Teknis"}
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-ink">
                  {cs.objectives[lang].map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="font-mono text-xs text-cobalt font-semibold mt-1">
                        0{idx + 1}
                      </span>
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-hairline">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-2">
                  {lang === "en" ? "Solution Summary" : "Ringkasan Solusi"}
                </h3>
                <p className="text-sm sm:text-base text-ink leading-relaxed">
                  {t(cs.solution)}
                </p>
              </div>
            </div>
          </section>

          {/* 05. Architecture & Workflow + 06. Technology Stack */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                03 / {lang === "en" ? "SYSTEM DESIGN" : "ARSITEKTUR SISTEM"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Architecture, Workflow & Stack"
                  : "Arsitektur, Alur Kerja & Teknologi"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div>
                <p className="text-sm sm:text-base text-muted leading-relaxed mb-5">
                  {t(cs.architectureWorkflow.summary)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.architectureWorkflow.steps.map((st) => (
                    <div
                      key={st.stage}
                      className="border border-hairline bg-surface/40 p-4"
                    >
                      <span className="font-mono text-[11px] text-cobalt font-semibold">
                        {st.stage}
                      </span>
                      <h3 className="mt-1.5 text-sm font-medium text-ink">
                        {t(st.title)}
                      </h3>
                      <p className="mt-1.5 text-xs text-muted leading-relaxed">
                        {t(st.detail)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                  {lang === "en"
                    ? "Technology Stack Rationale"
                    : "Alasan Pemilihan Teknologi"}
                </h3>
                <div className="divide-y divide-hairline border border-hairline">
                  {cs.techStackDetailed.map((layer) => (
                    <div
                      key={layer.layer}
                      className="p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 items-start"
                    >
                      <div className="sm:col-span-4">
                        <span className="font-mono text-xs font-semibold text-ink">
                          {layer.layer}
                        </span>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {layer.items.map((it) => (
                            <span
                              key={it}
                              className="font-mono text-[11px] text-cobalt"
                            >
                              {it}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:col-span-8 text-xs sm:text-sm text-muted leading-relaxed">
                        {t(layer.rationale)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 07. Implementation */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                04 / {lang === "en" ? "IMPLEMENTATION" : "IMPLEMENTASI TEKNIS"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Selected Code & Query Logic"
                  : "Logika Kode & Kueri Utama"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-ink leading-relaxed">
                {t(cs.implementation.narrative)}
              </p>

              <div className="border border-hairline bg-surface p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline font-mono text-xs">
                  <span className="text-ink font-medium">
                    {cs.implementation.codeTitle}
                  </span>
                  <span className="uppercase text-cobalt">
                    {cs.implementation.codeLanguage}
                  </span>
                </div>
                <pre className="font-mono text-xs text-ink overflow-x-auto leading-relaxed">
                  <code>{cs.implementation.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </section>

          {/* 08. Challenges & Decisions */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                05 / {lang === "en" ? "ENGINEERING TRADE-OFFS" : "KEPUTUSAN TEKNIS"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Challenges & Architectural Decisions"
                  : "Tantangan & Pertimbangan Trade-off"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {cs.challengesAndDecisions.map((cd, idx) => (
                <div
                  key={idx}
                  className="border border-hairline bg-surface/40 p-5 space-y-3"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted block">
                      {lang === "en" ? "Technical Challenge" : "Tantangan Teknis"}
                    </span>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {t(cd.challenge)}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt block">
                      {lang === "en" ? "Engineering Decision" : "Keputusan"}
                    </span>
                    <p className="mt-1 text-sm text-ink">{t(cd.decision)}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted block">
                      {lang === "en" ? "Trade-off Accepted" : "Konsekuensi / Trade-off"}
                    </span>
                    <p className="mt-1 text-xs sm:text-sm text-muted">
                      {t(cd.tradeoff)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 09. Results & 10. What I Learned */}
          <section className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-1">
                06 / {lang === "en" ? "OUTCOMES & RETROSPECTIVE" : "HASIL & PEMBELAJARAN"}
              </span>
              <h2 className="text-xl sm:text-2xl font-medium text-ink">
                {lang === "en"
                  ? "Results & What I Learned"
                  : "Hasil Terverifikasi & Pembelajaran"}
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">
                  {lang === "en" ? "Verifiable Outcomes" : "Hasil Proyek"}
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-ink">
                  {cs.results[lang].map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono text-cobalt">✓</span>
                      <span className="leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[11px] text-muted">
                  [{t(project.outcomeVerifiedNote)}]
                </p>
              </div>

              <div className="p-5 border border-hairline bg-surface/60">
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold mb-2">
                  {lang === "en" ? "What I Learned" : "Apa yang Saya Pelajari"}
                </h3>
                <p className="text-sm sm:text-base text-ink leading-relaxed">
                  {t(cs.whatILearned)}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Next / Previous Case Study Navigation */}
        <section className="w-full border-t border-b border-hairline bg-surface/40 py-10">
          <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-5 border border-hairline bg-canvas hover:border-ink transition-colors"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted inline-flex items-center gap-1.5">
                <ArrowLeft className="w-3.5 h-3.5" />
                {lang === "en" ? "Previous Case Study" : "Studi Kasus Sebelumnya"}
              </span>
              <p className="mt-2 text-base font-medium text-ink group-hover:text-cobalt transition-colors">
                {prevProject.index}: {t(prevProject.title)}
              </p>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-5 border border-hairline bg-canvas hover:border-ink transition-colors sm:text-right"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted inline-flex items-center sm:justify-end gap-1.5">
                {lang === "en" ? "Next Case Study" : "Studi Kasus Berikutnya"}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <p className="mt-2 text-base font-medium text-ink group-hover:text-cobalt transition-colors">
                {nextProject.index}: {t(nextProject.title)}
              </p>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
