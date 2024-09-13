const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        lightModeShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Light mode shadow
        darkModeShadow: "0 4px 6px rgba(255, 255, 255, 0.1)", // Dark mode shadow
      },
      colors: {
        dark: {
          DEFAULT: "#15202b", // Replace with your preferred dark color
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        scaleUp: "scaleUp 2.5s ease-in-out",
        slideIn: "slideIn 1s ease-out forwards",
      },
    },
  },
  plugins: [nextui()],
};
