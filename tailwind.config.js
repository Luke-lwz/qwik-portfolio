/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          
          "primary": "#154b77",
                   
          "secondary": "#ffcec6",
                   
          "accent": "#99ffcd",
                   
          "neutral": "#292B32",
                   
          "base-100": "#2B3146",
                   
          "info": "#7289DF",
                   
          "success": "#71E59F",
                   
          "warning": "#D08216",
                   
          "error": "#EC7994",
                   },
      },
    ],
  },
}