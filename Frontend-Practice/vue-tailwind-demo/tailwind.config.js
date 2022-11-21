/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1992d4',
        'brand-blue-300': '#29A2e4',
        'brand-blue-600': '#0982c4'
      },
      spacing: {
        '72': '18rem'
      }
    },
  },
  plugins: [],
}
