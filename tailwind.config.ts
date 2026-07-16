import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        blush: "#FFE1EE",
        candy: "#FF7AAE",
        rosepop: "#FF4D8D",
        lilac: "#C8A2FF",
        grape: "#8A5CF6",
        deepgrape: "#5B2A9E",
        cream: "#FFF6FA",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(6deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        walk: {
          "0%": { transform: "translateX(0) scaleX(1)" },
          "100%": { transform: "translateX(var(--walk-distance, 260px)) scaleX(1)" },
        },
        pawStep: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
        },
        pop: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        ribbonOpen: {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "40%": { transform: "scale(1.08) rotate(-3deg)" },
          "100%": { transform: "scale(0) rotate(20deg)", opacity: "0" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        modalIn: {
          "0%": { opacity: "0", transform: "scale(0.94) translateY(10px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        modalOut: {
          "0%": { opacity: "1", transform: "scale(1) translateY(0)" },
          "100%": { opacity: "0", transform: "scale(0.94) translateY(-6px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
        pawStep: "pawStep 0.4s ease-in-out infinite",
        pop: "pop 0.5s cubic-bezier(.2,.9,.3,1.3) both",
        shimmer: "shimmer 3s linear infinite",
        sparkle: "sparkle 2.4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s cubic-bezier(.2,.9,.3,1.1) both",
        modalIn: "modalIn 0.4s cubic-bezier(.2,.9,.25,1.05) both",
        modalOut: "modalOut 0.26s ease-in both",
      },
    },
  },
  plugins: [],
};
export default config;
