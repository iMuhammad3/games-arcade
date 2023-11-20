/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        "slate-750": "rgb(45,52,80)",
        "slate-850": "rgb(27,37,65)",
        "slate-950": "rgb(7,16,40)",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
}
