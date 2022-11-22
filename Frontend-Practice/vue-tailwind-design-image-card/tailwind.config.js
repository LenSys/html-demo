/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%'
      }
    },
  },
  plugins: [],
}
