/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "portfolio-black": "#101314",
        "portfolio-charcoal-black": "#36454F",
        "portfolio-gray":"#9A9A9A",
      },
      fontFamily:{
        "helvetica-neue":['Helvetica Neue', 'sans-serif'],
        "outfit":['Outfit', 'sans-serif'],
      },
      screens:{
        "smallest-screen":"320px"
      },
    },
  },
  plugins: [],
}

