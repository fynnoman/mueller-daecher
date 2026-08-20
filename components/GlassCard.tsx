import type { ReactNode } from "react";
import clsx from "clsx";

export default function GlassCard({
  children, className, variant = "paper"
}: {
  children: ReactNode; className?: string;
  variant?: "paper" | "lift" | "glass";
}) {
  const variantClass =
    variant === "lift" ? "paper-card-lift"
    : variant === "glass" ? "glass-light"
    : "paper-card";
  return (
    <div className={clsx(
      "group relative overflow-hidden rounded-3xl transition-shadow duration-500 hover:shadow-lift",
      variantClass, className
    )}>
      {children}
    </div>
  );
}
