/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['"Sora"', 'sans-serif'],
        DM_Sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

