/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        priTitle:"#99B1BF",
        priContent:"#FFFFFF",
        priSubContent:"#404040",
        priBase:"#BFBFBF",
        priAccent:"#FFFFFF",
        priBG:"#252626"
      },
      fontFamily: {
        kanit :["Kanit", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
          'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
          'gradient': {
              to: { 'background-position': '200% center' },
          }
      }     
    },
  },
  plugins: [],
}

