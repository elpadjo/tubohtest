/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#656566',
        secondary: '#151C2B',
        accent: '#15008B',
        bg_1: '#E8E6F3',
        bg_2: '#F8F9FC',
      },
    },
  },
  plugins: [],
}

