/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary": "#015249",
      "secondary": "#57BC90",
      "accent": "#77C9D4",
      "neutral": "#A5A5AF",
      "base-100": "#FFFFFF",
      "info": "#3BADC9",
      "success": "#1FC77E",
      "warning": "#F9CB66",
      "error": "#EB3351",
      "dark": {
        "primary": "#F64668",
        "secondary": "#984063",
        "accent": "#41436A",
        "neutral": "#2A3950",
        "base-100": "#FFFFFF",
        "info": "#3BADC9",
        "success": "#1FC77E",
        "warning": "#F9CB66",
        "error": "#EB3351",
      }
    },
    extend: {},
  },
  plugins: [],
};
