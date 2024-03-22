/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#121063',
        'darkcyan': '#008B8B'
      },
      fontFamily: {
        'shadow': ["Shadows Into Light", "cursive"],
        'roboto-m': ["Roboto", "sans - serif"]
      },
      daisyui: {
        themes: ["light", "dark", "cupcake"],
      },
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")]
}
