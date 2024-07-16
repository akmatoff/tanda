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
        "primary": "#1e90ff",
        "placeholder": "#B0B0B0"
      },
      borderRadius: {
        "primary": "16px"
      }
    },
  },
  plugins: [],
}