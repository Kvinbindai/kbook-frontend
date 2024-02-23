/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["retro", "halloween"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

