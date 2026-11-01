"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolio";
import { usePreferences } from "@/context/PreferencesContext";
import { withBasePath } from "@/lib/utils";

export function Navbar() {
  const { lang, toggleLang, theme, toggleTheme } = usePreferences();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/#home", label: lang === "en" ? "Home" : "Beranda" },
    { href: "/#about", label: lang === "en" ? "About" : "Tentang" },
    { href: "/#focus", label: lang === "en" ? "Focus" : "Fokus" },
    { href: "/#projects", label: lang === "en" ? "Projects" : "Proyek" },
    { href: "/#skills", label: lang === "en" ? "Skills" : "Keahlian" },
    { href: "/#experience", label: lang === "en" ? "Experience" : "Pengalaman" },
    { href: "/#notes", label: lang === "en" ? "Notes" : "Catatan" },
    { href: "/#contact", label: lang === "en" ? "Contact" : "Kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-sm border-b border-hairline transition-colors duration-150">
      <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14 h-16 flex items-center justify-between">
        {/* Left: Personal Name & Initials */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink focus-visible:outline-none"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 border border-ink bg-ink text-canvas font-mono text-xs font-semibold tracking-tight group-hover:bg-cobalt group-hover:border-cobalt transition-colors">
            {PROFILE_DATA.initials}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-tight leading-none">
              {PROFILE_DATA.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted mt-1 hidden sm:inline">
              SE · DA · DE · DS · WEB
            </span>
          </div>
        </Link>

        {/* Right: Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted hover:text-ink transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Controls: Language, Theme, Resume Download */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="px-2 py-1 border border-hairline font-mono text-[11px] uppercase tracking-wider text-muted hover:text-ink hover:border-ink transition-colors"
            title={
              lang === "en"
                ? "Switch language to Bahasa Indonesia"
                : "Ganti bahasa ke Bahasa Inggris"
            }
            aria-label="Toggle language between English and Indonesian"
          >
            <span className={lang === "en" ? "text-ink font-semibold" : ""}>
              EN
            </span>
            <span className="mx-1 text-hairline">/</span>
            <span className={lang === "id" ? "text-ink font-semibold" : ""}>
              ID
            </span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 border border-hairline text-muted hover:text-ink hover:border-ink transition-colors"
            title={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            aria-label="Toggle color theme"
          >
            {theme === "light" ? (
              <Moon className="w-3.5 h-3.5" />
            ) : (
              <Sun className="w-3.5 h-3.5" />
            )}
          </button>

          <a
            href={withBasePath(PROFILE_DATA.resumePath)}
            download="Fahmi_Irfan_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-ink bg-ink text-canvas font-mono text-[11px] uppercase tracking-wider hover:bg-cobalt hover:border-cobalt transition-colors"
          >
            <span>{lang === "en" ? "Resume PDF" : "Unduh CV"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            className="px-2 py-1 border border-hairline font-mono text-[11px] uppercase text-muted md:hidden"
            aria-label="Switch language"
          >
            {lang.toUpperCase()}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="p-1.5 border border-hairline text-muted md:hidden"
            aria-label="Toggle color theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" />
            ) : (
              <Sun className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 border border-hairline text-ink hover:border-ink transition-colors"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-hairline bg-canvas px-6 sm:px-10 py-6">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1.5 text-sm font-medium text-ink hover:text-cobalt border-b border-hairline/60 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-muted">→</span>
              </Link>
            ))}
            <div className="pt-3 flex items-center justify-between gap-4">
              <a
                href={withBasePath(PROFILE_DATA.resumePath)}
                download="Fahmi_Irfan_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors"
              >
                <span>
                  {lang === "en" ? "Download Resume (PDF)" : "Unduh Resume (PDF)"}
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
