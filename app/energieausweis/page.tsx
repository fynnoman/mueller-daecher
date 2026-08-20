import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Bedarfs- & Verbrauchsausweis",
  description: "Bedarfs- und Verbrauchsausweis. Von uns erhalten Sie alle Informationen rund um das Thema Energieausweis für Ihre Immobilie."
};

export default function EnergieausweisPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicebereich"
        title={<>Bedarfs- &<br /><span className="display-italic text-roof-500">Verbrauchsausweis.</span></>}
        intro="Von uns erhalten Sie alle Informationen rund um das Thema Energieausweis für Ihre Immobilie."
        image={IMG.heroRoof}
        imageAlt="Energieausweis"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-6 sm:px-10">
          <Reveal>
            <GlassCard variant="lift" className="relative overflow-hidden p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal-400/30 blur-2xl" />
              <p className="text-lg leading-relaxed text-ink-700">
                Energieausweise müssen nicht zwingend von einem Energieberater oder Schornsteinfeger
                vor Ort durchgeführt werden. Sie können Ihren Energieausweis auch einfach schnell
                und günstig mit <strong>MÜLLERIMMOBILIEN®</strong> online erstellen. Außerdem ist
                der Ausweis nach Zahlungseingang sofort verfügbar.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-700">
                Wenn Sie mit <strong>PayPal, Sofort-Überweisung oder SEPA-Lastschrift</strong> zahlen,
                ist Ihr Energieausweis innerhalb von Minuten in Ihrem E-Mail-Postfach. Bei der
                Zahlung per Überweisung wird der Energieausweis nach 1–2 Werktagen, nach
                Zahlungseingang, bereitgestellt.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://www.muellerimmobilien.info"
                  target="_blank" rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-bold text-signal-400 shadow-lift transition hover:bg-ink-700"
                >
                  Zu MÜLLERIMMOBILIEN®
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
