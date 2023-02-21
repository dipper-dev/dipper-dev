/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Hatton', 'sans-serif']
    },
    colors: {
      'dark': '#000000',
      'light': '#ffffff',
      'primary': '#b4a8a0',
      'secondary': '#2b2a29',
      'accent': '#2f4858'
    }
  },
  plugins: [],
}
