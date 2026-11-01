"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-ink">
      <Navbar />
      <main className="flex-1 flex items-center">
        <div className="max-w-editorial mx-auto px-6 sm:px-10 lg:px-14 py-24 w-full">
          <div className="max-w-xl border border-hairline bg-surface/50 p-8 sm:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-cobalt block mb-3">
              HTTP 404 — RESOURCE NOT FOUND
            </span>
            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-ink">
              The requested page or case study does not exist.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed">
              Check the URL path or return to the main portfolio index to browse
              all featured software and data engineering case studies.
            </p>
            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-canvas font-mono text-xs uppercase tracking-wider hover:bg-cobalt transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio Index</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
