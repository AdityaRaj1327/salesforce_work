/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#2c2f33',
          surface: '#23272a',
          card: '#1e2124',
          border: '#3a3f44',
          text: '#b9bbbe',
          textSecondary: '#72767d',
        },
      },
    },
  },
  plugins: [],
}
