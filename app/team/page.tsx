import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import { GRUPPE_TEXT, BETRIEB } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Team",
  description: "Das Team von MÜLLERDÄCHER®. Deutschlandweit agierender Dachdeckermeisterbetrieb in dritter Generation, geführt durch DDM Patrick Raphael Müller."
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title={<>Schreib uns —<br /><span className="display-italic text-roof-500">und werde Teil unserer Familie.</span></>}
        intro={GRUPPE_TEXT.intro}
        image={IMG.team}
        imageAlt="MÜLLERDÄCHER Team"
      />

      {/* Team-Foto */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2rem] bg-ink-900 shadow-lift">
              <Image src={IMG.team} alt="MÜLLERDÄCHER Team" fill sizes="(max-width: 1024px) 100vw, 1200px" className="object-cover" priority />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÜLLERZIRKEL Text */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-5 sm:px-10">
          <Reveal>
            <div className="chip-signal">MÜLLERGRUPPE® · MÜLLERZIRKEL®</div>
            <p className="mt-6 text-xl leading-relaxed text-ink-800">{GRUPPE_TEXT.zirkel}</p>
          </Reveal>
        </div>
      </section>

      {/* CEO — Patrick */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <GlassCard variant="lift" className="grid gap-0 overflow-hidden p-0 lg:grid-cols-[1fr_1.2fr]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-signal-400 lg:aspect-auto">
                <Image src={IMG.patrick} alt="Patrick Raphael Müller" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain object-bottom" />
              </div>
              <div className="p-6 sm:p-12">
                <div className="chip-signal">Inhaber & Geschäftsführung</div>
                <h2 className="mt-6 display text-3xl leading-tight text-ink-900 sm:text-5xl">
                  Patrick Raphael Müller
                </h2>
                <div className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-roof-500">
                  DDM · {BETRIEB.meisterExtra}
                </div>
                <blockquote className="mt-8 border-l-4 border-signal-400 pl-5 display text-xl leading-tight text-ink-900 sm:pl-6 sm:text-2xl">
                  „Wir stehen für Wertarbeit und faire Preise.<br />
                  Darauf gebe ich Ihnen mein Wort."
                </blockquote>
                <div className="mt-4 text-sm text-ink-500">Patrick Müller, Dachdeckermeister</div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <ScrollScaleBackground
        src={IMG.teamBaustelle}
        alt="Baustelle"
        eyebrow="Werde auch du Teil von MÜLLERDÄCHER®"
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <Reveal>
            <Link
              href="/karriere"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-signal-400 shadow-lift transition hover:bg-ink-700"
            >
              Offene Stellen ansehen
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
