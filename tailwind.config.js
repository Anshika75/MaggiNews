/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Exo': ['Exo', 'sans-serif'],
        'Geo': ['Geo', 'sans-serif'],
        'Palanquin': ['Palanquin', 'sans-serif'],
      },
      colors: {
        'yellow': '#F2B640',
        'white': '#FBFBFB',
        'bgwhite': "#f5f5f5",
      },
    }
  },
  plugins: [],
}
