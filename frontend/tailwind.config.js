/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        modalFadeIn: {
          'from': {
            opacity: '0',
            transform: 'scale(0.95) translateY(-20px)',
          },
          'to': {
            opacity: '1',
            transform: 'scale(1) translateY(0)',
          },
        },
        slideDown: {
          'from': {
            opacity: '0',
            maxHeight: '0',
            transform: 'translateY(-10px)',
          },
          'to': {
            opacity: '1',
            maxHeight: '1000px',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'modalFadeIn': 'modalFadeIn 0.3s ease-out',
        'slideDown': 'slideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}