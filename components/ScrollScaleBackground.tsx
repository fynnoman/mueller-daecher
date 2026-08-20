"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import clsx from "clsx";

/**
 * Scroll-scale-to-background: sticky container 100vh × 100vw (no size change).
 * Inner image scales + border-radius (paint only, no layout thrash).
 */
export default function ScrollScaleBackground({
  src, alt, eyebrow, title, intro, children, className,
  overlayGradient = "linear-gradient(180deg, rgba(5,7,10,0.15) 0%, rgba(5,7,10,0.55) 55%, rgba(5,7,10,0.85) 100%)"
}: {
  src: string; alt: string;
  eyebrow?: string; title?: ReactNode; intro?: string;
  children?: ReactNode; className?: string; overlayGradient?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const scale = useTransform(scrollYProgress, [0.15, 0.55], [0.78, 1]);
  const radius = useTransform(scrollYProgress, [0.15, 0.55], [40, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.72], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.55, 0.9], [30, 0]);

  const noAnim = { scale: 1, borderRadius: 0 };

  return (
    <section ref={ref} className={clsx("relative", className)} style={{ height: "220vh" }}>
      <div className="sticky top-0 flex h-screen w-screen items-center justify-center overflow-hidden">
        <motion.div
          style={reduce ? noAnim : { scale, borderRadius: radius, willChange: "transform" }}
          className="relative h-full w-full overflow-hidden bg-ink-900 shadow-lift"
        >
          <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />

          <motion.div
            style={reduce ? { opacity: 1, background: overlayGradient } : { opacity: overlayOpacity, background: overlayGradient }}
            className="pointer-events-none absolute inset-0"
          />

          <motion.div
            style={reduce ? { opacity: 1 } : { opacity: contentOpacity, y: contentY }}
            className="absolute inset-x-0 bottom-0 flex flex-col items-start px-5 pb-12 sm:px-16 sm:pb-24 lg:px-24"
          >
            {eyebrow && (
              <div className="mb-4 chip-signal sm:mb-5">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="display max-w-4xl text-3xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:mt-6 sm:text-lg">{intro}</p>}
            {children}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
