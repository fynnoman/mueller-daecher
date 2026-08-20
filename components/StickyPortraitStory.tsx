"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import clsx from "clsx";

type Chapter = {
  eyebrow?: string; title: ReactNode; body: ReactNode;
  image: string; imageAlt: string; meta?: ReactNode;
};

function Layer({ chapter, index, count, progress, disable }: {
  chapter: Chapter; index: number; count: number;
  progress: MotionValue<number>; disable: boolean;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const fadeIn = Math.max(0, start - 0.05);
  const fadeOut = Math.min(1, end + 0.05);
  const opacity = useTransform(progress, [fadeIn, start + 0.02, end - 0.02, fadeOut], [0, 1, 1, 0]);
  return (
    <motion.div style={disable ? { opacity: index === 0 ? 1 : 0 } : { opacity }} className="absolute inset-0">
      <Image src={chapter.image} alt={chapter.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-ink-900/40" />
    </motion.div>
  );
}

function Dot({ index, count, progress, disable }: {
  index: number; count: number; progress: MotionValue<number>; disable: boolean;
}) {
  const start = index / count;
  const end = (index + 1) / count;
  const opacity = useTransform(progress, [start, start + 0.02, end - 0.02, end], [0.35, 1, 1, 0.35]);
  return <motion.span style={disable ? { opacity: 0.6 } : { opacity }} className="h-1.5 w-6 rounded-full bg-white/90" />;
}

export default function StickyPortraitStory({
  chapters, side = "left", className
}: { chapters: Chapter[]; side?: "left" | "right"; className?: string; }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section ref={ref}
      className={clsx("relative mx-auto grid max-w-[100rem] gap-8 px-4 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12", className)}
    >
      <div className={clsx(side === "right" && "lg:order-2")}>
        <div className="sticky top-[14vh] flex h-[70vh] items-center justify-center">
          <div className="relative h-full w-full max-w-xl overflow-hidden rounded-[2rem] bg-ink-900 shadow-lift">
            {chapters.map((c, i) => (
              <Layer key={i} chapter={c} index={i} count={chapters.length} progress={scrollYProgress} disable={reduce} />
            ))}
            <div className="absolute left-6 top-6 flex items-center gap-2">
              {chapters.map((_, i) => (
                <Dot key={i} index={i} count={chapters.length} progress={scrollYProgress} disable={reduce} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={clsx("flex flex-col gap-24 py-[10vh] lg:gap-40 lg:py-[20vh]", side === "right" && "lg:order-1")}>
        {chapters.map((c, i) => (
          <div key={i} className="flex flex-col gap-4">
            {c.eyebrow && <div className="chip-signal self-start">{c.eyebrow}</div>}
            <h3 className="display text-4xl leading-tight tracking-tight text-ink-800 sm:text-5xl">{c.title}</h3>
            <div className="text-lg leading-relaxed text-ink-500">{c.body}</div>
            {c.meta && <div className="mt-2 flex flex-wrap gap-2">{c.meta}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
