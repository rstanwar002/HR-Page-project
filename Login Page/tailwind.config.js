/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightseagreen: "#54beb8",
        gray: {
          "100": "#181818",
          "200": "rgba(26, 23, 23, 0.53)",
          "300": "rgba(26, 23, 23, 0.38)",
          "400": "rgba(0, 0, 0, 0.12)",
        },
        seagreen: "#279574",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      xl: "20px",
      "5xl": "24px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
