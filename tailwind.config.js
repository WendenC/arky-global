/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-custom': '600px',
        'tablet': '900px',
        'medium': '1280px', // 1280px até 1440px
        'desktop': '1441px', // A partir de 1441px
      },
      colors: {
        'green01': '#00473b',
        'green02': '#27c4aa',
        'green': '#09ed7b',
        'red': '#e93131',
        'grey01': '#b9b9b9',
        'grey02': '#f4f4f4',
        'grey03': '#eaeaea',
        'grey04': '#9c9c9c',
        'black01': '#0d0d0d',
        'black02': '#1f1f1f',
      },
      fontFamily: {
        'sans': ['Inter', 'Open Sauce Two', 'sans-serif'],
        'avapore': ['Inter', 'Avapore', 'sans-serif'],
        'orkney': ['Inter', 'Orkney', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

