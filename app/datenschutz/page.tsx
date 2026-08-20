import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Datenschutz" };

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title={<>Datenschutz</>} />
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-10">
          <Reveal>
            <GlassCard className="p-6 sm:p-10">
              <div className="space-y-4 text-sm leading-relaxed text-ink-500">
                <p>
                  Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Wir behandeln Ihre
                  Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften
                  sowie dieser Datenschutzerklärung.
                </p>
                <p>
                  Diese Website erhebt personenbezogene Daten nur, soweit dies für die
                  Bereitstellung der Inhalte erforderlich ist. YouTube-Videos werden erst nach
                  Klick geladen (nocookie-Modus). Externe Karten-Dienste werden nur nach
                  ausdrücklicher Nutzung geladen.
                </p>
                <p>
                  Für Detailfragen wenden Sie sich bitte an die auf der Kontaktseite genannte
                  Adresse.
                </p>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
