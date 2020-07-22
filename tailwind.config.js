module.exports = {
  purge: [],
  theme: {
    extend: {
      maxHeight: {
        "64": "16rem",
        "80": "20rem",
        "128": "32rem",
        "256": "64rem",
      },
      height: {
        "80": "20rem",
        "128": "32rem",
        "256": "64rem",
      },
      maxWidth: {
        "64": "16rem",
        "80": "20rem",
        "128": "32rem",
        "256": "64rem",
      },
      width: {
        "80": "20rem",
        "128": "32rem",
        "256": "64rem",
      },
    },
  },
  variants: {
    gridColumn: ['responsive', 'first'],
    width: ['responsive', 'first'],
    height: ['responsive', 'first'],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@neojp/tailwindcss-line-clamp-utilities"),
  ],
};
