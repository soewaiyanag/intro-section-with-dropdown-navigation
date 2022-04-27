const defaultTheme = require("tailwindcss/defaultTheme");

let containerScreens = { ...defaultTheme.screens };

delete containerScreens["2xl"];

module.exports = {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    container: {
      screens: containerScreens,
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        "almost-white": "hsl(0, 0%, 98%)",
        "medium-grey": "hsl(0, 0%, 41%)",
        "almost-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
