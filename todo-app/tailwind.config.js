module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile-dark': 'url("/src/public/bg-mobile-dark.jpg")',
        'hero-mobile-light': 'url("/src/public/bg-mobile-light.jpg")',
        'hero-desktop-dark': 'url("/src/public/bg-desktop-dark.jpg")',
        'hero-desktop-light': 'url("/src/public/bg-desktop-light.jpg")',
        check: 'url("/src/public/icon-check.svg")',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '25%': {
            transform: 'translateX(-10px)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
          '75%': {
            transform: 'translateX(10px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
