const colors = require('tailwindcss/colors');

module.exports = {
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
      heading: ['Dela Gothic One', 'cursive'],
    },
    extend: {
      colors: {
        primary: {
          500: colors.emerald[500],
          600: colors.emerald[600],
        },
        dark: {
          800: '#090809',
          700: '#292A2C',
        },
        typo: colors.neutral,
      },
    },
  },
  plugins: [],
};
