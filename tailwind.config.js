/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'sky' : '#BEDFE9',
      'cream' : '#FAD5A8',
      'purple' : '#9384AD',
      'black' : '#000000',
      'white' : '#FFFFFF',
      'green' : '#779154',
      'yellow' : '#E57D60',
      'chathai' : '#E57D60',
      'red' : '#FF0000',
      'gray' : '#F2F2F2',
      'darkgreen' : '#5EAB61'
    },
    fontFamily: {
      'itim' : "'Itim', cursive",
      'Gymno' : "'Gymno'",
    },
    extend: {},
  },
  plugins: [],
}

