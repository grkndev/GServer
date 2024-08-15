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
        background: '#121212',
        card: '#1f1f1f',
      }
    },
  },
  plugins: [],
}

