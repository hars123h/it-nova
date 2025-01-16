/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",   // Correct path to `app`
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Use Inter as the default sans
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paraColor:"#878787"
      },
    },
  },
  plugins: [],
};
