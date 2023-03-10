/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
          transparent: 'transparent',
          'primary': "#015249",
          'secondary': "#57BC90",
          'accent': "#77C9D4",
          'neutral': "#A5A5AF",
          'base-100': "#FFFFFF",
          'black': "#01001E",
          dark: {
            'primary': "#F64668",
            'secondary': "#984063",
            'accent': "#41436A",
            'neutral': "#2A3950",
            "base-100": "#FFFFFF",
          }
      },
    },
  },
  plugins: [],
};
