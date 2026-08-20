import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { BETRIEB, HAUPTSITZ } from "@/lib/data";

export const metadata = { title: "Impressum" };

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={<>Impressum</>} />
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <Reveal>
            <GlassCard className="p-6 sm:p-10">
              <div className="space-y-6 text-sm leading-relaxed text-ink-500">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Betrieb</div>
                  <div className="mt-2 text-ink-900">MÜLLERDÄCHER®</div>
                  <div>{BETRIEB.meister} — {BETRIEB.meisterExtra}</div>
                  <div>{HAUPTSITZ.street}</div>
                  <div>D-{HAUPTSITZ.zip} {HAUPTSITZ.city}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Kontakt</div>
                  <div className="mt-2">Tel: +49 {BETRIEB.phone}</div>
                  <div>E-Mail: {BETRIEB.email}</div>
                  <div>Web: {BETRIEB.web}</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Weitere Standorte</div>
                  {BETRIEB.standorte.slice(1).map((s) => (
                    <div key={s.name} className="mt-2">{s.street}, {s.zip} {s.city}</div>
                  ))}
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Berufsbezeichnung</div>
                  <div className="mt-2">Dachdeckermeister · geprüfter Sachverständiger nach TRGS 519</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Zuständige Kammer</div>
                  <div className="mt-2">Handwerkskammer des Saarlandes, Saarbrücken.</div>
                </div>
                <div className="text-xs text-ink-500/80">
                  MÜLLERDÄCHER, MÜLLERGRUPPE, MÜLLERZIRKEL, MÜLLERIMMOBILIEN sind eingetragene
                  Marken von Patrick Raphael Müller.
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
