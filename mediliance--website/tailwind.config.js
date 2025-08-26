/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cool: ['Delmon Delicate', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
