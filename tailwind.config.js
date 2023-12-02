/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}", "../src/**/*"],

  theme: {
    extend: {
      colors: {
        // Primary text color: white
        primaryText: "#FFFFFF",

        // Secondary text color: black
        secondaryText: "#000000",

        // Dark purple primary color
        primary: "#071420",

        // White secondary color
        secondary: "#FFFFFF",

        // Yellow tertiary color
        tertiary: "#FFD700",
      },
      borderRadius: {
        // Default border radius of 10px
        default: "4px",
      },
    },
  },
  plugins: [],
};
