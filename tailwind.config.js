/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm2: "704px",
      },
      colors: {
        pkgui: {
          primary: "#5bc0be",
          "primary-dim": "#3b9b99",
          accent: "#e4b95b",
        },
      },
      fontFamily: {
        display: [
          "JetBrains Mono",
          "SFMono-Regular",
          "SF Mono",
          "Consolas",
          "monospace",
        ],
        sans: [
          "Geist",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "SFMono-Regular",
          "SF Mono",
          "Cascadia Code",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "terminal": "0 0 60px rgba(91, 192, 190, 0.12)",
        "terminal-lg": "0 0 100px rgba(91, 192, 190, 0.15)",
      },

    },
  },
  plugins: [],
};
