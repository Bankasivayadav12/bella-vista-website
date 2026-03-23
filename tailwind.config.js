/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: "#F97316",        // Orange (CTA)
        primaryDark: "#EA580C",

        // Backgrounds
        secondary: "#0F172A",      // Dark blue/black
        accent: "#1E293B",         // Section bg
        light: "#F8FAFC",          // Light bg

        // Text
        textPrimary: "#0F172A",
        textSecondary: "#64748B",

        // UI
        border: "#E2E8F0",
        white: "#FFFFFF",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },

      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};