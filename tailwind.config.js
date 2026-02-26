/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Quintessential"', 'serif'],
        primary: ['"Source Sans 3"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
