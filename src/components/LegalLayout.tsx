"use client";

import React from "react";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  appName?: string;
}

export function LegalLayout({ title, subtitle, children, appName = "Dreems" }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        {/* Header */}
        <header className="mb-8 border-b border-slate-200 pb-6">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
            {appName} • Legal
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-sm text-slate-600 sm:text-base font-body">
              {subtitle}
            </p>
          )}
        </header>

        {/* Content */}
        <main className="prose prose-slate max-w-none font-body prose-headings:mt-12 prose-h2:mb-6 prose-p:text-slate-600 prose-li:text-slate-600">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-12 border-t border-slate-200 pt-4 text-xs text-slate-500">
          <p>{appName} is a product by Barking Code.</p>
          <p className="mt-1">
            For questions, contact{" "}
            <a
              href="mailto:support@barkingcode.com"
              className="text-sky-600 hover:text-sky-700"
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
