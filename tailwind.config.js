module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hov: "#FAFF00",
        p: "#FFFAC2",
        blur: "rgba(181, 132, 132, 0.19)",
      },
      fontFamily: {
        font1: ["Charm", "cursive"],
        font2: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
