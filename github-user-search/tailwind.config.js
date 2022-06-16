/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        '404-bg': 'url(/src/public/404-bg.jpg)',
      },
    },
  },
  plugins: [],
}
