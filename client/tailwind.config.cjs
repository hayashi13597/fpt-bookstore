/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#755139",
        second: '#d4b996'
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
}