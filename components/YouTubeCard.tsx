"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { ytThumb } from "@/lib/images";
import clsx from "clsx";

export default function YouTubeCard({
  id, title, tag, className
}: { id: string; title: string; tag?: string; className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={clsx("group relative aspect-video w-full overflow-hidden rounded-3xl bg-ink-900 shadow-lift", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 block cursor-pointer"
          aria-label={`Video abspielen: ${title}`}
        >
          <Image
            src={ytThumb(id)}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
            <div className="text-left text-white">
              {tag && <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-signal-400">{tag}</div>}
              <div className="mt-1 display text-xl leading-tight sm:text-2xl">{title}</div>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-signal-400 text-ink-800 shadow-lift transition group-hover:scale-110">
              <Play size={20} fill="currentColor" className="translate-x-0.5" />
            </span>
          </div>
        </button>
      )}
    </div>
  );
}
