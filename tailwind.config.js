/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}

