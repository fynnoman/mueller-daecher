import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="chip-signal">MÜLLERDÄCHER</div>
          <h2 className="mt-6 display text-5xl leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
            Empfohlen von 398 Personen
          </h2>
          <p className="mt-4 text-sm text-ink-500">
            Die hier veröffentlichten Bewertungen stammen von Personen, die unsere Dienstleistungen auf Google bewertet haben.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <GlassCard className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center gap-1 text-signal-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-signal-400 stroke-signal-500" />
                  ))}
                </div>
                <Quote size={20} className="mt-4 text-roof-500/70" />
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-700">{t.text}</p>
                <div className="mt-6 border-t border-ink-800/10 pt-4">
                  <div className="display text-lg text-ink-900">{t.name}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-widest text-ink-500">{t.when}</div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
