/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        active: "#F83463",
        customRed: "#F83463",
        customLightRed: "#FB547C",
        customGreen: "#1F9795",
        customLightGreen: "#EEFBFA",
        customDarkGreen: "#03526F",
        customBlueGreen: "#2BD4D1"
      }
    },
  },
  plugins: [],
}
