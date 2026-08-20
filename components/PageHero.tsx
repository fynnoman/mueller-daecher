"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";

export default function PageHero({
  eyebrow, title, intro, image, imageAlt = ""
}: {
  eyebrow: string; title: ReactNode; intro?: string; image?: string; imageAlt?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[70vh] items-end overflow-hidden pt-40 sm:min-h-[80vh]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute -left-40 top-24 h-[30rem] w-[30rem] rounded-full bg-signal-400/30 blur-2xl" />
        <div className="absolute right-0 top-0 h-[24rem] w-[24rem] rounded-full bg-roof-400/20 blur-2xl" />
      </div>

      {image && (
        <motion.div style={reduce ? undefined : { y: imgY, willChange: "transform" }} className="absolute inset-0 -z-10">
          <Image src={image} alt={imageAlt} fill priority sizes="100vw"
            className="object-cover opacity-30 [mask-image:linear-gradient(to_bottom,black_20%,transparent_92%)]" />
        </motion.div>
      )}

      <motion.div style={reduce ? undefined : { y: textY, willChange: "transform" }}
        className="relative mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10">
        <div className="chip-signal">{eyebrow}</div>
        <h1 className="mt-6 display text-5xl leading-[1.02] tracking-tight text-ink-800 sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">{intro}</p>}
      </motion.div>
    </section>
  );
}
