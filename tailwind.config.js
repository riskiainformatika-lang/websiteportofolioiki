/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ⬅️ PASTIKAN INI 'class'
  theme: {
    extend: {
      // ... (extension Anda yang sudah ada)
    },
  },
  plugins: [],
}