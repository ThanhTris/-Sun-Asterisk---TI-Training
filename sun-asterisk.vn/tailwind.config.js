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
          primary: 'var(--color-brand-primary, #C01111)',
          heading: 'var(--color-brand-heading, #2B3441)',
          body: 'var(--color-brand-body, #4D5969)',
          footerBg: 'var(--color-footer-bg, #f7f7f7)',
          footerText: 'var(--color-footer-text, #949ba4)',
          footerTitle: 'var(--color-footer-title, #4d5969)',
          borderGray: 'var(--color-border-gray, #E4E4E4)',
          circleAccent: 'var(--color-circle-accent, #E4E4E4)',
          bgLight: '#F5F7FA',
          bgDark: '#111827'
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
