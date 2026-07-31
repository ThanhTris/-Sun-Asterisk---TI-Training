/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/index.html",
    "./src/pages/**/*.html",
    "./src/components/**/*.html",
    "./src/js/**/*.js"
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      colors: {
        brand: {
          // Core semantic colors (CSS variable–backed)
          primary:      'var(--color-brand-primary, #C01111)',
          heading:      'var(--color-brand-heading, #2B3441)',
          body:         'var(--color-brand-body, #4D5969)',
          footerBg:     'var(--color-footer-bg, #f7f7f7)',
          footerText:   'var(--color-footer-text, #949ba4)',
          footerTitle:  'var(--color-footer-title, #4d5969)',
          borderGray:   'var(--color-border-gray, #E4E4E4)',
          circleAccent: 'var(--color-circle-accent, #E4E4E4)',
          // Layout / background shades
          bgLight:      '#F5F7FA',
          bgDark:       '#111827',
          // Supplementary brand colors (for decorative elements)
          cardBg:         '#F9F9F9',   // Card borders, slide overlays
          cardBorder:     '#D7DADC',   // Talent Platform card border
          accentRedDark:  '#D82329',   // Decorative circles (dark shade)
          accentRedLight: '#EF3F45',   // Decorative circles (light shade)
          redTint:        '#FFEFF0',   // Subtle decorative dots
          statGradient:   '#E05252',   // Stat counter gradient end color
          socialIcon:     '#8D9BAE',   // Footer social icon background
        }
      },
      fontFamily: {
        sans:    ['Roboto', 'sans-serif'],
        heading: ['Roboto Slab', 'serif']
      }
    },
  },
  plugins: [],
}
