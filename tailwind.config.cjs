/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "hsl(259, 100%, 65%)",
      lightRed: "hsl(0, 100%, 67%)",
      white: "hsl(0, 0%, 100%)",
      offWhite: "hsl(0, 0%, 94%)",
      lightGrey: "hsl(0, 0%, 86%)",
      smokeyGrey: "hsl(0, 1%, 44%)",
      offBlack: "hsl(0, 0%, 8%)",
    },
    extend: {
      fontSize: {
        fontSizeInput: "32px",
      },
      fontFamily: {
        Poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
