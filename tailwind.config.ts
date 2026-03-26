import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        foreground: "#ffffff",
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          foreground: "#ffffff",
        },
        primary: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#2563eb",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "#a1a1aa",
        },
        accent: {
          DEFAULT: "#22c55e",
          foreground: "#ffffff",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
        "gradient-glow": "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "counter": "counter 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(124, 58, 237, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
