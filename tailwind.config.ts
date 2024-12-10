import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#00d9ff",
        "purple-900": "#3d0066",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: '0' },
          "100%": { transform: "translateY(0)", opacity: '1' },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100px)", opacity: '0' },
          "100%": { transform: "translateX(0)", opacity: '1' },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100px)", opacity: '0' },
          "100%": { transform: "translateX(0)", opacity: '1' },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px #00d9ff, 0 0 20px #00d9ff" },
          "50%": { boxShadow: "0 0 20px #00d9ff, 0 0 40px #00d9ff" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 2s ease-in-out",
        "slide-up": "slide-up 2s ease-in-out",
        "slide-in-left": "slide-in-left 2s ease-in-out",
        "slide-in-right": "slide-in-right 2s ease-in-out",
        glow: "glow 2s infinite alternate",
        bounce: "bounce 1.5s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;

