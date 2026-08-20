import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { STELLEN, BETRIEB } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Karriere",
  description: "MÜLLERDÄCHER® sucht Dachdeckermeister (m/w/d) und Dachdeckergesellen (m/w/d) in Ensdorf."
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title={<>Aktuell suchen wir<br /><span className="display-italic text-roof-500">Verstärkung.</span></>}
        intro="Werde Teil von MÜLLERDÄCHER®. Renommiertes, führendes Unternehmen, erstklassiges Team, sehr gutes Betriebsklima."
        image={IMG.team}
        imageAlt="MÜLLERDÄCHER Team"
      />

      {STELLEN.map((s, si) => (
        <section key={s.slug} className="relative py-16">
          <div className="mx-auto max-w-6xl px-5 sm:px-10">
            <Reveal>
              <GlassCard variant="lift" className="relative overflow-hidden p-6 sm:p-12">
                <div className="pointer-events-none absolute -right-40 -top-40 h-[24rem] w-[24rem] rounded-full bg-signal-400/30 blur-2xl" />

                <div className="chip-signal">Stelle {si + 1}</div>
                <h2 className="mt-6 display text-3xl leading-tight text-ink-900 sm:text-5xl">
                  {s.title}
                </h2>

                {"intro" in s && s.intro && (
                  <p className="mt-6 text-lg leading-relaxed text-ink-700">{s.intro}</p>
                )}
                {"rahmen" in s && s.rahmen && (
                  <div className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-roof-500">
                    {s.rahmen}
                  </div>
                )}

                <div className="mt-10 grid gap-8 lg:grid-cols-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">
                      {"aufgaben" in s ? "Dein Aufgabenbereich" : "Aufgaben"}
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {s.aufgaben.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-roof-500" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">
                      {"erwarten" in s ? "Wir erwarten" : "Profil"}
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {("erwarten" in s ? s.erwarten : (s as any).profil).map((p: string) => (
                        <li key={p} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-roof-500" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Wir bieten</div>
                    <ul className="mt-3 space-y-2 text-sm text-ink-700">
                      {s.bieten.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 border-t border-ink-900/10 pt-8">
                  <a
                    href={`mailto:${BETRIEB.emailKarriere}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-signal-400 transition hover:bg-ink-700"
                  >
                    <Mail size={15} /> Jetzt bewerben
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={`https://wa.me/${BETRIEB.mobileRaw.replace("+", "")}`}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-white"
                  >
                    <MessageCircle size={15} /> WhatsApp {BETRIEB.mobile}
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-10">
          <Reveal>
            <div className="chip-signal">Bewerbung</div>
            <h2 className="mt-6 display text-3xl leading-tight text-ink-900 sm:text-5xl">
              Jetzt in 3 Minuten bewerben.
            </h2>
            <p className="mt-4 text-lg text-ink-500">
              Schick uns dein Anschreiben + Lebenslauf per E-Mail — oder ruf uns an. Wir melden uns zeitnah zurück.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
