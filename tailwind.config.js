/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "slate-850": "rgb(27,37,55)",
        "slate-950": "rgb(7,16,40)",
      }
    }
  },
  plugins: []
}
