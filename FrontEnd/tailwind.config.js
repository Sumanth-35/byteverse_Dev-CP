/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Manrope"," sans-serif"]
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}