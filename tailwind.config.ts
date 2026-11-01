import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--bg-primary)",
        surface: "var(--bg-elevated)",
        ink: "var(--text-primary)",
        muted: "var(--text-secondary)",
        hairline: "var(--border-hairline)",
        cobalt: "var(--accent-cobalt)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        editorial: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
