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
        "primary-light": "#E9F4FF",
        "placeholder": "#B0B0B0",
        "gray": "#757575",
        "badge": "#DEDEDE",
        "avatar": "#D9D9D9"
      },
      borderRadius: {
        "primary": "16px"
      }
    },
  },
  plugins: [
    import('@tailwindcss/line-clamp')
  ],
}