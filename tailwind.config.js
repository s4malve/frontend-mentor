module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-xs': '320px',
        'mobile-s': '375px',
        'mobile-l': '425px',
        'tablet-md': '768px',
        'desktop-lg': '1024px',
      },
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
