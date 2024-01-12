/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  theme: {
    extend: {
      colors: {
        primary: colors.green
      }
    }
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

}

