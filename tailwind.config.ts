import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      "2xl-max": { max: "1535px" },
      "xl-max": { max: "1279px" },
      "lg-max": { max: "991.98px" },
      "md-max": { max: "767.98px" },
      "sm-max": { max: "479.98px" },
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontSize: {
      xs: "var(--fs-xs)",
      sm: "var(--fs-sm)",
      md: "var(--fs-md)",
      lg: "var(--fs-lg)",
      xl: "var(--fs-xl)",
      "2xl": "var(--fs-2xl)",
      "3xl": "var(--fs-3xl)",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          black: "var(--black)",
          blue: "var(--blue)",
          "dark-blue": "var(--dark-blue)",
          "light-blue": "var(--light-blue)",
          yellow: "var(--yellow)",
          "dark-gradient": "var(--dark-gradient)",
          error: "var(--red)",
        },
      },
      borderRadius: {
        1: "var(--border-radius)",
        2: "calc(var(--border-radius) * 2)",
        3: "calc(var(--border-radius) * 3)",
        4: "calc(var(--border-radius) * 4)",
        5: "calc(var(--border-radius) * 5)",
        10: "calc(var(--border-radius) * 10)",
        full: "50%",
      },
      boxShadow: {
        blue: "0px 0px 11px 0px var(--blue)",
      },
      minHeight: {
        screen: "calc(100vh - 102px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
