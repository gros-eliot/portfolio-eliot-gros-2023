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
        }
      },

      fontFamily: {
        "inter":["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}
