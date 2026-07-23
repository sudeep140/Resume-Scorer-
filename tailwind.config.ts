import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#EDEEE8",
          light: "#F5F5F1",
          dark: "#E2E3DC",
        },
        ink: {
          DEFAULT: "#161F29",
          soft: "#3A4450",
          faint: "#6B7480",
        },
        pen: {
          DEFAULT: "#C4321F",
          light: "#E14B32",
          dark: "#9A2717",
        },
        pass: {
          DEFAULT: "#2F6B4F",
          light: "#DCE8DF",
        },
        warn: {
          DEFAULT: "#B4791F",
          light: "#F1E3CB",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        stamp: "0 0 0 1.5px rgba(196,50,31,0.35), 0 8px 24px -8px rgba(22,31,41,0.25)",
        card: "0 1px 2px rgba(22,31,41,0.06), 0 8px 24px -12px rgba(22,31,41,0.12)",
      },
      keyframes: {
        stampIn: {
          "0%": { opacity: "0", transform: "scale(1.6) rotate(-14deg)" },
          "60%": { opacity: "1", transform: "scale(0.94) rotate(-8deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-8deg)" },
        },
        underline: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        stampIn: "stampIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        underline: "underline 1.1s ease-out forwards",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
