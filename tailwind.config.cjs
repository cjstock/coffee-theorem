/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          100: "#CE9B75",
          200: "#A87853",
          300: "#825736",
          400: "#5B3A20",
          500: "#351F0E",
        },
        matcha: {
          100: "#A5EA89",
          200: "#7CC061",
          300: "#5A9840",
          400: "#3C7026",
          500: "#224813",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
