"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream-50/70 border-b border-cream-200/60">
      <motion.div
        className="absolute left-0 right-0 bottom-0 h-px origin-left bg-gradient-to-r from-sage-500 via-rose-400 to-sage-500"
        style={{ scaleX: progress }}
      />
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.span
            className="grid place-items-center h-9 w-9 rounded-full bg-sage-500 text-cream-50 font-display text-lg shadow-sm"
            whileHover={{ rotate: -10, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
          >
            i
          </motion.span>
          <span className="font-display text-lg md:text-xl tracking-tight text-ink-900 group-hover:text-sage-700 transition-colors">
            Inspiration PT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="link-underline hover:text-ink-900">
              {n.label}
            </Link>
          ))}
          <Magnetic>
            <Link
              href="/contact"
              className="rounded-full bg-ink-900 text-cream-50 px-4 py-2 hover:bg-sage-700 transition-colors inline-block"
            >
              Book a session
            </Link>
          </Magnetic>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden p-2 rounded-full hover:bg-cream-200/60"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream-200/60 bg-cream-50/95">
          <div className="container-page py-4 flex flex-col gap-2 text-ink-700">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2">
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink-900 text-cream-50 px-4 py-2 text-center"
            >
              Book a session
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
