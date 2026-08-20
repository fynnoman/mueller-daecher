"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { WERTARBEIT } from "@/lib/data";

function Line({ text, index, count, progress, disable }: {
  text: string; index: number; count: number;
  progress: MotionValue<number>; disable: boolean;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const opacity = useTransform(progress, [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.15)], [0.18, 1, 1, 0.18]);
  const x = useTransform(progress, [start, end], [-8, 0]);
  return (
    <motion.li
      style={disable ? undefined : { opacity, x }}
      className="display text-2xl leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl"
    >
      <span className="mr-4 text-signal-500 font-sans text-base font-bold tracking-widest align-top">
        {String(index + 1).padStart(2, "0")}
      </span>
      {text}
    </motion.li>
  );
}

/** Unsere Philosophie · WERTARBEIT — 15 Sätze im Original-Wortlaut. */
export default function WertarbeitManifest() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref} className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 sm:gap-14 sm:px-10 sm:py-24 lg:grid-cols-[1fr_1.6fr] lg:py-32">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="chip-signal">Unsere Philosophie</div>
          <h2 className="mt-6 display text-5xl leading-[0.95] tracking-tight text-ink-900 sm:text-7xl">
            WERT<br />ARBEIT
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-500">
            Unsere Arbeit, unsere Erfahrung, unser Anspruch. Wertarbeit ist unsere Richtschnur in
            allem, was wir unseren Kunden bieten wollen.
          </p>
        </div>

        <ol className="space-y-6 sm:space-y-8">
          {WERTARBEIT.map((t, i) => (
            <Line key={i} text={t} index={i} count={WERTARBEIT.length} progress={scrollYProgress} disable={reduce} />
          ))}
        </ol>
      </div>
    </section>
  );
}
