/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        priTitle:"#929AA6",
        priContent:"#FFFFFF",
        priSubContent:"#BFBFBF",
        priBase:"#BFBFBF",
        priAccent:"#FFFFFF",
        priBG:"#252626"
      }
    },
  },
  plugins: [],
}

