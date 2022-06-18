/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/bg-pattern.svg')",
        'pattern-cirlcles': "url('/pattern-circles.svg')",
      },
    },
  },
  plugins: [],
}
