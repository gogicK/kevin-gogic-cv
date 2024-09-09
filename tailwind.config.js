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
      keyframes: {
        wiggle: {
          '0%, 7%': { transform: 'rotate(0deg)' },
          '15%': {
            transform: 'rotate(-15deg)'
          },
          '20%': {
            transform: 'rotate(10deg)'
          },
          '25%': {
            transform: 'rotate(-10deg)'
          },
          '30%': {
            transform: 'rotate(6deg)'
          },
          '35%': {
            transform: 'rotate(-4deg)'
          },
          '40%': {
            transform: 'rotate(0deg)'
          }
        }
      },
      colors: {
        primary: "#6366f1",
        primaryDark: "#4338ca",
        secondary: "#6abaa3",
        secondaryDark: "#136b57",
        white: "#F2F3F5",
        black: "#1f2937",
        blackLight: "#64748b"
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        'hero': "url('../public/images/background.jpg')",
        'underConstruction': "url('../public/images/under-construction.png')",
        'pattern': "url('../public/images/pattern.svg')"
      }
    }
  },
  plugins: [],
}

