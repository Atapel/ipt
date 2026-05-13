"use client";

import { useState, type ReactNode } from "react";

export default function FAQItem({
  question,
  children,
}: {
  question: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-200 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-xl text-ink-900">{question}</span>
        <span
          className={`mt-2 h-6 w-6 shrink-0 rounded-full bg-sage-100 grid place-items-center text-sage-700 transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-ink-500 leading-relaxed max-w-3xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
