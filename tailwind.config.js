const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: { min: "641px", max: "1023px" },

        laptop: { min: "1024px", max: "1535px" },

        desktop: { min: "1536px" },
      },
      fontFamily: {
        LOL: ["Beaufort for LOL"],
      },
      colors: {
        c89b3c: "#c89b3c",
        ffae00: "#ffae00",
        F0E6D2: "#F0E6D2",
      },
      spacing: {
        2.38: "2.38rem",
        3.81: "3.81rem",
        1.37: "1.37rem",
      },
      width: {
        31.875: "31.875rem",
        23.875: "23.875rem",
      },
      height: {
        12.022: "12.022rem",
      },
    },
  },
  plugins: [],
});
