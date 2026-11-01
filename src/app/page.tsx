import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FocusAreasSection } from "@/components/FocusAreasSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechnicalNotesSection } from "@/components/TechnicalNotesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <FocusAreasSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <TechnicalNotesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
