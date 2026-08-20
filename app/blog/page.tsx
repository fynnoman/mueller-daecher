import PageHero from "@/components/PageHero";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import YouTubeCard from "@/components/YouTubeCard";
import { ArrowUpRight } from "lucide-react";
import { BLOG_TEASER, YT_VIDEOS } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata = {
  title: "Blog",
  description: "MÜLLERDÄCHER® Blog und Imageinterviews mit DDM Patrick Müller."
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="MÜLLERDÄCHER® Blog"
        title={<>Beiträge & <span className="display-italic text-roof-500">Imageinterviews.</span></>}
        image={IMG.teamBaustelle}
        imageAlt="Blog"
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal>
            <h2 className="display text-3xl text-ink-900 sm:text-4xl">Imageinterview-Serie</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {YT_VIDEOS.map((v, i) => (
              <Reveal key={v.id} delay={i * 0.06}>
                <YouTubeCard id={v.id} title={v.title} tag={v.tag} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-10">
          <Reveal>
            <h2 className="display text-3xl text-ink-900 sm:text-4xl">Beiträge</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {BLOG_TEASER.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
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
    </>
  );
}
