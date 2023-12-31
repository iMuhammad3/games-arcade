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
        "nightblue-700": "hsl(218.29,45%,23.67%)",
        "nightblue-800": "hsl(222.22,49.09%,10.78%)",
        "nightblue-900": "hsl(224.86,61.84%,6.43%)",
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"],
        "serif": ["Nunito", "serif"]
      }
    }
  },
  plugins: []
}