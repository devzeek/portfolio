/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
        raleway: ['Raleway'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: 'class',
}
