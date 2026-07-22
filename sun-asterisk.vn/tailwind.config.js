/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./ve-chung-toi/**/*.html",
    "./du-an/**/*.html",
    "./co-hoi-nghe-nghiep/**/*.html",
    "./moi-truong-lam-viec/**/*.html",
    "./tin-tuc/**/*.html",
    "./src/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C01111',   // Sun* signature red/orange
          heading: '#2B3441',   // Heading and title text color
          body: '#4D5969',      // Content/body text color
          bgLight: '#F5F7FA',   // Light gray background
          bgDark: '#111827'     // Dark background
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}
