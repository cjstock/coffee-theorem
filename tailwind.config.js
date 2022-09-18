/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            coffee: {
                100: "#7B5137",
                200: "#5C3B29",
                300: "#392419",
                400: "#20130C",
                500: "#130A05",
            },
            matcha: {
                100: "#77BB5B",
                200: "#619848",
                300: "#4B7938",
                400: "#395F2A",
                500: "#29471D",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
