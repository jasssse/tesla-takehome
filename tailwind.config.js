/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_bg: '#121212',
        dark_header_text: '#ffffff',
        dark_body_text: '#8b8b8b',
        dark_accent: '#282828'
      }
    },
  },
  plugins: [],
  darkMode: "class",
}

