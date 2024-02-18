/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        Bold: ["Bold"],
        Semibold: ["SemiBold"],
        Regular: ["Regular"],
        Light: ["Light"],
      },
      colors:{
        background: '#030303',
        card: '#0e0e0e',
      }
    },
  },
  plugins: [],
}

