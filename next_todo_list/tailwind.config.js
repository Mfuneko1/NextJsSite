/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      }
    },
  },
  plugins: [],
}

