"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { BilingualText, Language } from "@/data/portfolio";

type ThemeMode = "light" | "dark";

interface PreferencesContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  t: (text: BilingualText) => string;
}

const PreferencesContext = createContext<PreferencesContextValue | undefined>(
  undefined
);

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    try {
      const savedLang = window.localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "en" || savedLang === "id") {
        setLangState(savedLang);
      }
      const savedTheme = window.localStorage.getItem("portfolio_theme") as ThemeMode | null;
      if (savedTheme === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem("portfolio_lang", next);
      document.documentElement.lang = next;
    } catch {
      // Ignore storage errors
    }
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
  };

  const toggleTheme = () => {
    const next: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(next);
    try {
      window.localStorage.setItem("portfolio_theme", next);
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // Ignore storage errors
    }
  };

  const t = (text: BilingualText): string => {
    return text[lang] || text.en;
  };

  return (
    <PreferencesContext.Provider
      value={{ lang, setLang, toggleLang, theme, toggleTheme, t }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }
  return ctx;
}
