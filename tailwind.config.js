/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Raleway",
      serif: "Danfo",
    },
    extend: {
      colors: {
        yellow: "#fbbf24",
        black: "#111827",
        purple: "#3730a3",
        white: "#f9fafb",
      },
    },
  },
  plugins: [],
};
