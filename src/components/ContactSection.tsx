"use client";

import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";
import { withBasePath } from "@/lib/utils";

export function ContactSection() {
  const { lang, t } = usePreferences();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback if clipboard blocked
    }
  };

  return (
    <section
      id="contact"
      className="w-full border-b border-hairline py-20 sm:py-28"
    >
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Headline & Primary CTA */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-3">
              07 / {lang === "en" ? "CONTACT & OUTREACH" : "KONTAK & DISKUSI"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-ink leading-[1.12]">
              {lang === "en"
                ? "Have an interesting opportunity or project?"
                : "Punya kesempatan magang, posisi kerja, atau proyek menarik?"}
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed max-w-xl">
              {lang === "en"
                ? "I am actively looking for internships and entry-level roles in Software Engineering, Data Analytics, Data Engineering, and Web Development. Feel free to reach out directly via email or LinkedIn."
                : "Saya sedang terbuka untuk kesempatan magang (internship) maupun posisi entry-level di bidang Software Engineering, Data Analytics, Data Engineering, dan Web Development. Silakan hubungi saya langsung melalui email atau LinkedIn."}
            </p>

            {/* Primary CTA + Copy Email */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Opportunity%20Inquiry%20—%20${encodeURIComponent(
                  PROFILE_DATA.name
                )}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-canvas font-mono text-xs sm:text-sm uppercase tracking-wider hover:bg-cobalt transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>
                  {lang === "en" ? "Send an Email" : "Kirim Email Langsung"}
                </span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3.5 border border-hairline bg-surface text-ink font-mono text-xs uppercase tracking-wider hover:border-ink transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-cobalt" />
                    <span className="text-cobalt">
                      {lang === "en" ? "Copied Address" : "Email Tersalin"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted" />
                    <span>{PROFILE_DATA.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right 5 Columns: Direct Channels & Resume Card */}
          <div className="lg:col-span-5 border border-hairline bg-surface/50 p-6 sm:p-8">
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-semibold pb-3 mb-5 border-b border-hairline">
              {lang === "en"
                ? "DIRECT CHANNELS & DOCUMENTS"
                : "SALURAN KONTAK & DOKUMEN"}
            </h3>

            <ul className="divide-y divide-hairline text-sm">
              <li className="py-3.5 first:pt-0 flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-muted">
                  Email
                </span>
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="font-medium text-ink hover:text-cobalt transition-colors"
                >
                  {PROFILE_DATA.email}
                </a>
              </li>

              <li className="py-3.5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-muted">
                  LinkedIn
                </span>
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ink hover:text-cobalt transition-colors"
                >
                  <span>{PROFILE_DATA.linkedinHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>

              <li className="py-3.5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-muted">
                  GitHub
                </span>
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-ink hover:text-cobalt transition-colors"
                >
                  <span>{PROFILE_DATA.githubHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>

              <li className="py-3.5 flex items-center justify-between">
                <span className="font-mono text-xs uppercase text-muted">
                  {lang === "en" ? "Location" : "Lokasi"}
                </span>
                <span className="text-ink text-right">
                  {t(PROFILE_DATA.location)}
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-hairline">
              <a
                href={withBasePath(PROFILE_DATA.resumePath)}
                download="Fahmi_Irfan_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 border border-ink text-ink font-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-canvas transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>
                  {lang === "en"
                    ? "Download Resume / CV (PDF)"
                    : "Unduh Resume / CV (PDF)"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
