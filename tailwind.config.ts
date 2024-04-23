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
          blue: "var(--blue)",
          "dark-blue": "var(--dark-blue)",
          "light-blue": "var(--light-blue)",
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
