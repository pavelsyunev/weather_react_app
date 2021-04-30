module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: (theme) => ({
      ...theme("colors"),
      orange: "#f7910c",
      grayLight: "#fafafa",
      grayMid: "#adafaf",
      grayDark: "#7a7c81",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      grayMid: "#adafaf",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
