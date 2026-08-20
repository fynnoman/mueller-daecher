"use client";

import { useEffect, useState } from "react";
import { Siren, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BETRIEB } from "@/lib/data";

export default function NotfallSticky() {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6"
        >
          {expanded ? (
            <motion.div
              layout
              className="flex items-center gap-3 rounded-2xl bg-alarm-500 py-3 pl-4 pr-3 text-white shadow-2xl ring-1 ring-inset ring-black/10"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                <Siren size={18} />
              </div>
              <div className="text-sm leading-tight">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/85">24 h Notfall</div>
                <a href={`tel:${BETRIEB.mobileRaw}`} className="font-display text-lg leading-tight hover:underline">
                  {BETRIEB.mobile}
                </a>
              </div>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                aria-label="Notfall schließen"
                className="ml-1 grid h-8 w-8 place-items-center rounded-full bg-black/20 text-white transition hover:bg-black/40"
              >
                <X size={15} />
              </button>
            </motion.div>
          ) : (
            <motion.button
              layout
              type="button"
              onClick={() => setExpanded(true)}
              className="group flex items-center gap-2 rounded-full bg-alarm-500 py-2.5 pl-2.5 pr-4 text-sm font-bold text-white shadow-2xl ring-1 ring-inset ring-black/10 transition hover:bg-alarm-600"
            >
              <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white/15">
                <Siren size={16} />
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-60" />
              </span>
              <span className="hidden text-[11px] uppercase tracking-widest sm:inline">Notfall · 24 h</span>
              <Phone size={14} className="sm:hidden" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
