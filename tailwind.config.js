/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [{
      coffeetheorem: {
        "primary": "#7ec160",
        "secondary": "#523525",
        "accent": "#9e6749",
        "neutral": "#120C12",
        "base-100": "#1f140d",
        "info": "#8CCAC1",
        "success": "#9CB686",
        "warning": "#FFD261",
        "error": "#FC9783",
      },
    }],
  }
};
