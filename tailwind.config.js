/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f1f9fa',
          100: '#dceff1',
          200: '#bde0e4',
          300: '#8fcad1',
          400: '#5baab5',
          500: '#3f8f9b',
          600: '#3b7d8c',
          700: '#32606c',
          800: '#30505a',
          900: '#2b444e',
          950: '#192c33',
        },

        yellow: {
          50: '#fff9e6',
          100: '#ffecc6',
          200: '#fed06c',
          300: '#febf4b',
          400: '#f78409',
          500: '#db5e04',
          600: '#b63f07',
          700: '#93310d',
          800: '#79290e',
          900: '#461202',
        },
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['tv'],
}
