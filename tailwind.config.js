/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "752px",
      lg: "1280px",
    },
    extend: {},
  },
  plugins: [],
};
