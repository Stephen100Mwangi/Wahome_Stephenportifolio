/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        card: '#0F1035',
        orange: '#FF7F3E',
        text: '#000000',
        back: '#EEEEEE',
        hover: '#C7C8CC',
        white: '#FFFFFF',
        cardColor: '#f9f9f9',
      },
    },
  },
  plugins: [],
};
