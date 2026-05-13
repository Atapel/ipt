import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF7F2",
          100: "#F5EFE6",
          200: "#EDE2D2",
        },
        sage: {
          50: "#F1F4EE",
          100: "#DDE5D5",
          200: "#BFCDB1",
          400: "#8AA17B",
          500: "#6B855B",
          600: "#536B45",
          700: "#3F5235",
        },
        rose: {
          50: "#FBF1ED",
          100: "#F5DDD2",
          200: "#EBBCA8",
          400: "#D88770",
          500: "#C66B53",
          600: "#A85540",
        },
        ink: {
          900: "#1F2A22",
          700: "#384438",
          500: "#5B6A5B",
          400: "#7A8A7A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        prose: "65ch",
        content: "1180px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
