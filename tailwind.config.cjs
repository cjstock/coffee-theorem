/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      coffee: {
        100: "#83593E",
        200: "#63412D",
        300: "#543624",
        400: "#39241A",
        500: "#241710",
      },
      matcha: {
        100: "#7AC45A",
        200: "#51823C",
        300: "#3F662F",
        400: "#28401D",
        500: "#192913",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
