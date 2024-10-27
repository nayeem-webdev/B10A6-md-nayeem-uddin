/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(14, 122, 129, 1)",
        primary15: "rgba(14, 122, 129, 0.15)",
        primary20: "rgba(14, 122, 129, 0.2)",
        text: "rgba(19, 19, 19, 1)",
        text70: "rgba(19, 19, 19, 0.7)",
        text60: "rgba(19, 19, 19, 0.6)",
      },
    },
  },
  plugins: [],
};
