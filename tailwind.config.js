/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'index.html',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        "slate-750": "rgb(45,52,80)",
        "slate-850": "rgb(27,37,65)",
        "slate-950": "rgb(7,16,40)",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "serif": ["Nunito", "serif"]
      }
    }
  },
  plugins: []
}