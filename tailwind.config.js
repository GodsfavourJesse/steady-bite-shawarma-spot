/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        // metalmania: ["var(--font-metalmania)", "cursive"],
        fondamento: ["var(--font-fondamento)", "serif"],
      },
      colors: {
        primary: "#0be42f",
        secondary: "#07ee26",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(60deg, rgb(7, 238, 38), #0be42fc4)",
      },
    },
  },
  plugins: [],
};
