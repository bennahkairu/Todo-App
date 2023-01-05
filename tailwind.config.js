/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{vue,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        "2xl": "600px",
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "hsl(0, 0%, 9%)",
      purple: "hsl(280, 87%, 65%)",
      blue: {
        100: "hsl(220, 98%, 61%)",
        500: "hsl(235, 24%, 19%)",
        900: "hsl(235, 21%, 11%)",
      },
      "gray-blue": {
        100: "hsl(236, 33%, 92%)",
        200: "hsl(234, 39%, 85%)",
        300: "hsl(233, 11%, 84%)",
        500: "hsl(237, 14%, 26%)",
        600: "hsl(236, 9%, 61%)",
        700: "hsl(235, 19%, 35%)",
        800: "hsl(234, 11%, 52%)",
        900: "hsl(233, 14%, 35%)",
      },
      "sky-blue": "hsl(192, 100%, 67%)",
    },
    extend: {},
  },
  plugins: [],
};
