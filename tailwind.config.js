/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        general: {
          primary: "var(--color-general-primary)",
          secondary: "var(--color-general-secondary)",
          light: "var(--color-general-light)",
          background: "var(--color-general-background)",
          border: "var(--color-general-border)",
          bglight: "var(--color-general-bglight)",
          bgdark: "var(--color-general-bgdark)",
        },
        secondary: "var(--color-secondary)",
        accent: {
          green: "var(--color-accent-green)",
          red: "var(--color-accent-red)",
          orange: "var(--color-accent-orange)",
        },

        icon: {
          primary: "var(--color-icon-primary)",
        },
        text: {
          primary: "var(--color-text-primary)",
        },

        basePrimary: "var(--color-base-primary)",
      },

      backgroundImage: {
        "header-dark": "url('/assets/images/stars.png')",
        "header-white": "url('/assets/images/stars.png')",
      },
    },
  },
};
