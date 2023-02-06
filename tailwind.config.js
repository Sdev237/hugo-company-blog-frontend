const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      orange: '#ff4500',
      lightOrange: colors.orange
    },
  },
  plugins: [],
}
