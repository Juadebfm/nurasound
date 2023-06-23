/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
        BaiJamjuree: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        "Nura-Dark": "#171717",
        "Nura-Green": "#7DFB5D",
        "Nura-Light-Grey": "#E5E5E5",
        "Nura-Btn-Blue": "#3333F5",
      },
      fontSize: {
        "header-1": "68px",
        "header-2": "28px",
        "header-3": "34px",
        "header-4": "39px",
      },
      borderColor: {
        gradient: "linear-gradient(to right, #de48f7, #f8d481, #ccff02)",
      },
    },
  },
  plugins: [],
};
