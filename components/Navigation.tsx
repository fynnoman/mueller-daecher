"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { NAV, BETRIEB } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const pathname = usePathname();
  const lastRef = useRef(false);

  const onScroll = useCallback(() => {
    const next = window.scrollY > 60;
    if (next !== lastRef.current) {
      lastRef.current = next;
      setCondensed(next);
    }
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed inset-x-0 top-0 z-50 flex justify-center px-3 transition-[padding] duration-500 ease-out sm:px-6",
          condensed ? "pt-2" : "pt-4"
        )}
      >
        <nav
          className={clsx(
            "glass-pill flex max-w-6xl items-center justify-between gap-3 px-3 transition-[width,padding,border-radius] duration-500 ease-out sm:px-5",
            condensed ? "w-[86%] rounded-full py-1.5" : "w-[96%] rounded-2xl py-2.5"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <div className={clsx(
              "relative overflow-hidden transition-all duration-500",
              condensed ? "h-8 w-32" : "h-11 w-44"
            )}>
              <Image
                src={IMG.logo}
                alt="MÜLLERDÄCHER ...einfach besser!"
                fill priority sizes="192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={clsx(
                      "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active ? "text-ink-800" : "text-ink-500 hover:text-ink-800"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-signal-400 ring-1 ring-inset ring-ink-800/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${BETRIEB.phoneRaw}`}
              className={clsx(
                "hidden items-center gap-2 rounded-full border border-ink-800/10 bg-white/60 px-3.5 py-2 text-xs font-medium text-ink-600 transition hover:bg-white sm:inline-flex",
                condensed && "sm:hidden md:inline-flex"
              )}
            >
              <Phone size={13} className="text-roof-500" />
              {BETRIEB.phone}
            </a>
            <Link
              href="/kontakt"
              className="group hidden items-center gap-1.5 rounded-full bg-ink-800 px-4 py-2 text-sm font-semibold text-signal-400 transition hover:bg-ink-700 md:inline-flex"
            >
              Festpreis anfragen
              <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-800/10 bg-white/60 text-ink-800 transition hover:bg-white lg:hidden"
              aria-label="Menü öffnen"
              onClick={() => setOpen(true)}
            >
              <Menu size={17} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-stretch justify-end lg:hidden"
          >
            <div className="absolute inset-0 bg-paper-100/80" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative ml-auto flex h-full w-full max-w-sm flex-col gap-8 overflow-y-auto bg-paper-50 p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                  <div className="relative h-9 w-40">
                    <Image src={IMG.logo} alt="MÜLLERDÄCHER" fill sizes="160px" className="object-contain object-left" />
                  </div>
                </Link>
                <button
                  type="button" onClick={() => setOpen(false)} aria-label="Menü schließen"
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink-800/10 bg-white text-ink-800"
                >
                  <X size={17} />
                </button>
              </div>
              <nav className="flex flex-col">
                {NAV.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href} href={item.href} onClick={() => setOpen(false)}
                      className={clsx(
                        "block border-b border-ink-800/5 py-4 display text-3xl tracking-tight",
                        active ? "text-roof-500" : "text-ink-800"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href={`tel:${BETRIEB.phoneRaw}`}
                  className="inline-flex items-center gap-3 rounded-2xl border border-ink-800/10 bg-white px-5 py-4 text-sm text-ink-800"
                >
                  <Phone size={16} className="text-roof-500" /> {BETRIEB.phone}
                </a>
                <Link
                  href="/kontakt" onClick={() => setOpen(false)}
                  className="rounded-2xl bg-ink-800 px-5 py-4 text-center text-sm font-semibold text-signal-400"
                >
                  Festpreis anfragen
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
