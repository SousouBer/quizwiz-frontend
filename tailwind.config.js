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
        "dark-blue-gray": "#101828",
        "light-gray": "#D0D5DD",
        "cerulean-blue": "#4B69FD",
        "pale-yellow": "#FEF6E7",
        "light-pink": "#FCE7F1",
        "vibrant-orange": "#FF5613",
        "saturated-blue": "#4B69FD",
        "medium-dark-gray": "#667085",
        "very-light-gray": "#F6F6F7",
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
