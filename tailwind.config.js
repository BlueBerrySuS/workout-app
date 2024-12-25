/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'contrast': '0px 2px 4px 4px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gray-gradient': 'linear-gradient(-60deg, #000000 20%, #3A3A3A 45%, #3A3A3A 55%, #000000 80%)',
      },
      fontFamily: {
        'helvetica': ['"Helvetica NeueLTW0693BlkExtObl"', "sans-serif"],
        'roboto': ['"Roboto"', "sans-serif"],
      }
    },
  },
  plugins: [],
}


