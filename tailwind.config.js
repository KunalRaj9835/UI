/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#0F1209',
        'text-light': '#ffffff',
        'accent-green': '#a4ff00',
        'menu-bg-dark': '#1A1D14',
        'section-bg-dark': '#141810',
        'border-dark': '#2A2E22',
      }
    },
  },
  plugins: [],
}