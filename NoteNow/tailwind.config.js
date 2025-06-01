/** @type {import('tailwindcss').Config} */
export default {
  dark: 'class',  // ✅ This is the correct place for dark mode config
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '1100px',  // You can name it whatever you like
      },
      maxWidth: {
        '1100': '1100px',    // Optional: for clarity
      },
  },
},
  plugins: [],
}