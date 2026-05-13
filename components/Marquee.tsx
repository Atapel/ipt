"use client";

import type { ReactNode } from "react";

export default function Marquee({
  items,
  speed = 40,
}: {
  items: ReactNode[];
  speed?: number;
}) {
  const list = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-8 group">
      <div
        className="flex gap-12 whitespace-nowrap will-change-transform animate-[marquee_linear_infinite]"
        style={{ animationDuration: `${speed}s` }}
      >
        {list.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-ink-500">
            {item}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-cream-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-cream-50 to-transparent" />
    </div>
  );
}
