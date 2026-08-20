import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Warm paper base (identical rhythm as A&S, slightly cooler)
        paper: { 50: "#FBF7EE", 100: "#F5EFDF", 200: "#EBE2C8", 300: "#D9CDA8" },
        // Deep anthracite / near-black
        ink: {
          400: "#4A4E56", 500: "#2A2E36", 600: "#1A1D24",
          700: "#111319", 800: "#0B0D12", 900: "#05070A"
        },
        // MÜLLERDÄCHER signal yellow (from logo)
        signal: {
          50: "#FFFAE1", 100: "#FFF3B8", 200: "#FEE97F",
          300: "#FCDB3E", 400: "#F9C81C", 500: "#E8B308",
          600: "#B98700", 700: "#8B6600"
        },
        // Roof tile red (from stamps)
        roof: {
          400: "#D25541", 500: "#B23A2F", 600: "#8E2A24", 700: "#671E1A"
        },
        // Emergency red (Notfall CTA)
        alarm: { 500: "#E1372A", 600: "#B92A20" },
        // Brass (from gold seal)
        brass: { 400: "#D0A752", 500: "#B08833", 600: "#8C6B22" }
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        stencil: ["var(--font-stencil)", "\"Anton\"", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 1px 3px rgba(11,13,18,0.06), 0 12px 40px -12px rgba(11,13,18,0.14)",
        lift: "0 20px 60px -20px rgba(11,13,18,0.28)",
        stamp: "0 4px 20px -6px rgba(178,58,47,0.35)"
      },
      keyframes: {
        ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } }
      }
    }
  },
  plugins: []
};

export default config;
