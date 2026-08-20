import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

import HeroHome from "@/components/HeroHome";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import LeistungIcon from "@/components/LeistungIcon";
import WertarbeitManifest from "@/components/WertarbeitManifest";
import ScrollScaleBackground from "@/components/ScrollScaleBackground";
import ParallaxImage from "@/components/ParallaxImage";
import Testimonials from "@/components/Testimonials";
import YouTubeCard from "@/components/YouTubeCard";
import {
  LEISTUNGEN, YT_VIDEOS, BLOG_TEASER, BETRIEB,
  PATRICK_ZITAT, GRUPPE_TEXT, EUDAIMONIA, NETZWERK_TEXT
} from "@/lib/data";
import { IMG } from "@/lib/images";

const featured = LEISTUNGEN.slice(0, 8);

const marqueeItems = [
  "Alles für Dach und Fassade",
  "aus Meisterhand",
  "Zum Festpreis",
  "Garantiert",
  "MÜLLERDÄCHER® …einfach besser!"
];

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Marquee band */}
      <section className="relative border-y-2 border-ink-900 bg-signal-400 py-5">
        <Marquee duration={45}>
          {marqueeItems.map((t) => (
            <div key={t} className="flex items-center gap-4 stencil text-xl text-ink-900 sm:gap-6 sm:text-2xl">
              <span>{t}</span>
              <span className="text-roof-500">★</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Wertarbeit */}
      <WertarbeitManifest />

      {/* Patrick-Zitat */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-10">
          <Reveal>
            <GlassCard variant="lift" className="relative overflow-hidden p-6 sm:p-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal-400/40 blur-2xl" />
              <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-full bg-signal-400 ring-4 ring-signal-400 sm:mx-0 sm:h-56 sm:w-56">
                  <Image src={IMG.patrick} alt="Patrick Müller" fill sizes="224px" className="object-cover object-top scale-[1.6] translate-y-6" />
                </div>
                <div>
                  <Quote className="text-signal-500" />
                  <blockquote className="mt-4 display text-3xl leading-tight text-ink-900 sm:text-4xl">
                    „{PATRICK_ZITAT.text}"
                  </blockquote>
                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-roof-500">
                    {PATRICK_ZITAT.autor}
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      {/* Big Scroll-Scale: Baustelle */}
      <ScrollScaleBackground
        src={IMG.heroRoof}
        alt="Baustelle Steildach"
        eyebrow="Über den Dächern des Saarlandes"
      />

      {/* Leistungen Grid */}
      <section id="leistungen" className="relative py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <Reveal>
              <div className="chip-signal">Leistungen</div>
              <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
                Steildächer & Flachdächer
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-ink-500">
                Alles rund ums Dach für Steil- und Flachdächer: Neubau, Sanierung/Modernisierung,
                gewerblich & privat, Eindeckung, Gebälkbau, Bauklempnerei, Einfassungen &
                Bekleidungen, Dachinstallationen (Photovoltaik, Solarthermie), Gefahrstoffsanierung,
                Planung, Beratung, Bauabwicklung.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.04}>
                <Link href={`/leistungen#${l.slug}`}>
                  <GlassCard className="h-full p-6">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-signal-400">
                      <LeistungIcon name={l.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 display text-xl leading-tight text-ink-900">{l.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{l.short}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-roof-500">
                      Mehr erfahren <ArrowRight size={13} />
                    </div>
                  </GlassCard>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/leistungen"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/70 px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:bg-white"
              >
                Alle {LEISTUNGEN.length} Leistungen
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÜLLERGRUPPE / MÜLLERZIRKEL */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-ink-900 shadow-lift">
                <Image src={IMG.team} alt="Team MÜLLERDÄCHER" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="chip-signal">Das Unternehmen</div>
              <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
                Dritte Generation. <br />
                <span className="display-italic text-roof-500">Deutschlandweit.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{GRUPPE_TEXT.intro}</p>
              <p className="mt-4 text-lg leading-relaxed text-ink-500">{GRUPPE_TEXT.zirkel}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/team" className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-signal-400 transition hover:bg-ink-700">
                  Zum Team <ArrowUpRight size={15} />
                </Link>
                <Link href="/karriere" className="inline-flex items-center gap-2 rounded-full border border-ink-900/12 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-white">
                  Karriere
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Second Scroll-Scale */}
      <ScrollScaleBackground
        src={IMG.teamBaustelle}
        alt="Baustelle"
        eyebrow="MÜLLERDÄCHER®"
      />

      {/* YouTube */}
      <section className="relative py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal>
            <div className="chip-signal">Imageinterviews</div>
            <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
              Patrick im O-Ton
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {YT_VIDEOS.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.06}>
                <YouTubeCard id={v.id} title={v.title} tag={v.tag} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eudaimonia */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-10">
          <Reveal>
            <div className="paper-card-lift relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-16">
              <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-signal-400/30 blur-2xl" />
              <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <div className="chip-signal">Buch</div>
                  <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
                    Eudaimonia
                  </h2>
                  <div className="mt-2 text-lg text-ink-500">Das Buch für Gründer im Handwerk.</div>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-700">{EUDAIMONIA.intro}</p>
                  <blockquote className="mt-6 display text-2xl leading-tight text-ink-900">
                    „{EUDAIMONIA.zitat}"
                  </blockquote>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">{EUDAIMONIA.outro}</p>
                </div>
                <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
                  <Image src={IMG.buchEudaimonia} alt="Eudaimonia" fill sizes="(max-width: 1024px) 80vw, 384px" className="object-contain drop-shadow-[0_25px_35px_rgba(11,13,18,0.25)]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div className="chip-signal">MÜLLERDÄCHER® Blog</div>
              <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-ink-900 sm:text-6xl">
                Aktuelle Beiträge
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-roof-500 hover:text-roof-600">
                Alle Beiträge <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {BLOG_TEASER.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <a href={p.href} target="_blank" rel="noreferrer" className="block">
                  <GlassCard className="flex h-full flex-col p-6 sm:p-8">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">{p.date}</div>
                    <div className="mt-1 text-[10px] text-ink-500">{p.kategorie}</div>
                    <h3 className="mt-3 display text-2xl leading-tight text-ink-900">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">{p.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-900">
                      Weiterlesen <ArrowUpRight size={13} />
                    </div>
                  </GlassCard>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Netzwerk */}
      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-10">
          <Reveal>
            <div className="chip-signal">Netzwerk</div>
            <h2 className="mt-6 display text-3xl leading-tight tracking-tight text-ink-900 sm:text-5xl">
              {NETZWERK_TEXT.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-500">{NETZWERK_TEXT.body}</p>
          </Reveal>
        </div>
      </section>

      {/* Wide parallax */}
      <section className="relative py-16">
        <div className="mx-auto max-w-[110rem] px-4 sm:px-6">
          <ParallaxImage src={IMG.heroRoof} alt="Dach" className="aspect-[16/8] w-full" intensity={120} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-ink-900 p-6 text-paper-50 sm:rounded-[2.5rem] sm:p-16">
              <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-signal-400/40 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-roof-500/30 blur-2xl" />

              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <div className="chip-signal">Anfrage</div>
                  <h2 className="mt-6 display text-[2.5rem] leading-[0.98] tracking-tight text-paper-50 sm:text-6xl">
                    Ihr Dach in besten Händen.
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-50/80">
                    Unverbindliches Angebot oder Reparaturanfrage. Beschreiben Sie Ihr Vorhaben oder
                    den Schaden — unser Team meldet sich zeitnah mit einem maßgeschneiderten Angebot.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/kontakt"
                      className="group inline-flex items-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-sm font-bold text-ink-900 transition hover:bg-signal-300"
                    >
                      Angebot anfragen
                      <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                    <a
                      href={`tel:${BETRIEB.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-medium text-paper-50 transition hover:bg-white/20"
                    >
                      <Phone size={15} /> {BETRIEB.phone}
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  {BETRIEB.standorte.map((s) => (
                    <div key={s.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1 text-signal-400" />
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-signal-400">{s.name}</div>
                          <div className="mt-1 text-sm text-paper-50">{s.street}<br />{s.zip} {s.city}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

// Small local icon
function Quote({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className={className} aria-hidden>
      <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Zm10 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7Z"/>
    </svg>
  );
}
