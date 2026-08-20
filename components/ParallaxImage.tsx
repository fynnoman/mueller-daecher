"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import clsx from "clsx";

export default function ParallaxImage({
  src, alt, className, imgClassName, intensity = 100, overlay = false, priority = false
}: {
  src: string; alt: string; className?: string; imgClassName?: string;
  intensity?: number; overlay?: boolean; priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div ref={ref} className={clsx("relative overflow-hidden rounded-3xl bg-ink-800", className)}>
      <motion.div style={reduce ? undefined : { y, willChange: "transform" }} className="absolute inset-[-10%]">
        <Image src={src} alt={alt} fill priority={priority} sizes="100vw" className={clsx("object-cover", imgClassName)} />
      </motion.div>
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/25 via-ink-900/10 to-ink-900/50" />
      )}
    </div>
  );
}
