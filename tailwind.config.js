/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#8BD39E',
        'dark-green': '#2F8F51',
        'light-red': '#F39A9A',
        'dark-red': '#B33A3A',
        'bg-gray': '#F4F6F8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
