"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";

export function Footer() {
  const { lang } = usePreferences();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-canvas py-10">
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-muted">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-ink font-medium">{PROFILE_DATA.name}</span>
          <span>—</span>
          <span>© {currentYear}</span>
          <span className="hidden md:inline">
            ·{" "}
            {lang === "en"
              ? "Information Systems & Software Engineering Portfolio"
              : "Portofolio Sistem Informasi & Rekayasa Perangkat Lunak"}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="hover:text-ink transition-colors"
          >
            Email
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1 text-ink hover:text-cobalt transition-colors"
          >
            <span>{lang === "en" ? "Back to top" : "Ke atas"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
