/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#160B16",
        "yellow": {
          'portfolio':'#FCFF73',
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
