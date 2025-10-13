/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1B1B1E',
        grey: '#4A4240',
        smoke_grey: '#ECD1B4',
        blackberry: '#302D2E',
        gold: '#9E7758',
        brown: '#705748',
        weird_grey: '#C2C1BF',
        cream: '#E5E0DA',
        nav: '#213138',
      },
      fontFamily: {
        forum: ['Forum', 'serif'],
        'antic-didone': ['Antic Didone', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
