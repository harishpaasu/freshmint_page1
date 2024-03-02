/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens :{
      ssm :"375px",
      md :"640px",
      lg :"768px",
      xl :"1024px",
    },
    extend: {
      fontFamily:{
        "primary":["poppins"]
      }
    },
  },
  plugins: [],
}

