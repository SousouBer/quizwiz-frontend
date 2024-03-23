/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        12: "1.2",
      },
      colors: {
        paleBlue: "#EAFAFE",
        charcoal: "#344054",
        "grayish-blue": "#667085",
        "light-gray": "#D0D5DD",
        "cerulean-blue": "#4B69FD",
        "pale-yellow": "#FEF6E7",
        "light-pink": "#FCE7F1",
      },
      width: {
        "custom-45": "45%",
      },
      padding: {
        4.5: "1.125rem",
      },
    },
  },
  plugins: [],
};
