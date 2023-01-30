/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray": {
          'portfolio':'#1F1F1F',
        },
        "amber": {
          'portfolio':'#FCD34D',
        },
        "yellow": {
          'portfolio':'#7DEF88',
        }
      },

      fontFamily: {
        "unbounded":["Unbounded", "sans-serif"],
        "rubik-mono-one":["Rubik Mono One", "sans-serif"],
      }
    },
  },
  plugins: [],
}
