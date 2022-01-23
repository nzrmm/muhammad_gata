const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      heading: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          500: colors.emerald[500],
          600: colors.emerald[600],
        },
        dark: {
          800: '#001f24',
          700: '#152d32',
        },
        typo: colors.neutral,
      },
    },
  },
  plugins: [],
};
