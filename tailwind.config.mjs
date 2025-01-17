/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",   // Correct path to `app`
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      animation: {
        customScroll: 'customScroll 40s linear infinite', // Define your custom animation
      },
      keyframes: {
        customScroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(calc(450px * -10))' },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Use Inter as the default sans
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paraColor:"#878787",
        primary:"#1BB1F1"
      },
    },
  },
  plugins: [],
};
