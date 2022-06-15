/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  purge: ['./index.html'],
  content: ['src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#10111a',
        'pale-red': '#f37a53',
        'pale-green': '#48ba9e',
        'pale-purple': '#c864c1',
      },
      fontFamily: {
        code: ['Cascadia Code', 'monospace'],
      },
      keyframes: {
        'shake-vertical': {
          '0%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'color-change': {
          '0%': {
            color: '#f37a53',
          },
          '50%': {
            color: '#48ba9e',
          },
          '100%': {
            color: '#c864c1',
          },
        },
      },
      animation: {
        'shake-vertical': 'shake-vertical 2s ease-in-out infinite',
        'color-change': 'color-change 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
