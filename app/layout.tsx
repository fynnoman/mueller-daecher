import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NotfallSticky from "@/components/NotfallSticky";
import { BETRIEB } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "MÜLLERDÄCHER® · Alles für Dach und Fassade aus Meisterhand · Saarland",
    template: "%s · MÜLLERDÄCHER®"
  },
  description:
    "MÜLLERDÄCHER® aus Ensdorf/Saarland — Dachdeckermeisterbetrieb Patrick Müller. Alles für Dach und Fassade aus Meisterhand. Zum Festpreis. Garantiert. 24 h Notfall.",
  keywords: [
    "Dachdecker Saarland", "Dachdecker Ensdorf", "Müller Dächer",
    "MÜLLERDÄCHER", "Patrick Müller", "Dachsanierung Saarland",
    "Flachdach", "Dachfenster", "Fassade", "Vordach-Sanierung", "Balkon WPC"
  ],
  openGraph: {
    title: "MÜLLERDÄCHER® · einfach besser",
    description: "Alles für Dach und Fassade aus Meisterhand. Zum Festpreis. Garantiert.",
    locale: "de_DE",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Anton&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative min-h-screen antialiased">
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
        <NotfallSticky />
      </body>
    </html>
  );
}
