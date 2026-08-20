"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Phone } from "lucide-react";
import { IMG } from "@/lib/images";
import { BETRIEB, HAUPTSITZ } from "@/lib/data";

export default function HeroHome() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const stampRotate = useTransform(scrollYProgress, [0, 1], [-4, -14]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-28 pb-12 sm:pt-40 sm:pb-16"
    >
      {/* Rooftop background */}
      <motion.div
        style={reduce ? undefined : { y: bgY, scale: bgScale, willChange: "transform" }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={IMG.heroRoof}
          alt="Dachdecker auf Schieferdach"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,10,0.65) 0%, rgba(5,7,10,0.35) 40%, rgba(5,7,10,0.88) 100%)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 45% at 10% 100%, rgba(249,200,28,0.22), transparent 70%), radial-gradient(40% 40% at 100% 0%, rgba(178,58,47,0.20), transparent 70%)"
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-end gap-10 px-5 pt-8 sm:gap-12 sm:px-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        <motion.div style={reduce ? undefined : { y: textY, willChange: "transform" }}>
          {/* Wordmark chip using logo */}
          <div className="inline-flex h-9 w-44 items-center overflow-hidden rounded-lg bg-signal-400 shadow-lg ring-1 ring-inset ring-black/20 sm:h-10 sm:w-48">
            <div className="relative h-full w-full">
              <Image src={IMG.logo} alt="MÜLLERDÄCHER" fill sizes="192px" className="object-contain object-center p-1" />
            </div>
          </div>

          <h1 className="mt-6 display text-[2.5rem] leading-[0.95] text-white sm:text-[4.5rem] sm:leading-[0.95] lg:text-[5.75rem]">
            Alles für Dach
            <br />
            und Fassade
            <br />
            <span className="display-italic text-signal-400 drop-shadow-[0_2px_20px_rgba(249,200,28,0.35)]">
              aus Meisterhand.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-tight text-white sm:mt-8 sm:text-2xl">
            <span className="highlight-yellow font-bold text-ink-900">Zum Festpreis.</span>{" "}
            <span className="highlight-yellow font-bold text-ink-900">Garantiert.</span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/kontakt"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-sm font-bold text-ink-900 shadow-lift transition hover:bg-signal-300 sm:justify-start"
            >
              Unverbindliches Angebot
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${BETRIEB.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-black/30 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-black/50 sm:justify-start"
            >
              <Phone size={15} /> {BETRIEB.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/85 sm:mt-14 sm:gap-4 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
              Dritte Generation · deutschlandweit
            </span>
            <span className="text-white/40">·</span>
            <span>{HAUPTSITZ.street}, {HAUPTSITZ.zip} {HAUPTSITZ.city}</span>
          </div>
        </motion.div>

        {/* Patrick — transparent PNG on yellow signal backdrop */}
        <motion.div
          style={reduce ? undefined : { y: portraitY, willChange: "transform" }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-lg"
        >
          <div className="relative aspect-[4/5] w-full">
            {/* Solid yellow backdrop */}
            <div className="absolute inset-x-2 bottom-0 top-10 -z-10 rounded-[3rem] bg-signal-400 shadow-lift ring-1 ring-inset ring-black/10" />
            <div
              aria-hidden
              className="absolute -inset-6 -z-20 rounded-[4rem]"
              style={{
                background:
                  "radial-gradient(60% 55% at 50% 55%, rgba(249,200,28,0.55), transparent 70%)"
              }}
            />
            <div className="absolute -left-2 top-20 z-10 hidden h-16 w-16 rotate-6 rounded-2xl bg-ink-900 sm:block" />
            <div className="absolute -right-3 bottom-10 z-10 hidden h-20 w-20 -rotate-6 rounded-2xl bg-roof-500 sm:block" />

            <Image
              src={IMG.patrick}
              alt="Patrick Raphael Müller — Dachdeckermeister"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 520px"
              className="relative z-20 object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
            />

            <motion.div
              style={reduce ? undefined : { rotate: stampRotate }}
              className="absolute -left-4 top-6 z-20 hidden h-36 w-36 sm:block"
            >
              <Image
                src={IMG.stempelExzellenz}
                alt="Geprüfte Exzellenz by PRM"
                fill
                sizes="144px"
                className="object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)]"
              />
            </motion.div>

            <div className="absolute -bottom-2 left-2 right-2 z-20 flex items-center justify-between gap-2 rounded-2xl bg-ink-900/95 px-3 py-2.5 shadow-lift ring-1 ring-inset ring-white/10 backdrop-blur sm:gap-3 sm:px-4 sm:py-3">
              <div className="min-w-0">
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-signal-400 sm:text-[10px] sm:tracking-[0.22em]">Dachdeckermeister</div>
                <div className="display text-base leading-tight text-white sm:text-xl">Patrick Raphael Müller</div>
              </div>
              <div className="chip-signal shrink-0 !bg-signal-400 !text-ink-900">DDM</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
