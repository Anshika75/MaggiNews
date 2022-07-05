/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right bottom, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url('https://images.unsplash.com/photo-1526667383715-3c42cbae3d60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
      },
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
