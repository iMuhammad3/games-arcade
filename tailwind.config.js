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
        "nightblue-800": "hsl(222.22,49.09%,10.78%)",
        "nightblue-900": "hsl(222.86,48.84%,8.43%)",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "serif": ["Nunito", "serif"]
      }
    }
  },
  plugins: []
}