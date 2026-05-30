/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        meridian: {
          primary: "#3B82F6",
          secondary: "#8B5CF6",
          success: "#16A34A",
          warning: "#D97706",
          danger: "#DC2626",
          surface: "#FFFFFF",
          text: "#111827",
          ink: "#111827",
          mist: "#F9FAFB",
          violet: "#EFF6FF",
          line: "#E5E7EB",
        },
      },
      fontFamily: {
        display: ['"Poppins"', "system-ui", "sans-serif"],
        sans: ['"Roboto"', "system-ui", "sans-serif"],
        mono: ['"Inconsolata"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        soft: "0 10px 28px rgba(17, 24, 39, 0.06)",
        card: "0 14px 34px rgba(17, 24, 39, 0.08)",
        lift: "0 24px 55px rgba(17, 24, 39, 0.12)",
        glow: "0 16px 42px rgba(59, 130, 246, 0.16)",
      },
    },
  },
  plugins: [],
};
