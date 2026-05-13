"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { ReactNode } from "react";

export default function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(450px circle at ${x}% ${y}%, rgba(245, 221, 210, 0.18), transparent 60%)`;

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width) * 100);
        y.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className={`relative ${className}`}
    >
      <motion.div className="pointer-events-none absolute inset-0 rounded-[inherit]" style={{ background: bg }} />
      {children}
    </motion.div>
  );
}
