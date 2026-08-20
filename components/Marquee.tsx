import type { ReactNode } from "react";

export default function Marquee({
  children, duration = 45
}: { children: ReactNode; duration?: number; reverse?: boolean; }) {
  return (
    <div className="pointer-events-none relative flex w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-paper-100 to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-paper-100 to-transparent" />
      <div
        className="marquee-track flex min-w-max shrink-0 items-center gap-14"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
