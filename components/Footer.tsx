import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { BETRIEB, NAV, LEISTUNGEN, HAUPTSITZ } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="relative mt-40 border-t border-ink-900/10 bg-gradient-to-b from-transparent to-paper-100/60">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 sm:px-10 sm:pt-24">
        <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="relative h-14 w-56 overflow-hidden rounded-md">
              <Image src={IMG.logo} alt="MÜLLERDÄCHER" fill sizes="224px" className="object-contain object-left" />
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-500">
              MÜLLERDÄCHER® — Dachdeckermeisterbetrieb in dritter Generation, geführt durch
              {" "}{BETRIEB.meister}. Deutschlandweit agierend, verwurzelt im Saarland.
            </p>
          </div>
          <Link href="/kontakt" className="group flex items-start justify-start md:items-end md:justify-end">
            <div className="paper-card-lift flex items-center gap-4 rounded-2xl px-5 py-4">
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Angebot</div>
                <div className="display text-xl text-ink-900">Anfrage senden</div>
              </div>
              <div className="grid h-11 w-11 place-items-center rounded-full bg-ink-900 text-signal-400 transition group-hover:bg-roof-500 group-hover:text-white">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="space-y-2 text-sm text-ink-500">
              <a href={`tel:${BETRIEB.phoneRaw}`} className="flex items-center gap-2.5 transition hover:text-ink-900">
                <Phone size={14} className="text-roof-500" /> {BETRIEB.phone}
              </a>
              <a href={`tel:${BETRIEB.mobileRaw}`} className="flex items-center gap-2.5 transition hover:text-ink-900">
                <Phone size={14} className="text-roof-500" /> {BETRIEB.mobile} · WhatsApp / Notfall
              </a>
              <a href={`mailto:${BETRIEB.email}`} className="flex items-center gap-2.5 transition hover:text-ink-900">
                <Mail size={14} className="text-roof-500" /> {BETRIEB.email}
              </a>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Standorte</div>
            <div className="space-y-3 text-sm text-ink-500">
              {BETRIEB.standorte.map((s) => (
                <div key={s.name} className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-1 text-roof-500" />
                  <div>
                    <div className="text-ink-900">{s.name}</div>
                    <div>{s.street}, {s.zip} {s.city}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Navigation</div>
            <ul className="space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink-500 transition hover:text-ink-900">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Leistungen</div>
            <ul className="space-y-2.5 text-sm">
              {LEISTUNGEN.slice(0, 8).map((l) => (
                <li key={l.slug}>
                  <Link href={`/leistungen#${l.slug}`} className="text-ink-500 transition hover:text-ink-900">
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-roof-500">Recht</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/impressum" className="text-ink-500 transition hover:text-ink-900">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-ink-500 transition hover:text-ink-900">Datenschutz</Link></li>
              <li><Link href="/energieausweis" className="text-ink-500 transition hover:text-ink-900">Energieausweis</Link></li>
            </ul>
          </div>
        </div>

        {/* MÜLLERGRUPPE Cross-Sell */}
        <div className="mt-14 grid gap-4 rounded-3xl border border-ink-900/10 bg-ink-900 p-8 text-paper-50 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-signal-400">MÜLLERGRUPPE®</div>
            <div className="mt-2 display text-2xl leading-tight sm:text-3xl">
              MÜLLERIMMOBILIEN®
            </div>
            <p className="mt-2 max-w-2xl text-sm text-paper-50/70">
              Vom Keller bis zum Dach — MÜLLERIMMOBILIEN® ergänzt MÜLLERDÄCHER® um Vermarktung
              und Verwaltung von Immobilien.
            </p>
          </div>
          <a
            href="https://www.muellerimmobilien.info"
            target="_blank" rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 self-start justify-self-start rounded-full bg-signal-400 px-5 py-3 text-sm font-bold text-ink-900 transition hover:bg-signal-300 sm:w-auto sm:self-center sm:justify-self-end"
          >
            Zu MÜLLERIMMOBILIEN® <ExternalLink size={14} />
          </a>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink-900/10 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} MÜLLERDÄCHER® · {BETRIEB.meister}, {BETRIEB.meisterExtra}</div>
          <div className="display-italic text-ink-500">…einfach besser!</div>
        </div>
      </div>
    </footer>
  );
}
