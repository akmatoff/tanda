/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary": "#f5f5f5",
        "primary": "#1e90ff"
      }
    },
  },
  plugins: [],
}