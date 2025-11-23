"use client";

import React from "react";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-6">
          <div className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700/70">
            Dreems • Legal
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-slate-300 sm:text-base font-body">
              {subtitle}
            </p>
          )}
        </header>

        {/* Content */}
        <main className="prose prose-invert prose-slate max-w-none font-body">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-800 pt-4 text-xs text-slate-400">
          <p>Dreems is a product by Barking Code.</p>
          <p className="mt-1">
            For questions, contact{" "}
            <a
              href="mailto:support@barkingcode.com"
              className="text-sky-300 hover:text-sky-200"
            >
              support@barkingcode.com
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}
