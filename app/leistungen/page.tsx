import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import LeistungIcon from "@/components/LeistungIcon";
import { LEISTUNGEN } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Leistungen",
  description: "MÜLLERDÄCHER Leistungen: Steildach, Flachdach, Sturmschaden, Zimmermanns- und Holzarbeiten, Dachfenster, Dachdämmung, Gauben & Aufstockungen, Balkone & Terrassen, Fassade, Drohnenservice, Bedarfs- und Verbrauchsausweis."
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title={<>Steildächer<br /><span className="display-italic text-roof-500">& Flachdächer.</span></>}
        intro="Alles rund ums Dach für Steil- und Flachdächer: Neubau, Sanierung/Modernisierung, gewerblich & privat, Eindeckung, Gebälkbau, Bauklempnerei, Einfassungen & Bekleidungen, Dachinstallationen (Photovoltaik, Solarthermie), Gefahrstoffsanierung, Planung, Beratung, Bauabwicklung."
        image={IMG.heroRoof}
        imageAlt="Steildach"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEISTUNGEN.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 6) * 0.04}>
                <div id={l.slug} className="scroll-mt-28 h-full">
                  <GlassCard className="flex h-full flex-col p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-signal-400">
                      <LeistungIcon name={l.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 display text-2xl leading-tight text-ink-900">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{l.short}</p>
                    <ul className="mt-5 flex-1 space-y-1.5 text-sm text-ink-700">
                      {l.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-roof-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    {l.extra && (
                      <p className="mt-5 border-t border-ink-900/10 pt-4 text-xs italic text-ink-500">
                        {l.extra}
                      </p>
                    )}
                  </GlassCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <Reveal>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-signal-400 shadow-lift transition hover:bg-ink-700"
            >
              Unverbindliches Angebot anfragen
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
