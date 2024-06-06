/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'MyImg': "url('/src/img/Myimg.png')",
        'Cpyler':"url('/src/img/cpyler.jpeg')"
      },
      colors: {
        'p': '#EB593A',
        'lines':'#acacac',
        'bgBlack':'#191b1c'
      },
      fontFamily: {
        sans: ["Fugaz One", "sans-serif"],
    },
    },
  },
  plugins: [],
}