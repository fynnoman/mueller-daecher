import {
  Home, Siren, Hammer, RectangleHorizontal, Snowflake,
  DoorOpen, Frame, Building, Send, FileBarChart,
  type LucideIcon
} from "lucide-react";
import type { LeistungIconName } from "@/lib/data";

const map: Record<LeistungIconName, LucideIcon> = {
  steilflach: Home,
  notfall: Siren,
  holz: Hammer,
  dachfenster: RectangleHorizontal,
  daemmung: Snowflake,
  gauben: DoorOpen,
  balkon: Frame,
  fassade: Building,
  drohne: Send,
  energie: FileBarChart
};

export default function LeistungIcon({ name, className }: { name: LeistungIconName; className?: string; }) {
  const Comp = map[name] ?? Home;
  return <Comp className={className} strokeWidth={1.6} />;
}
