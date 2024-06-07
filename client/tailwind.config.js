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
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      slideOut: {
        '0%': { transform: 'translateX(0)', opacity: 1 },
        '100%': { transform: 'translateX(100%)', opacity: 0 },
      },
    },
    animation: {
      slideIn: 'slideIn 0.3s ease-out',
      slideOut: 'slideOut 0.3s ease-out',
    },
  },
  plugins: [],
}