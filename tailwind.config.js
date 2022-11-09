module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_900: "#2d3748",
        black_900_99: "#00000099",
        blue_700: "#3182ce",
        indigo_50: "#e2e8f0",
        gray_900: "#171923",
        bluegray_100: "#cccccc",
        white_A700: "#ffffff",
        blue_50: "#ebf8ff",
      },
      borderRadius: { radius6: "6px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
