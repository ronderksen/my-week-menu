module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkCyan: "#2c8b87",
        rosyBrown: "#bd9391",
        russianViolet: "#320e3b",
        lightCyan: "#d9fff5",
        magicMint: "#b9f5d8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
