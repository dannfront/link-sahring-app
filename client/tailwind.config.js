/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       "primary":"#633CFF",
       "secondary": "#BEADFF",
       "light-blue": "#EFEBFF",
       "black":"#000",
       "red": "#FF3939",
       "grey":"#737373",
       "DarkGrey":"#333333",
       "light-grey": "#D9D9D9",
       "white": "#fff",
       "White-bone": "#FAFAFA"
      }
    },
    
  },
plugins: [],
}