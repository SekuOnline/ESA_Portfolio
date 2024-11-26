/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      titled: ["Proxima-Nova"],
      regular: ["Avenir"],
    },

    extend: {
      keyframes: {
        slideOut: {
          "0%": { transform: "translateX(-100%)" },
        },
        slideIn: {
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideOut: "slideOut 0.6s ease-in-out forwards",
        slideIn: "slideIn 0.6s ease-in-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        EmmaPurple: "#B593FF",
        EmmaHlPurple: "#E4D8FF",
        EmmaLBlue: "#BDC5E7",
      },
    },
  },
  plugins: [],
};
