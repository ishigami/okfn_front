/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': '"Hanken Grotesk", sans-serif',
        'mono': '"DM Mono", sans-serif',
        'display': '"DM Sans", sans-serif',
      },
      fontSize: {
        '2xs': '.6875rem',
        '5xl_2': '3.4375rem',
      },
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
      gridColumnEnd: {
        '14': '14',
        '15': '15',
      },
      borderWidth: {
        '3': '3px',
      },
      colors: {
        primary: {
          DEFAULT: '#00d1ff', // pastel blue light
        },
        'secondary': {
          DEFAULT: '#adffed' // pastel green light
        },
        'tertiary': {
          DEFAULT: '#e077ff' // pink
        },
        'quaternary': {
          DEFAULT: '#e4ff36' // lime
        },
      },
      spacing: {
        '3': '0.75rem',
        '24': '6rem',
      },
      screens: {
        'portrait': {'raw': '(orientation: portrait)'},
        'landscape': {'raw': '(orientation: landscape)'},
      },
    },
  },
  plugins: [],
}
