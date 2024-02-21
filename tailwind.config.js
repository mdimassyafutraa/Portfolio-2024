/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      poppins: ['poppins'],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        background: '#080D27',
        primary: '#0080f8',
        secondary: '#012c64',
        navbar: '#020617',
        font: '#DCF2F1',
      },
      screens: {
        '2xl': '1320px',
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);',
      },
      animation: {
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
};
