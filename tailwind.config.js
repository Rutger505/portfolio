/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // just in time compiler faster build times
  content: ["./src/*.{html,js}"],
  theme: {
    colors: {
      primary: "#242734",
      secondary: "#1E212E",
      accent: "#FF4A57",
      textPrimary: "#EDEDED",
      textSecondary: "#EFEDFDB5",
      textHeader: "#EDEDED",

      red: "#FF0000",
      green: "#00FF00",
      blue: "#0000FF",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

