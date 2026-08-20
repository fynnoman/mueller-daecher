import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { REFERENZEN } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Referenzen",
  description: "Ausgewählte Projekte von MÜLLERDÄCHER: Steildach- und Flachdachsanierungen, Schieferdach, Wellplatten, Neubauten. Saarland."
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title={<>Ausgewählte<br /><span className="display-italic text-roof-500">Projekte.</span></>}
        intro="Ein Auszug aus Steildach- und Flachdachsanierungen, Neubauten und Schiefereindeckungen im Saarland."
        image={IMG.heroRoof}
        imageAlt="Referenz-Projekte"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-6 md:grid-cols-2">
            {REFERENZEN.map((r, i) => (
              <Reveal key={`${r.jahr}-${r.titel}`} delay={(i % 4) * 0.05}>
                <GlassCard variant="lift" className="p-7 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="stencil text-3xl text-ink-900">{r.jahr}</div>
                    <div className="chip-signal">{r.kategorie}</div>
                  </div>
                  <h3 className="mt-3 display text-2xl leading-tight text-ink-900">{r.titel}</h3>
                  <div className="mt-1 text-sm text-ink-500">Ort: {r.ort}</div>
                  <div className="mt-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Leistungen</div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{r.leistungen}</p>
                  </div>
                  {r.besonderheiten && (
                    <div className="mt-4">
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Besonderheiten</div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{r.besonderheiten}</p>
                    </div>
                  )}
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
