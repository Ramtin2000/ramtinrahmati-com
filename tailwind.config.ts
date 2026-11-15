import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#0a0a0a",
        surface: "#121212",
        raised: "#161616",
        lp: {
          bg: "var(--lp-bg)",
          surface: "var(--lp-surface)",
          border: "var(--lp-border)",
          "border-strong": "var(--lp-border-strong)",
          text: "var(--lp-text)",
          muted: "var(--lp-muted)",
          subtle: "var(--lp-subtle)",
          link: "var(--lp-link)",
          accent: "var(--lp-accent)",
          "accent-hover": "var(--lp-accent-hover)",
          "accent-soft": "var(--lp-accent-soft)",
          "on-accent": "var(--lp-on-accent)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [],
};

export default config;
