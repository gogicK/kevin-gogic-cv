/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '698px',
      lg: '1022px'
    },
    extend: {
      colors: {
        primary: "#6366f1",
        primaryDark: "#4338ca",
        secondary: "#6abaa3",
        secondaryDark: "#136b57",
        white: "#F2F3F5",
        black: "#1f2937",
        blackLight: "#64748b",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero': "url('../public/images/background.jpg')",
        'underConstruction': "url('../public/images/under-construction.png')",
        'pattern': "url('../public/images/pattern.svg')"
      },
    },
  },
  plugins: [],
}

