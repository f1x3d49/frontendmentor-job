/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        background: "hsl(180, 52%, 96%)",
        filter: "hsl(180, 31%, 95%)",
        dgcyan: "hsl(180, 8%, 52%)",
        vdgcyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        primary: ["League Spartan", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('./images/bg-header-mobile.svg')",
        desktop: "url('./images/bg-header-desktop.svg')",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
