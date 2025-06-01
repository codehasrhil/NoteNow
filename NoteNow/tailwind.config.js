/** @type {import('tailwindcss').Config} */
export default {
  dark: 'class',  // ✅ This is the correct place for dark mode config
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}