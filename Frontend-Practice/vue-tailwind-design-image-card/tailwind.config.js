/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      spacing: {
        '5/6': '83.333334%'        
      }
    },
  },
  plugins: [],
}
