"use client";

import { motion } from "framer-motion";
import { Check } from "@/components/icons";

const items = [
  "Belly-to-belly snuggle",
  "Side-lying play with a toy",
  "Prop on a rolled towel",
  "Floor mirror peek-a-boo",
  "Carry positions for strength",
];

export default function HeroCard() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <motion.div
        className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-sage-200 via-cream-100 to-rose-200"
        animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-6 rounded-[2rem] glass shadow-2xl flex flex-col overflow-hidden">
        <div className="p-6 border-b border-cream-200/70">
          <div className="text-xs uppercase tracking-wider text-ink-400">Today&apos;s plan</div>
          <div className="font-display text-2xl mt-1 text-ink-900">Tummy time, in 5 steps</div>
        </div>

        <ul className="p-6 space-y-4 text-ink-700 flex-1">
          {items.map((s, i) => (
            <motion.li
              key={s}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: "easeOut" }}
            >
              <span className="grid place-items-center h-6 w-6 rounded-full bg-sage-100 text-sage-700 shrink-0">
                <Check className="w-4 h-4" />
              </span>
              <span className="text-sm md:text-base">{s}</span>
            </motion.li>
          ))}
        </ul>

        <div className="p-6 border-t border-cream-200/70 bg-cream-100/40">
          <div className="flex items-center justify-between">
            <div className="text-xs text-ink-400">In-home or via video</div>
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-sage-500"
              animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        className="absolute -left-4 top-12 rounded-2xl bg-cream-50 ring-1 ring-cream-200 px-4 py-2 shadow-lg flex items-center gap-2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="grid place-items-center h-6 w-6 rounded-full bg-rose-100 text-rose-500">
          <Check className="w-3.5 h-3.5" />
        </span>
        <span className="text-xs text-ink-700">Milestone reached</span>
      </motion.div>

      <motion.div
        className="absolute -right-2 bottom-20 rounded-2xl bg-ink-900 text-cream-50 px-4 py-2 shadow-lg text-xs"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-rose-200 uppercase tracking-wider text-[10px]">4th trimester</div>
        <div className="font-display text-sm">Parent-led play</div>
      </motion.div>
    </div>
  );
}
