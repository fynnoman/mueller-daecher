import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { Phone, Mail, MapPin, Siren, ArrowUpRight, MessageCircle } from "lucide-react";
import { BETRIEB, KONTAKT_INTRO } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Kontakt & Anfrage",
  description: "Kontakt zu MÜLLERDÄCHER®: 06831 98 82 62. Standorte in Ensdorf, Saarlouis und Wallerfangen. info@mueller-daecher.de."
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>{KONTAKT_INTRO.headline}<br /><span className="display-italic text-roof-500">{KONTAKT_INTRO.sub}</span></>}
        intro={KONTAKT_INTRO.body}
        image={IMG.teamBaustelle}
        imageAlt="Baustelle"
      />

      {/* Notfall-Highlight */}
      <section className="relative -mt-8 pb-8">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-alarm-500 p-6 text-white shadow-2xl sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/20">
                    <Siren size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">Sturmschaden & Notreparatur</div>
                    <div className="display text-2xl leading-tight sm:text-3xl">Notfallhilfe. Sofortmaßnahmen.</div>
                  </div>
                </div>
                <a
                  href={`tel:${BETRIEB.mobileRaw}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-alarm-600 shadow-lg transition hover:bg-signal-400 hover:text-ink-900"
                >
                  <Phone size={16} /> {BETRIEB.mobile}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Anfrage-Form + Kontakt-Daten */}
      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <div className="grid gap-3">
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="mt-1 text-roof-500" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Telefon</div>
                      <a href={`tel:${BETRIEB.phoneRaw}`} className="mt-1 block text-lg text-ink-900 hover:text-roof-500">
                        {BETRIEB.phone}
                      </a>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail size={20} className="mt-1 text-roof-500" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">E-Mail</div>
                      <a href={`mailto:${BETRIEB.email}`} className="mt-1 block text-lg text-ink-900 hover:text-roof-500">
                        {BETRIEB.email}
                      </a>
                    </div>
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle size={20} className="mt-1 text-roof-500" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">WhatsApp / Notfall</div>
                      <a
                        href={`https://wa.me/${BETRIEB.mobileRaw.replace("+", "")}`}
                        target="_blank" rel="noreferrer"
                        className="mt-1 block text-lg text-ink-900 hover:text-roof-500"
                      >
                        {BETRIEB.mobile}
                      </a>
                    </div>
                  </div>
                </GlassCard>

                {/* Standorte */}
                <div className="mt-4 grid gap-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Standorte</div>
                  {BETRIEB.standorte.map((s) => (
                    <GlassCard key={s.name} className="p-5">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-1 text-roof-500" />
                        <div>
                          <div className="text-sm font-bold text-ink-900">{s.name}</div>
                          <div className="text-sm text-ink-700">{s.street}</div>
                          <div className="text-sm text-ink-500">{s.zip} {s.city}</div>
                        </div>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <GlassCard variant="lift" className="relative overflow-hidden p-8 sm:p-10">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal-400/30 blur-2xl" />
                <div className="chip-signal">Anfrage</div>
                <h2 className="mt-6 display text-3xl leading-tight text-ink-900 sm:text-4xl">
                  Unverbindliches Angebot
                </h2>
                <p className="mt-3 text-ink-500">
                  Beschreiben Sie Ihr Vorhaben oder den Schaden. Unser Team meldet sich zeitnah mit
                  einem maßgeschneiderten Angebot oder einer Lösung für Ihr Anliegen.
                </p>

                <form className="mt-8 grid gap-4" action={`mailto:${BETRIEB.email}`} method="post" encType="text/plain">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Name</span>
                      <input name="name" required
                        className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white/80 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-roof-500/60 focus:bg-white"
                        placeholder="Vor- und Nachname" />
                    </label>
                    <label className="block">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Telefon / E-Mail</span>
                      <input name="contact" required
                        className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white/80 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-roof-500/60 focus:bg-white"
                        placeholder="So erreichen wir Sie" />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Objektadresse</span>
                    <input name="objekt"
                      className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white/80 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-roof-500/60 focus:bg-white"
                      placeholder="Straße, PLZ, Ort" />
                  </label>
                  <label className="block">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Ihr Anliegen</span>
                    <textarea name="anliegen" rows={5}
                      className="mt-1.5 w-full rounded-xl border border-ink-900/10 bg-white/80 px-4 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-500/60 focus:border-roof-500/60 focus:bg-white"
                      placeholder="Beschreiben Sie Ihr Vorhaben oder den Schaden" />
                  </label>
                  <button type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-signal-400 transition hover:bg-ink-700"
                  >
                    Anfrage senden
                    <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-[11px] leading-relaxed text-ink-500">
                    Für Notfälle bitte direkt anrufen: {BETRIEB.mobile}.
                  </p>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
